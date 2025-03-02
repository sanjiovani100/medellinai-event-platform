const { execSync } = require("child_process");

// Run the build with ESLint disabled
try {
  execSync("cd template-solar && npm run build", {
    stdio: "inherit",
    env: {
      ...process.env,
      NEXT_DISABLE_ESLINT_DURING_BUILD: "1",
      NEXT_TELEMETRY_DISABLED: "1",
    },
  });
} catch (error) {
  console.error("Build failed:", error);
  process.exit(1);
}
