require("dotenv").config();

module.exports = {
  server: {
    port: process.env.port || 4000,
  },
  sessions: {
    secret: process.env.SESSIONS_JWT_SECRET || "12345678965432123456789876543212345678987654321234567898a",
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
};
