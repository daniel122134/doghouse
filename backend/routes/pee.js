import express from "express";
import {dal} from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router()

/**
 * @swagger
 * /api/pee/{poleName}/owner:
 *   put:
 *     tags:
 *       - peePoles 
 *     summary: sets the owner of a pole
 *     description: sets the owner of a pole
 *     parameters:
 *       - in: path
 *         name: poleName
 *         schema:
 *           type: string
 *         required: true
 *         description: the name of the pole
 *     responses:
 *       200:
 *         description: success message
 */
router.put('/:poleName/owner/', authJwt.verifyToken, async (req, res) => {
  const poleName = req.params.poleName
  const ownerId = req.body.ownerId
  let results = await dal.setPeePoleOwner(poleName, ownerId)
  res.send(results)
})

/**
 * @swagger
 * /api/pee/{poleName}/owner:
 *   get:
 *     tags:
 *       - peePoles
 *     summary: gets the owner of a pole
 *     description: gets the owner of a pole
 *     parameters:
 *       - in: path
 *         name: poleName
 *         schema:
 *           type: string
 *         required: true
 *         description: the name of the pole
 *     responses:
 *       200:
 *         description: owner name
 */
router.get('/:poleName/owner/', authJwt.verifyToken, async (req, res) => {
  const poleName = req.params.poleName
  let results = await dal.getPoleOwner(poleName)
  res.send(results)
})

/**
 * @swagger
 * /api/pee/allPoles:
 *   get:
 *     tags: 
 *       - peePoles
 *     summary: gets a list of all poles
 *     description: gets a list of all poles
 *     responses:
 *       200:
 *         description: list of all poles
 */
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
