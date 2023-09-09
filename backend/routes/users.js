import express from "express";
import {dal} from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router()

/**
 * @swagger
 * definitions:
 *   User:           # <----------
 *     type: object
 *     required:
 *       - userName
 *     properties:
 *       userName:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 * paths:
 *   /api/user:
 *     post:
 *       summary: Add a new pet
 *       requestBody:
 *         description: Optional description in *Markdown*
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - userName
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 passwordHash:
 *                   type: string
 *       responses:
 *         '201':
 *           description: Created
 */
router.post('/', async (req, res) => {
  try {
    await dal.createUser(req.body.username, req.body.email, req.body.passwordHash);
    let results = await dal.getAllUsers()
    let user = results.find(user => user.username === req.body.username)
    req.session.token = authJwt.signToken(user.id, user.username, user.email)

    await dal.logActivity(user.id, "signup")
    return res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      isAdmin: user.username === "admin",
    });

  } catch (e) {
    res.status(500).send({message: e})
  }
})

/**
 * @swagger
 * /api/user/{userId}:
 *   delete:
 *     tags:
 *       - users
 *     summary: deletes the user
 *     description: deletes the user
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: the id of the user
 *     responses:
 *       200:
 *         description: success message
 */
router.delete('/:userId', authJwt.verifyToken, async (req, res) => {
  const userId = req.params.userId
  let results = await dal.deleteUser(userId) 
  res.send("success")
})

export default router
