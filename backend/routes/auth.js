import express from "express";
import { dal } from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router();

/**
 * @swagger
 * /login:
 *   put:
 *     tags:
 *       - Authentication
 *     summary: User login
 *     description: Authenticate a user with their username and password, and set a session token.
 *     requestBody:
 *       description: User credentials and rememberMe flag.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: The user's username.
 *               passwordHash:
 *                 type: string
 *                 description: The user's hashed password.
 *               rememberMe:
 *                 type: boolean
 *                 description: Flag to remember the user's session.
 *     responses:
 *       '200':
 *         description: User authenticated successfully.
 *       '404':
 *         description: User or password did not match.
 */
router.put('/login', async (req, res) => {
  const username = req.body.username;
  const passwordHash = req.body.passwordHash;
  const rememberMe = req.body.rememberMe;
  let results = await dal.getAllUsers();
  let user = results.find((user) => user.username === username);

  if (!user || user.passwordHash !== passwordHash) {
    return res.status(404).send({ error: "User or password did not match." });
  }

  req.session.token = authJwt.signToken(user.id, user.username, user.email, rememberMe);

  await dal.logActivity(user.id, "login");
  return res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    isAdmin: username === "admin",
  });
});

/**
 * @swagger
 * /logout:
 *   put:
 *     tags:
 *       - Authentication
 *     summary: User logout
 *     description: Log out an authenticated user and invalidate the session token.
 *     responses:
 *       '200':
 *         description: Logout success.
 */
router.put('/logout', authJwt.verifyToken, async (req, res) => {
  await dal.logActivity(req.bodyAuth.userId, "logout");
  req.session = null;
  res.send({ message: "Logout success" });
});

export default router;
