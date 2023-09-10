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
 *       tags:
 *         - Users
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
 *       - Users
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

/**
 * @swagger
 * /api/user/search/prefix/{searchContent}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get users by prefix search
 *     description: Get a list of users whose usernames start with a specific prefix.
 *     parameters:
 *       - in: path
 *         name: searchContent
 *         schema:
 *           type: string
 *         required: true
 *         description: The prefix to search for in usernames.
 *     responses:
 *       '200':
 *         description: User list retrieved successfully.
 */
router.get('/search/prefix/:searchContent', authJwt.verifyToken, async (req, res) => {
  const prefix = req.params.searchContent
  let results = await dal.getAllUsersMatchingPrefix(prefix)
  console.log(results)
  let users = []
  results.forEach((item) => {
    users.push(
      item.id
    )
  })
  const indexOfSelf = users.indexOf(req.bodyAuth.userId)
  if (indexOfSelf > -1) {
    users.splice(indexOfSelf, 1)
  }
  res.send(users)
})

/**
 * @swagger
 * /api/user/search/substring/{searchContent}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get users by substring search
 *     description: Get a list of users whose usernames contain a specific substring.
 *     parameters:
 *       - in: path
 *         name: searchContent
 *         schema:
 *           type: string
 *         required: true
 *         description: The substring to search for in usernames.
 *     responses:
 *       '200':
 *         description: User list retrieved successfully.
 */
router.get('/search/substring/:searchContent', authJwt.verifyToken, async (req, res) => {
  const substring = req.params.searchContent
  let results = await dal.getAllUsersMatchingSubstring(substring)
  let users = []
  results.forEach((item) => {
    users.push(
      item.id
    )
  })
  const indexOfSelf = users.indexOf(req.bodyAuth.userId)
  if (indexOfSelf > -1) {
    users.splice(indexOfSelf, 1)
  }
  res.send(users)
})

/**
 * @swagger
 * /api/user/all:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get all users
 *     description: Get a list of all users except the authenticated user.
 *     responses:
 *       '200':
 *         description: User list retrieved successfully.
 */
router.get('/all', authJwt.verifyToken, async (req, res) => {
  let results = await dal.getAllUsers()
  let users = []
  results.forEach((item) => {
    users.push(item.id)
  })
  const indexOfSelf = users.indexOf(req.bodyAuth.userId)
  if (indexOfSelf > -1) {
    users.splice(indexOfSelf, 1)
  }
  res.send(users)
})



export default router
