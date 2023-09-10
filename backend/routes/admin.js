import express from "express";
import {dal} from "../DAL/persist.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router()


/**
 * @swagger
 * /api/setFeatureState:
 *   put:
 *     summary: Set the state of a feature.
 *     tags:
 *       - Features
 *     parameters:
 *       - in: body
 *         name: featureState
 *         description: The name and state of the feature to set.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             featureName:
 *               type: string
 *             featureState:
 *               type: boolean
 *     responses:
 *       200:
 *         description: The state of the feature has been updated.
 */
router.put('/api/setFeatureState', authJwt.verifyToken, authJwt.isAdmin, async (req, res) => {
    console.log(req.body)
    const featureName = req.body.featureName
    const state = req.body.featureState
    let results = await dal.setFeatureState(featureName, state)
    res.send(results)
})

/**
 * @swagger
 * /api/getFeatures:
 *   get:
 *     summary: Get the state of all features.
 *     tags:
 *       - Features
 *     responses:
 *       200:
 *         description: A dictionary containing feature names and their states.
 */
router.get('/api/getFeatures', authJwt.verifyToken, async (req, res) => {
    console.log(req.query)
    let results = await dal.getAllFeatures()
    let dict = {}
    results.forEach((item) => {
        dict[item.name] = item.state
    })
    res.send(dict)
})


/**
 * @swagger
 * /api/getEventLogs:
 *   get:
 *     summary: Get event logs.
 *     tags:
 *       - Logs
 *     responses:
 *       200:
 *         description: An array of event logs.
 */
router.get('/api/getEventLogs', authJwt.verifyToken, authJwt.isAdmin, async (req, res) => {
    let results = await dal.getEventLogs()
    res.send(results)
})

export default router
