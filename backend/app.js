const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')
const {
  getAllUsers,
  setFeatureState,
  getAllFeatures,
  setPeePoleOwner,
  getPoleOwner,
  createUser, logActivity, getEventLogs
} = require("./DAL/persist");
const cookieSession = require("cookie-session");
const config = require("./config/auth.config.js");
const jwt = require("jsonwebtoken");
const {authJwt} = require("./middleware");

const app = express()
const port = 8080
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: 1024 * 1024 * 5}))
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
)

app.use(
  cookieSession({
    name: "user-session",
    secret: config.secret,
    httpOnly: true,
  })
);


app.use('/public', express.static(path.join(__dirname, '..', 'frontend', 'public')))

app.use(
  express.static(path.join(__dirname, '..', 'frontend', 'dist'))
)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist'))
})


app.use((req, res, next) => {
  let oldSend = res.send
  res.send = function (data) {
    console.log(data) // do something with the data
    res.send = oldSend // set function back to avoid the 'double-send'
    if (typeof data === 'string') {
      data = {status: 'success', data: res.body}
    }
    return res.send(data) // just call as normal with data
  }
  next()
})


app.post('/api/pee', async (req, res) => {
  const poleName = req.body.poleName
  const ownerId = req.body.ownerId
  let results = await setPeePoleOwner(poleName, ownerId)
  res.send(results)
})

app.post('/api/poleOwner',  authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const poleName = req.body.poleName
  let results = await getPoleOwner(poleName)
  res.send(results)
})

app.post('/api/setFeatureState', authJwt.verifyToken, authJwt.isAdmin, async (req, res) => {
  console.log(req.body)
  const featureName = req.body.featureName
  const state = req.body.featureState
  let results = await setFeatureState(featureName, state)
  res.send(results)
})

app.get('/api/getFeatures', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  let results = await getAllFeatures()
  let dict = {}
  results.forEach((item) => {
    dict[item.name] = item.state
  })
  res.send(dict)
})

app.post('/api/login', async (req, res) => {

  // check user password and username and set cookie
  const username = req.body.username
  const passwordHash = req.body.passwordHash
  let results = await getAllUsers()
  let user = results.find(user => user.username === username)

  if (!user) {
    return res.status(404).send({message: "User Not found."});
  }

  if (user.passwordHash !== passwordHash) {
    return res.status(401).send("user not authenticated")
  }

  req.session.token = authJwt.signToken(user.id, user.username, user.email)

  await logActivity(user.id, "login")
  return res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    isAdmin: username === "admin",
  });

})

app.post('/api/logout', authJwt.verifyToken, async (req, res) => {
  await logActivity(req.session.userId, "logout")
  req.session = null
  res.send({message: "logout success"})
})

app.post('/api/signup', async (req, res) => {
  try {
    await createUser(req.body.username, req.body.email, req.body.passwordHash);
    let results = await getAllUsers()
    let user = results.find(user => user.username === req.body.username)
    req.session.token = authJwt.signToken(user.id, user.username, user.email)

    await logActivity(user.id, "signup")
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

app.get('/api/getEventLogs', authJwt.verifyToken, authJwt.isAdmin, async (req, res) => {
  let results = await getEventLogs()
  res.send(results)
})

//getUserData
app.get('/api/getUserData', authJwt.verifyToken, async (req, res) => {
  let results = await getAllUsers()
  let user = results.find(user => user.id === req.session.userId)
  res.send({toy: user.toy || "unknown",
            age: user.age || "unknown",
            breed : user.breed || "unknown",
            location: user.location || "unknown",
            bio : user.bio || "unknown",
            profilePicture: user.profilePicture || null,
  })
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})

