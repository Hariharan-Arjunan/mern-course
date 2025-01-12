import jwt from "jsonwebtoken";

const verifyJWT = (req, res, next) => {
  const token = req.headers?.authorization || req.headers?.Authorization;

  if (!token) {
    return res.status(401).json({ success: false, message: "Please login" });
  }

  try {
    jwt.verify(token, "SECRETKEY");
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Authentication Failed", error });
  }
};

export default verifyJWT;
