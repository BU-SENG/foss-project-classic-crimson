// Configuration file required for Prisma v7.0.0+ for direct database connection.

// CORRECTED: definePrismaConfig is now imported from @prisma/client
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
// This import is used for type hinting the configuration
import { type PrismaClientOptions } from "@prisma/client";

// We define a config object with the structure required by Prisma v7
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn(
    "DATABASE_URL environment variable is not set. Prisma generation might still work if the environment is otherwise configured, but it is best practice to set it."
  );
}

// Set up the PostgreSQL adapter
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// This object follows the shape of the client configuration options
const prismaConfig: PrismaClientOptions = {
  // This is the key part: linking the datasource to the adapter
  datasource: {
    db: {
      provider: "postgresql",
      adapter: adapter,
    },
  },
};

export default prismaConfig;
