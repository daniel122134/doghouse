
var md5 = require('md5');


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./doghouse.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.serialize(() => {
  //users
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT NOT NULL unique, email TEXT NOT NULL unique, toy TEXT, passwordHash TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)");
  //poles
  db.run("CREATE TABLE IF NOT EXISTS poles (userId INTEGER , name TEXT NOT NULL unique, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  //ads
  db.run("CREATE TABLE IF NOT EXISTS ads (id INTEGER PRIMARY KEY, content TEXT, imagePath TEXT)");
  //follows
  db.run("CREATE TABLE IF NOT EXISTS follows (followerId INTEGER, followedId INTEGER, created_at TEXT NOT NULL, FOREIGN KEY(followerId) REFERENCES users(id), FOREIGN KEY(followedId) REFERENCES users(id))");
  //likes
  db.run("CREATE TABLE IF NOT EXISTS likes (userId INTEGER, postId INTEGER, created_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id), FOREIGN KEY(postId) REFERENCES posts(id))");
  //posts
  db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, userId INTEGER, content TEXT, imagePath TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  //features
  db.run("CREATE TABLE IF NOT EXISTS features (id INTEGER PRIMARY KEY, name TEXT NOT NULL unique, state INTEGER NOT NULL, updated_at TEXT NOT NULL)");
  //activityLogs
  db.run("CREATE TABLE IF NOT EXISTS activityLogs (id INTEGER PRIMARY KEY, userId INTEGER, activity TEXT NOT NULL, created_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  
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

async function getActivityLogs() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM activityLogs", (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

module.exports = {
  getAllUsers,
  getAllFeatures,
  setFeatureState,
  getActivityLogs,
  db
};
