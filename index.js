#!/usr/bin/env node

const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

// Get the app name and version from the command-line arguments
const appName = process.argv[2];
const rnVersion = process.argv[3] || "latest"; // Default to 'latest' if version is not provided

if (!appName) {
  console.error("Please provide a name for your React Native app.");
  process.exit(1);
}

// Define the path to the `src` folder in the starter directory
const starterSrcPath = path.join(__dirname, "src");

// Step 1: Run react-native init to create a new project with the specified version
console.log(
  `Initializing new React Native project: ${appName} with version: ${rnVersion}...`
);
if (
  shell.exec(
    `npx react-native${rnVersion ? "@" + rnVersion : ""} init ${appName} ${
      rnVersion ? "--version " + rnVersion : ""
    }  --skip-install`
  ).code !== 0
) {
  console.error("Error: Failed to initialize React Native project.");
  process.exit(1);
}

// Step 2: Navigate to the project directory
const projectPath = path.join(process.cwd(), appName);
shell.cd(projectPath);

// Step 3: Copy the `src` directory from the starter to the new project
const destinationSrcPath = path.join(projectPath, "src");
if (fs.existsSync(starterSrcPath)) {
  shell.cp("-r", starterSrcPath, destinationSrcPath);
  console.log("Copied src directory to the new project.");
} else {
  console.error("Error: src directory not found in starter.");
}

console.log(
  "React Native project with TypeScript support created successfully."
);
