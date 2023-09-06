const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");

signToken = (id,username, email, rememberMe) => {
  return jwt.sign({
      id: id,
      username: username,
      email: email,
    },
    config.secret, {
      algorithm: 'HS256',
      allowInsecureKeySizes: true,
      expiresIn: rememberMe ? 864000 : 1800 // 10 days or 30 minutes
    },null);
}

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.redirect('/login')
  }

  jwt.verify(token,
    config.secret,
    {},
    (err, decoded) => {
      if (err) {
        // redirect to login page
        return res.redirect('/login')
      }
      
      // todo - is this a good practice, does this create 3 more cookies?
      req.session.userId = decoded.id;
      req.session.username = decoded.username;
      req.session.email = decoded.email;
      
      next();
    });
};

checkIfTokenAlreadyExistsAndRedirectIntoApp = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return next();
  }

  jwt.verify(token,
    config.secret,
    {},
    (err, decoded) => {
      if (err) {
        next();
      }

      return res.redirect('/app');
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
  signToken,
  checkIfTokenAlreadyExistsAndRedirectIntoApp
};
module.exports = authJwt;