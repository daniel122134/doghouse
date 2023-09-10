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
// import auth from "./routes/auth.js";
// import posts from "./routes/posts.js";
import admin from "./routes/admin.js";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";

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
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
})

//serve /signup page
app.get('/signup', (req, res) => {
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

app.use('/api/pee', pee) 
app.use('/api/user', users)  
app.use('/api/follow', follows)
app.use('/api/auth', auth)
app.use('/api', posts)
app.use('/api/admin', admin)



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

app.get('/readme.html', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'README.html'))
})

app.get('/readme-daniel', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'README-Daniel.html'))
})

app.get('/readme-hadar', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'README-Hadar.html'))
})


app.listen(port, () => {
  console.info(`Example app listening on port ${port}`)
})

