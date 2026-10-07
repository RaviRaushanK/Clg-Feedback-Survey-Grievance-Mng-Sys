const app = require("./app");
const env = require("./config/env");
const connectDB = require("./config/db");

const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(`CampusVoice API running in ${env.nodeEnv} mode on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start CampusVoice API:", error.message);
    process.exit(1);
  }
};

startServer();
