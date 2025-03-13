const { spawn } = require("child_process");

const runCommand = (command) => {
  const [cmd, ...args] = command.split(" ");
  return spawn(cmd, args, { stdio: "inherit" });
};

runCommand("npm run dev:start");

const shutdown = () => {
  console.log("\n\nEncerrando...");
  runCommand("npm run postdev").on("exit", () => process.exit());
};

process.on("SIGINT", shutdown); // Ctrl+C
