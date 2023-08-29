const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const cors = require('cors')
const {
  getAllUsers,
  setFeatureState,
  getAllFeatures,
  setPeePoleOwner,
  getPoleOwner,
  createUser, logActivity, getEventLogs, updateProfilePicture,
  createPost,
  getAllPostsForUser,
  getAllPoles, getAllUserFollows, getAllUserFollowsPosts, addLike, getPostLikeNumber, getPostLikeNumberByUser,
  removeLike, editPostContent, getPostUpdateTime, updateUserData
} = require("./DAL/persist");
const cookieSession = require("cookie-session");
const config = require("./config/auth.config.js");
const jwt = require("jsonwebtoken");
const {authJwt} = require("./middleware");

const app = express()
const port = 8080
app.use(bodyParser.urlencoded({extended: false}))
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

//serve /app
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
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


app.post('/api/setPeePoleOwner', async (req, res) => {
  const poleName = req.body.poleName
  const ownerId = req.body.ownerId
  let results = await setPeePoleOwner(poleName, ownerId)
  res.send(results)
})

app.get('/api/getPoleOwner', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const poleName = req.query.poleName
  let results = await getPoleOwner(poleName)
  res.send(results)
})

app.get('/api/getAllPoles', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  let results = await getAllPoles()
  let dict = {}
  results.forEach((item) => {
    dict[item.name] = item.state
  })
  res.send(dict)
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

app.get('/api/getUserData', authJwt.verifyToken, async (req, res) => {
  let results = await getAllUsers()
  let user = results.find(user => user.id === req.session.userId)
  res.send({
    toy: user.toy || "unknown",
    age: user.age || "unknown",
    breed: user.breed || "unknown",
    location: user.location || "unknown",
    bio: user.bio || "unknown",
    profilePicture: user.profilePicture || null,
  })
})

app.post('/api/updateUserData', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.session.userId
  const age = req.body.age
  const breed = req.body.breed
  const favoriteToy = req.body.favoriteToy
  const location = req.body.location
  const bio = req.body.bio
  let results = await updateUserData(userId, age, breed, favoriteToy, location, bio)
  res.send(results)
})


const multer = require('multer');
const imageUploadPath = path.join(__dirname, '..', 'frontend', 'public', 'profilePictures');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function (req, file, cb) {
    cb(null, `${req.session.userId}.${file.originalname.split('.').pop()}`)
  }
})
const imageUpload = multer({storage: storage})
app.post('/image-upload', authJwt.verifyToken, imageUpload.array("my-image-file"), async (req, res) => {
  let results = await getAllUsers()
  let user = results.find(user => user.id === req.session.userId)
  await updateProfilePicture(user.id, path.join('/', 'public', 'profilePictures', `${req.session.userId}.${req.files[0].originalname.split('.').pop()}`))

  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})


app.post('/api/createPost', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.session.userId
  const content = req.body.content
  let results = await createPost(userId, content)
  await logActivity(userId, "posted")
  res.send(results)
})

app.post('/api/editPostContent', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.session.userId
  const postId = req.body.postId
  const content = req.body.content
  let results = await editPostContent(postId, content)
  await logActivity(userId, "updated post")
  res.send(results)
})

app.get('/api/getPostUpdateTime', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const postId = req.query.postId
  let results = await getPostUpdateTime(postId)
  console.log(results)
  res.send(results)
})

app.get('/api/getAllPostsForUser', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const userId = req.session.userId
  let results = await getAllPostsForUser(userId)
  console.log(results)
  res.send(results)
})

app.get('/api/getAllUserFollows', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const userId = req.session.userId
  let results = await getAllUserFollows(userId)
  console.log(results)
  res.send(results)
})

app.get('/api/getAllUserFollowsPosts', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const userId = req.session.userId
  let results = await getAllUserFollowsPosts(userId)
  console.log(results)
  let posts = []
  results.forEach((item) => {
    posts.push({
      id: item.id,
      content: item.content,
      timeStamp: item.updated_at
    })
  })
  res.send(posts)
})

app.post('/api/addLike', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.session.userId
  const postId = req.body.postId
  let results = await addLike(userId, postId)
  res.send("success")
})

app.post('/api/removeLike', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.session.userId
  const postId = req.body.postId
  let results = await removeLike(userId, postId)
  res.send("success")
})

app.get('/api/getPostLikeNumber', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const postId = req.query.postId
  let results = await getPostLikeNumber(postId)
  console.log(results)
  res.send(results)
})

app.get('/api/getPostLikeNumberByUser', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const postId = req.query.postId
  const userId = req.session.userId
  let results = await getPostLikeNumberByUser(postId, userId)
  console.log(results)
  res.send(results)
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})

