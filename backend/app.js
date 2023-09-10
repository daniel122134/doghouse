import express from 'express'
import bodyParser from "body-parser";

import path from 'path'
import cors from 'cors'
import {dal} from './dal/persist.js'

import cookieSession from 'cookie-session'
import config from "./config/auth.config.js";
import authJwt from "./middleware/authJwt.js";
import multer from 'multer';
import swaggerJsdoc from "swagger-jsdoc"

import swaggerUi from 'swagger-ui-express';
import * as url from 'url';
import pee from "./routes/pee.js";
import users from "./routes/users.js";
import follows from "./routes/follows.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

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
app.get('/app', authJwt.verifyToken, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
})

//serve /login page
app.get('/login', authJwt.checkIfTokenAlreadyExistsAndRedirectIntoApp, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
})

//serve /signup page
app.get('/signup', authJwt.checkIfTokenAlreadyExistsAndRedirectIntoApp, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
})


const specs = swaggerJsdoc({
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Doghouse API",
      version: "0.1.0",
      description: "This is the Doghouse API definition.",

      contact: {
        name: "Doghouse Team",
        email: "dhaddad96@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: [__dirname + "/*.js", __dirname + "/routes/*.js"],
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



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

app.use('/api/pee', pee) // todo do the same for the rest of the routes
app.use('/api/user', users) // 
app.use('/api/follow', follows) // 


app.put('/api/setFeatureState', authJwt.verifyToken, authJwt.isAdmin, async (req, res) => {
  console.log(req.body)
  const featureName = req.body.featureName
  const state = req.body.featureState
  let results = await dal.setFeatureState(featureName, state)
  res.send(results)
})

app.get('/api/getFeatures', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  let results = await dal.getAllFeatures()
  let dict = {}
  results.forEach((item) => {
    dict[item.name] = item.state
  })
  res.send(dict)
})

app.put('/api/login', async (req, res) => {

  // check user password and username and set cookie
  const username = req.body.username
  const passwordHash = req.body.passwordHash
  const rememberMe = req.body.rememberMe
  let results = await dal.getAllUsers()
  let user = results.find(user => user.username === username)

  if (!user) {
    return res.status(404).send({message: "User Not found."});
  }

  if (user.passwordHash !== passwordHash) {
    return res.status(401).send("user not authenticated")
  }

  req.session.token = authJwt.signToken(user.id, user.username, user.email, rememberMe)

  await dal.logActivity(user.id, "login")
  return res.status(200).send({
    id: user.id,
    username: user.username,
    email: user.email,
    isAdmin: username === "admin",
  });

})

app.put('/api/logout', authJwt.verifyToken, async (req, res) => {
  await dal.logActivity(req.bodyAuth.userId, "logout")
  req.session = null
  res.send({message: "logout success"})
})


app.get('/api/getEventLogs', authJwt.verifyToken, authJwt.isAdmin, async (req, res) => {
  let results = await dal.getEventLogs()
  res.send(results)
})




const imageUploadPath = path.join(__dirname, '..', 'frontend', 'public', 'profilePictures');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function (req, file, cb) {
    cb(null, `${req.bodyAuth.userId}.${file.originalname.split('.').pop()}`)
  }
})
const imageUpload = multer({storage: storage})
app.post('/image-upload', authJwt.verifyToken, imageUpload.array("my-image-file"), async (req, res) => {
  let results = await dal.getAllUsers()
  let user = results.find(user => user.id === req.bodyAuth.userId)
  await dal.updateProfilePicture(user.id, path.join('/', 'public', 'profilePictures', `${req.bodyAuth.userId}.${req.files[0].originalname.split('.').pop()}`))

  console.log('POST request received to /image-upload.');
  console.log('Axios POST body: ', req.body);
  res.send('POST request recieved on server to /image-upload.');
})


app.post('/api/createPost', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  const content = req.body.content
  if (content.length > 300) {
    return res.status(400).send({error: "post content too long, post must be shorter then 300 characters"})
  }

  await dal.createPost(userId, content)
  await dal.logActivity(userId, "posted")
  res.send("posted successfully")
})

app.put('/api/editPostContent', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  const postId = req.body.postId
  const content = req.body.content
  let results = await dal.editPostContent(postId, content)
  await dal.logActivity(userId, "updated post")
  res.send(results)
})

app.get('/api/getPostUpdateTime', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const postId = req.query.postId
  let results = await dal.getPostUpdateTime(postId)
  console.log(results)
  res.send(results)
})

app.get('/api/getAllUserFollowsPosts', authJwt.verifyToken, async (req, res) => {
  console.log(req.query)
  const userId = req.bodyAuth.userId
  let results = await dal.getAllUserFollowsPosts(userId)
  console.log(results)
  let posts = []
  results.forEach((item) => {
    posts.push({
      id: item.id,
      content: item.content,
      timeStamp: item.updated_at,
      posterId: item.followedId ? item.followedId : userId,
    })
  })
  res.send(posts)
})

app.post('/api/addLike', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  const postId = req.body.postId
  let results = await dal.addLike(userId, postId)
  res.send("success")
})

app.delete('/api/removeLike', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const userId = req.bodyAuth.userId
  const postId = req.query.postId
  let results = await dal.removeLike(userId, postId)
  res.send("success")
})

app.get('/api/getPostLikeNumber', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const postId = req.query.postId
  let results = await dal.getPostLikeNumber(postId)
  console.log(results)
  res.send(results)
})

app.get('/api/getPostLikeNumberByUser', authJwt.verifyToken, async (req, res) => {
  console.log(req.body)
  const postId = req.query.postId
  const userId = req.bodyAuth.userId
  let results = await dal.getPostLikeNumberByUser(postId, userId)
  console.log(results)
  res.send(results)
})










app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})

