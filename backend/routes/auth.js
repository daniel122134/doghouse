import express from "express";
import {dal} from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router()


router.put('/login', async (req, res) => {

  // check user password and username and set cookie
  const username = req.body.username
  const passwordHash = req.body.passwordHash
  const rememberMe = req.body.rememberMe
  let results = await dal.getAllUsers()
  let user = results.find(user => user.username === username)

  if (!user || user.passwordHash !== passwordHash) {
    return res.status(404).send({error: "User or password did not match."});
  }

  req.session.token = authJwt.signToken(user.id, user.username, user.email, rememberMe)

  await dal.logActivity(user.id, "login")
  return res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    isAdmin: username === "admin",
  });

})
  
router.put('/logout', authJwt.verifyToken, async (req, res) => {
  await dal.logActivity(req.bodyAuth.userId, "logout")
  req.session = null
  res.send({message: "logout success"})
})


export default router
