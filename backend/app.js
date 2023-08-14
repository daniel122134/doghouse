const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')
const {getAllUsers, setFeatureState, getAllFeatures} = require("./DAL/persist");
const {rapper} = require("./responseRapper");

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


app.use((req, res, next) => {
  let oldSend = res.send
  res.send = function(data) {
    console.log(data) // do something with the data
    res.send = oldSend // set function back to avoid the 'double-send'
    if (typeof data === 'string') {
      data = {status: 'success', data: res.body}
    }
    return res.send(data) // just call as normal with data
  }
  next()
})


app.post('/api/pee',async  (req, res) => {
  console.log(req.body)
  let results = await getAllUsers()
  res.send(results)
})

app.post('/api/setFeatureState', async (req, res) => {
  console.log(req.body)
  const featureName = req.body.featureName
  const state = req.body.featureState
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

