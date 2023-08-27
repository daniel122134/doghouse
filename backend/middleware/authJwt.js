const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

signToken = (id,username, email) => {
  return jwt.sign({
      id: id,
      username: username,
      email: email,
    },
    config.secret, {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      // todo - deal with expiration time and make sure to logout the user after it passes
      expiresIn: 86400, // 24 hours
    },null);
}

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token,
    config.secret,
    {},
    (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      
      // todo - is this a good practice, does this create 3 more cookies?
      req.session.userId = decoded.id;
      req.session.username = decoded.username;
      req.session.email = decoded.email;
      
      next();
    });
};

isAdmin = async (req, res, next) => {

  if (req.session.username === "admin") {
    return next();
  }

  return res.status(403).send({
    message: "Require Admin Role!",
  });
  
};


const authJwt = {
  verifyToken,
  isAdmin,
  signToken
};
module.exports = authJwt;