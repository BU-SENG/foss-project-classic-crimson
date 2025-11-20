import bcrypt from "bcryptjs";
import {Request, Response} from "express";
import prisma from "../config/db";
import {generateNew, generateTokens, verifyToken} from "../utils/generateToken";

export const register = async (req: Request, res: Response) => {
	const {username, email, password} = req.body;
	if (!username || !email || !password) {
		return res
			.status(400)
			.json({message: "Username, email, and password are required"});
	}

	try {
		const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
		const hashed = await bcrypt.hash(password, 10);
		const user = await prisma.user.create({
			data: {username, email, password: hashed},
		});

		const tokens = await generateTokens(user.id);
		//This line removes the password gotten from the response when registering
		const { password: _, ...userWithoutPassword } = user;
		res.status(201).json({user, ...tokens});
	} catch (error) {
		res.status(400).json({message: "Error registering user", error});
	}
};

export const login = async (req: Request, res: Response) => {
	const {email, password} = req.body;

	if (!email || !password) {
		return res
			.status(400)
			.json({message: "email and password are required"});
	}

	try {
		const user = await prisma.user.findUnique({where: {email}});
		if (!user) return res.status(404).json({message: "User not found"});

		const valid = await bcrypt.compare(password, user.password);
		if (!valid)
			return res.status(401).json({message: "Invalid credentials"});

		const tokens = await generateTokens(user.id);
		const { password: _, ...userWithoutPassword } = user; //This line removes the password from the response
		res.json({user, userWithoutPassword, ...tokens});
	} catch (error) {
		console.log(error);
		res.status(500).json({message: "Error logging in", error});
	}
};

export const refreshAccessToken = async (req: Request, res: Response) => {
	const {refreshToken} = req.body;

	if (!refreshToken)
		return res.status(400).json({message: "No refresh token provided"});

	try {
		const stored = await prisma.refreshToken.findUnique({
			where: {token: refreshToken},
		});

		if (!stored || stored.expiresAt < new Date()) {
			return res
				.status(403)
				.json({message: "Invalid or expired refresh token"});
		}

		const payload = verifyToken(refreshToken);

		const newAccess = await generateNew(payload.userId);

		res.json({message: "Token generated", accessToken: newAccess});
	} catch (err) {
		res.status(403).json({message: "Could not refresh access token"});
	}
};

export const deleteUsers = async (req: Request, res: Response) => {
	const {userId} = req.params;

	// This ensures that userId is provided
    if (!userId) return res.status(400).json({ message: "User ID required" });

	try {
		// Delete related records first due to foreign key constraints
		await prisma.refreshToken.deleteMany({
			where: { userId: userId }
		});

		const user = await prisma.user.delete({ //To get the deleted user object back, not just a count
			where: { id: userId }
		});

		res.status(200).json({message: "User deleted successfully", user});
	} catch (error) {
		res.status(500).json({message: "Error deleting user", error});
	}
};
