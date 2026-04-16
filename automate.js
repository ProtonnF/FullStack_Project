const { exec } = require("child_process");

// Test files to run list
const testFiles = ["test.js", "test_teammate.js"];

console.log("Starting Automated Tests....");

// Run each test file
testFiles.forEach((file) => {
  exec(`node ${file}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing ${file}: ${error}`);
      return;
    }
    console.log(stdout.trim());
  });
});
