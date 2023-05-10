// const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// authentication middleware
exports.Authenticate = async (req, res, next) => {
  try {
    // get token from header
    const tokenString = req.headers.authorization;
    // split token from bearer
    const token = tokenString?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "You are not authenticated" });
    }
    // check if token is custom or google , return true if custom, false if google
    const isCustomAuth = token.length < 500;

    let decodedData;

    // if token is custom, verify it, else decode it
    if (token && isCustomAuth) {
      //
      decodedData = jwt.verify(token, config.jwt.jwtSecret);
      req.userId = decodedData?.userId
    } else {
      // decode google token without secret
      decodedData = jwt.decode(token);
      // get user id from decoded token
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
