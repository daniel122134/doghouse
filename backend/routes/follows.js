import express from "express";
import {dal} from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router()


/**
 * @swagger
 * /api/follow/{userId}:
 *   delete:
 *     summary: Unfollow a user
 *     description: Unfollow a user by their ID.
 *     tags:
 *       - Follows
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to unfollow.
 *     responses:
 *       '200':
 *         description: Unfollow successful.
 */
router.delete('/:userId', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  const followedId = req.params.userId
  let results = await dal.unfollowUser(userId, followedId)
  res.send("success")
})


/**
 * @swagger
 * /api/follow/{userId}:
 *   post:
 *     summary: Follow a user
 *     description: Follow a user by their ID.
 *     tags:
 *       - Follows
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to follow.
 *     responses:
 *       '200':
 *         description: Follow successful.
 */
router.post('/:userId', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  const followedId = req.params.userId
  let results = await dal.followUser(userId, followedId)
  res.send("success")
})



/**
 * @swagger
 * /api/follow/{userId}:
 *   get:
 *     summary: Check if following
 *     description: Check if the authenticated user is following another user by their ID.
 *     tags:
 *       - Follows
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to check.
 *     responses:
 *       '200':
 *         description: Check successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isFollowing:
 *                   type: boolean
 */
router.get('/:userId', authJwt.verifyToken, async (req, res) => {
  const userId = req.bodyAuth.userId
  const followedId = req.params.userId
  let results = (await dal.getIsFollowing(userId, followedId))[0].isFollowing
  console.log(results)
  res.send({isFollowing: results != 0})
})


/**
 * @swagger
 * /api/follow/usersFollowedByMe:
 *   get:
 *     summary: Get users followed by the authenticated user
 *     description: Get a list of users followed by the authenticated user.
 *     tags:
 *       - Follows
 *     responses:
 *       '200':
 *         description: User list retrieved successfully.
 */
router.get('/usersFollowedByMe', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  let results = await dal.getAllUsersFollowedByUser(userId)
  console.log(results)
  let users = []
  results.forEach((item) => {
    users.push(
      item.followedId
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
 * /api/follow/usersNotFollowedByMe:
 *   get:
 *     summary: Get users not followed by the authenticated user
 *     description: Get a list of users not followed by the authenticated user.
 *     tags:
 *       - Follows
 *     responses:
 *       '200':
 *         description: User list retrieved successfully.
 */
router.get('/usersNotFollowedByMe', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  let results = await dal.getAllUsersNotFollowedByUser(userId)
  console.log(results)
  let users = []
  results.forEach((item) => {
    users.push({
      userid: item.id
    })
  })
  const indexOfSelf = users.indexOf(req.bodyAuth.userId)
  if (indexOfSelf > -1) {
    users.splice(indexOfSelf, 1)
  }
  res.send(users)
})


export default router
