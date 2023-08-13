const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')
const {db, getAllUsers, setFeatureState, getAllFeatures} = require("./DAL/persist");

const app = express()
const port = 8080
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: 1024 *1024 * 5 }))
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
)

app.use('/public', express.static(path.join(__dirname, '..', 'frontend', 'public')))

app.use(
  express.static(path.join(__dirname, '..', 'frontend', 'dist'))
)

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist'))
})

app.post('/api/pee',async  (req, res) => {
  console.log(req.body)
  let results = await getAllUsers()
  res.send(results)
})

app.post('/api/setFeatureState', async (req, res) => {
  console.log(req.body)
  const featureName = req.body.featureName
  const state = req.body.feaureState
  let results = await setFeatureState(featureName, state)
  res.send(results)
} )

app.get('/api/getFeatures', async (req, res) => {
  console.log(req.query)
  let results = await getAllFeatures()
  let dict = {}
  results.forEach((item) => {
    dict[item.name] = item.state
  })
  res.send(dict)
})


app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})

