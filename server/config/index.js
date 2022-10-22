require("dotenv").config();

module.exports = {
  server: {
    port: process.env.port || 4000,
  },
  sessions: {
    secret: process.env.SESSIONS_JWT_SECRET
  },
  mongodb: {
    uri: process.env.MONGODB_URI,
  },
};
