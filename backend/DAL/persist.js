
var md5 = require('md5');

const dayjs = require('dayjs');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./doghouse.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.serialize(() => {
  //users
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT NOT NULL unique, email TEXT NOT NULL unique, toy TEXT, passwordHash TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, bio TEXT, breed TEXT, age INTEGER, location TEXT, profilePicture TEXT)");
  //poles
  db.run("CREATE TABLE IF NOT EXISTS poles (userId INTEGER , name TEXT NOT NULL unique, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  //ads
  db.run("CREATE TABLE IF NOT EXISTS ads (id INTEGER PRIMARY KEY, content TEXT, imagePath TEXT)");
  //follows
  db.run("CREATE TABLE IF NOT EXISTS follows (id INTEGER PRIMARY KEY, followerId INTEGER, followedId INTEGER, created_at TEXT NOT NULL, FOREIGN KEY(followerId) REFERENCES users(id), FOREIGN KEY(followedId) REFERENCES users(id))");
  //likes
  db.run("CREATE TABLE IF NOT EXISTS likes (userId INTEGER, postId INTEGER, created_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id), FOREIGN KEY(postId) REFERENCES posts(id), UNIQUE(userId, postId))");
  //posts
  db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, userId INTEGER, content TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  //features
  db.run("CREATE TABLE IF NOT EXISTS features (id INTEGER PRIMARY KEY, name TEXT NOT NULL unique, state INTEGER NOT NULL, updated_at TEXT NOT NULL)");
  //eventLogs
  db.run("CREATE TABLE IF NOT EXISTS eventLogs (id INTEGER PRIMARY KEY, userId INTEGER, event TEXT NOT NULL, eventTime TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");

  //insert admin
  db.run(`INSERT OR IGNORE INTO users (username, email, passwordHash, created_at, updated_at) VALUES ('admin', 'admin@admin.com', '${md5('admin')}', '2019-01-01 00:00:00', '2019-01-01 00:00:00')`);
  //insert features
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Pee On a Pole Page', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('My Profile Page', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Share Post Button', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Edit Post', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Unlike Post', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Search Options', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Ads', 0, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Statistics Page', 1, '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO features (name, state, updated_at) VALUES ('Dogedex Page', 1, '2023-01-01 00:00:00')`);
  //insert pee poles
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "fire hydrent", '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "lamp", '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "traffic light", '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "cone", '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "tree", '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "fence", '2023-01-01 00:00:00')`);
  db.run(`INSERT OR IGNORE INTO poles (userId, name, updated_at) VALUES (1, "fence", '2023-01-01 00:00:00')`);
});

async function getAllUsers() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}
//db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT NOT NULL unique, email TEXT NOT NULL unique, toy TEXT, passwordHash TEXT NOT NULL,
// created_at TEXT NOT NULL, updated_at TEXT NOT NULL, bio TEXT, breed TEXT, age INTEGER, location TEXT, profilePicture TEXT)");

async function updateUserData(userId, age, breed, favoriteToy, location, bio) {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE users SET age = '${age}', breed = '${breed}', toy = '${favoriteToy}', location = '${location}', bio = '${bio}' WHERE id = '${userId}'`, (err) => {
      if (err) {
        reject(err);
      }
      resolve("success");
    });
  });
}

async function getAllFeatures() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM features", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

async function getAllPoles() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM poles", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

async function getPoleOwner(pole) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT username FROM poles JOIN users on users.id = poles.userId WHERE poles.name = '${pole}'`,
        (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows[0]);
    });
  });
}

async function setFeatureState(featureName, state) {
  
  return new Promise((resolve, reject) => {
    db.run(`UPDATE features SET state = ${state} WHERE name = '${featureName}'`, async (err) => {
      if (err) {
        reject(err);
      }

      const allFeatures = await getAllFeatures();
      if (!allFeatures.find(feature => feature.name === featureName)) {
        resolve("feature not found");
      }
      
      resolve("success");
    });
  });
}

async function getEventLogs() {
  return new Promise((resolve, reject) => {
    db.all("SELECT username, event, eventTime FROM eventLogs innner join users on userId=users.id", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

async function logEvent(userId, event) {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO eventLogs (userId, event, eventTime) VALUES (${userId}, '${event}', '${dayjs().format('YYYY-MM-DD HH:mm:ss')}')`, (err) => {
      if (err) {
        reject(err);
      }
      resolve("success");
    });
  });
}

async function setPeePoleOwner(poleName, ownerId) {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE poles SET userId = ${ownerId}, updated_at = '${dayjs().format('YYYY-MM-DD HH:mm:ss')}' WHERE name = '${poleName}'`,
        async (err) => {
      if (err) {
        reject(err);
      }

      const allPoles = await getAllPoles();
      if (!allPoles.find(pole => pole.name === poleName)) {
        resolve("pole not found");
      }

      resolve("success");
    });
  });
}

//create user
async function createUser(username, email, passwordHash) {
return new Promise((resolve, reject) => {
    db.run(`INSERT INTO users (username, email, passwordHash, created_at, updated_at) VALUES ('${username}', '${email}', '${passwordHash}', '${dayjs().format('YYYY-MM-DD HH:mm:ss')}', '${dayjs().format('YYYY-MM-DD HH:mm:ss')}')`, (err) => {
      if (err) {
        reject(err);
      }
      resolve({username, email});
    });
  });
}

async function updateProfilePicture(userId, profilePicture) {
return new Promise((resolve, reject) => {
    db.run(`UPDATE users SET profilePicture = '${profilePicture}' WHERE id = ${userId}`, (err) => {
      if (err) {
        reject(err);
      }
      resolve("success");
    });
  });
}

async function createPost(userId, content) {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO posts (userId, content, created_at, updated_at) VALUES ('${userId}', '${content}', '${dayjs().format('YYYY-MM-DD HH:mm:ss')}', '${dayjs().format('YYYY-MM-DD HH:mm:ss')}')`, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

async function editPostContent(postId, content) {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE posts SET content = '${content}', updated_at = '${dayjs().format('YYYY-MM-DD HH:mm:ss')}' WHERE id = '${postId}'`, (err) => {
      if (err) {
        reject(err);
      }
      resolve("success");
    });
  });
}

async function getPostUpdateTime(postId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT updated_at AS updateTime FROM posts WHERE id = '${postId}'`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
  });
}

async function getAllPostsForUser(userId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT content, updated_at FROM posts WHERE userId = '${userId}' ORDER BY updated_at DESC`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
  });
}

async function getAllUserFollows(userId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT followedId FROM follows WHERE followerId = '${userId}'`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
  });
}

async function getAllUserFollowsPosts(userId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT posts.id, content, updated_at FROM posts Left JOIN follows ON posts.userId = follows.followedId WHERE follows.followerId = '${userId}' OR posts.userId = '${userId}' ORDER BY posts.updated_at DESC`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
  });
}

async function addLike(userId, postId) {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO likes (userId, postId, created_at) VALUES ('${userId}', '${postId}', '${dayjs().format('YYYY-MM-DD HH:mm:ss')}')`, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

async function removeLike(userId, postId) {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM likes WHERE postId = '${postId}' AND userId = '${userId}'`, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

async function getPostLikeNumber(postId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT COUNT(*) AS likeCount FROM likes WHERE postId = '${postId}'`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
  });
}

async function getPostLikeNumberByUser(postId, userId) {
  return new Promise((resolve, reject) => {
    db.all(`SELECT COUNT(*) AS likeCount FROM likes WHERE postId = '${postId}' AND userId = '${userId}'`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        });
  });
}

module.exports = {
  getAllUsers,
  updateUserData,
  getAllFeatures,
  getAllPoles,
  getPoleOwner,
  setFeatureState,
  setPeePoleOwner,
  getEventLogs,
  logActivity: logEvent,
  createUser,
  updateProfilePicture,
  createPost,
  editPostContent,
  getPostUpdateTime,
  getAllPostsForUser,
  getAllUserFollows,
  getAllUserFollowsPosts,
  addLike,
  getPostLikeNumber,
  getPostLikeNumberByUser,
  removeLike,
  db
};
