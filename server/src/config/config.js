const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  app: {
    port: process.env.PORT || 8080,
  },
  database: {
    url: process.env.DB_URL || "mongodb://localhost:27017/testacutal",
  },
  jwt: {
    jwtSecret: process.env.JWT_SECRET,
  },
};
