/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Use ts-jest to compile TypeScript files during testing
  preset: "ts-jest",

  // CRITICAL FIX: Explicitly configure ts-jest to output CommonJS modules
  // to avoid the 'Cannot use import statement outside a module' error.
  globals: {
    "ts-jest": {
      // Force ts-jest to compile modules to CommonJS format.
      // This is necessary because Jest/Node often struggles with pure ES Module syntax (import/export).
      tsconfig: {
        module: "commonjs",
      },
    },
  },

  // The test environment that will be used for testing (node is correct for backend)
  testEnvironment: "node",

  // Define which files Jest should look for
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],

  // Specify the module file extensions Jest should look for
  moduleFileExtensions: ["ts", "js", "json", "node"],

  // Root directory where Jest should start searching for files
  rootDir: "./src",

  // Setup the path mappings if you use absolute imports (e.g., in tsconfig.json)
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // Example: change to match your paths if needed
  },

  // Collect code coverage for the files in the src directory
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/*.d.ts", // Exclude definition files
  ],
};
