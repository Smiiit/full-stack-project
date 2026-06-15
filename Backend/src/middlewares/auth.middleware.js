const jwt = require("jsonwebtoken");
const tokenBlackListModel = require("../models/blacklist.model");

async function authUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token Not Provided",
    });
  }

  const isTokenBlackListed = await tokenBlackListModel.findOne({ token });

  if (isTokenBlackListed) {
    return res.status(401).json({
      message: "Token is invalid",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
}

module.exports = { authUser };
