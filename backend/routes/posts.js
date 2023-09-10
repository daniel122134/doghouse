import express from "express";
import { dal } from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router();

/**
 * @swagger
 * /posts/:
 *   post:
 *     tags:
 *       - Posts
 *     summary: Create a new post
 *     description: Create a new post with user authentication.
 *     requestBody:
 *       description: Post content and user ID.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The content of the post.
 *     responses:
 *       '200':
 *         description: Post created successfully.
 *       '400':
 *         description: Invalid request. Post content too long.
 */
router.post('/posts/', authJwt.verifyToken, async (req, res) => {
  console.log(req.body);
  const userId = req.bodyAuth.userId;
  const content = req.body.content;
  if (content.length > 300) {
    return res.status(400).send({ error: "Post content too long, post must be shorter than 300 characters" });
  }

  await dal.createPost(userId, content);
  await dal.logActivity(userId, "posted");
  res.send("Posted successfully");
});

/**
 * @swagger
 * /posts/{postId}:
 *   put:
 *     tags:
 *       - Posts
 *     summary: Edit post content
 *     description: Edit the content of a post by its ID with user authentication.
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to edit.
 *     requestBody:
 *       description: Post content and user ID.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 description: The new content of the post.
 *     responses:
 *       '200':
 *         description: Post content updated successfully.
 */
router.put('/posts/:postId', authJwt.verifyToken, async (req, res) => {
  console.log(req.body);
  const userId = req.bodyAuth.userId;
  const postId = req.params.postId;
  const content = req.body.content;
  let results = await dal.editPostContent(postId, content);
  await dal.logActivity(userId, "updated post");
  res.send(results);
});

/**
 * @swagger
 * /posts/{postId}/updateTime:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get post update time
 *     description: Get the last update time of a post by its ID.
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post.
 *     responses:
 *       '200':
 *         description: Post update time retrieved successfully.
 */
router.get('/posts/:postId/updateTime', authJwt.verifyToken, async (req, res) => {
  console.log(req.query);
  const postId = req.params.postId;
  let results = await dal.getPostUpdateTime(postId);
  console.log(results);
  res.send(results);
});

/**
 * @swagger
 * /api/posts/list/followed:
 *   get:
 *     tags:
 *       - Posts
 *     summary: Get posts followed by the user
 *     description: Get a list of posts followed by the authenticated user.
 *     responses:
 *       '200':
 *         description: User's followed posts retrieved successfully.
 */
router.get('/posts/list/followed', authJwt.verifyToken, async (req, res) => {
  console.log(req.query);
  const userId = req.bodyAuth.userId;
  let results = await dal.getAllUserFollowsPosts(userId);
  console.log(results);
  let posts = [];
  results.forEach((item) => {
    posts.push({
      id: item.id,
      content: item.content,
      timeStamp: item.updated_at,
      posterId: item.followedId ? item.followedId : userId,
    });
  });
  res.send(posts);
});

/**
 * @swagger
 * /likes/{postId}:
 *   post:
 *     tags:
 *       - Likes
 *     summary: Add a like to a post
 *     description: Add a like to a post by its ID with user authentication.
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to like.
 *     responses:
 *       '200':
 *         description: Like added successfully.
 */
router.post('/likes/:postId', authJwt.verifyToken, async (req, res) => {
  console.log(req.body);
  const userId = req.bodyAuth.userId;
  const postId = req.params.postId;
  let results = await dal.addLike(userId, postId);
  res.send("Success");
});


/**
 * @swagger
 * /likes/{postId}:
 *   delete:
 *     tags:
 *       - Likes
 *     summary: Remove a like from a post
 *     description: Remove a like from a post by its ID with user authentication.
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to remove the like from.
 *     responses:
 *       '200':
 *         description: Like removed successfully.
 */
router.delete('/likes/:postId', authJwt.verifyToken, async (req, res) => {
  console.log(req.body);
  const userId = req.bodyAuth.userId;
  const postId = req.params.postId;
  let results = await dal.removeLike(userId, postId);
  res.send("Success");
});

/**
 * @swagger
 * /likes/{postId}:
 *   get:
 *     tags:
 *       - Likes
 *     summary: Get the number of likes on a post
 *     description: Get the number of likes on a post by its ID.
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to get likes for.
 *     responses:
 *       '200':
 *         description: Number of likes retrieved successfully.
 */
router.get('/likes/:postId', authJwt.verifyToken, async (req, res) => {
  const postId = req.params.postId;
  let results = await dal.getPostLikeNumber(postId);
  console.log(results);
  res.send(results);
});

/**
 * @swagger
 * /likes/{postId}/userLike:
 *   get:
 *     tags:
 *       - Likes
 *     summary: Check if the user has liked a post
 *     description: Check if the authenticated user has liked a post by its ID.
 *     parameters:
 *       - in: path
 *         name: postId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the post to check for a like.
 *     responses:
 *       '200':
 *         description: Like status retrieved successfully.
 */
router.get('/likes/:postId/userLike', authJwt.verifyToken, async (req, res) => {
  console.log(req.body);
  const postId = req.params.postId;
  const userId = req.bodyAuth.userId;
  let results = await dal.getPostLikeNumberByUser(postId, userId);
  console.log(results);
  res.send(results);
});


export default router
