import jwt from 'jsonwebtoken';
import config from "../config/auth.config.js";
const signToken = (id,username, email, rememberMe) => {
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

const verifyToken = (req, res, next) => {
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
      
      req.body.auth = {};
      req.body.auth.userId = decoded.id;
      req.body.auth.username = decoded.username;
      req.body.auth.email = decoded.email;
      
      next();
    });
};

const checkIfTokenAlreadyExistsAndRedirectIntoApp = (req, res, next) => {
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

const isAdmin = async (req, res, next) => {

  if (req.body.auth.username === "admin") {
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

export default authJwt;