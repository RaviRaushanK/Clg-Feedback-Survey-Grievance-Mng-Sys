const dotenv = require("dotenv");

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/campusvoice",
  frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
};

module.exports = env;
