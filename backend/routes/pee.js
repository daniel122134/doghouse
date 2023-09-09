import express from "express";
import {dal} from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router()

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of users from the database.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.put('/:poleName/owner/', async (req, res) => {
  const poleName = req.params.poleName
  const ownerId = req.body.ownerId
  let results = await dal.setPeePoleOwner(poleName, ownerId)
  res.send(results)
})

router.get('/:poleName/owner/', authJwt.verifyToken, async (req, res) => {
  const poleName = req.params.poleName
  let results = await dal.getPoleOwner(poleName)
  res.send(results)
})

router.get('/allPoles', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  let results = await dal.getAllPoles()
  let dict = {}
  results.forEach((item) => {
    dict[item.name] = item.state
  })
  res.send(dict)
})

export default router
