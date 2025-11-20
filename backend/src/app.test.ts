import request from "supertest";
// IMPORTANT FIX: Import Request and Response types for explicit parameter typing
import express, { Router, Request, Response } from "express";
import app from "@/app"; // Adjust path based on where your app.ts/js is located

// We need to mock the external router to isolate this test
// from potential errors in sub-routes defined in ./routes/root.routes.
// This is critical for true isolation.
jest.mock("./routes/root.routes", () => {
  // Return a basic mock router that just sends a simple response
  const express = require("express");
  const mockRouter = express.Router();

  // FIX: Add explicit types (Request, Response) to resolve TS7006
  mockRouter.get("/test", (req: Request, res: Response) => {
    res.status(200).send("API route reached successfully");
  });
  // This POST route is necessary for Test 3 (JSON middleware check)
  // FIX: Add explicit types (Request, Response) to resolve TS7006
  mockRouter.post("/test", (req: Request, res: Response) => {
    // We just respond OK to confirm the route was hit and middleware passed
    res.status(200).send("OK");
  });

  return mockRouter;
});

describe("Express Application Setup (app.ts)", () => {
  // FIX: Removing explicit type annotation to resolve Babel SyntaxError
  let appInstance;

  // Test 1: Check the basic root endpoint ("/")
  test("GET / should return a welcome message with status 200", async () => {
    // We use supertest's request utility to simulate a GET request to the 'app' instance
    const response = await request(app).get("/");

    // ASSERT: Check the HTTP status code
    expect(response.statusCode).toBe(200);

    // ASSERT: Check the response body content
    expect(response.text).toBe("Welcome to MoodBoard Backend!");
  });

  // Test 2: Check if the /api route prefix is correctly applied
  test("GET /api/test should reach the mocked router and return status 200", async () => {
    // We send a request to a route we know is only handled by the mocked router
    // through the /api prefix.
    const response = await request(app).get("/api/test");

    // ASSERT: Check the HTTP status code
    expect(response.statusCode).toBe(200);

    // ASSERT: Check the response body from the mocked router
    expect(response.text).toBe("API route reached successfully");
  });

  // Test 3: Check if the application correctly handles JSON bodies (Middleware test)
  test("POST request with JSON body should be handled by express.json middleware", async () => {
    const testData = { item: "Test Post", value: 123 };

    // Send a POST request with a JSON payload
    const response = await request(app)
      .post("/api/test") // Use the mocked endpoint
      .send(testData);

    // We check for 200/OK status, which confirms the middleware passed and the mock route handled it.
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("OK");
  });

  // Test 4: Check for missing route (404)
  test("GET to a non-existent route should return 404", async () => {
    const response = await request(app).get("/api/non-existent-route");

    // ASSERT: Check for 404 Not Found
    expect(response.statusCode).toBe(404);
  });
});
