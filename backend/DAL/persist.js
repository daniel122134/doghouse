const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./doghouse.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.serialize(() => {
  //users
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, email TEXT NOT NULL unique, toy TEXT, passwordHash TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL)");
  //poles
  db.run("CREATE TABLE IF NOT EXISTS poles (userId INTEGER , name TEXT NOT NULL unique, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  //ads
  db.run("CREATE TABLE IF NOT EXISTS ads (id INTEGER PRIMARY KEY, content TEXT, imagePath TEXT)");
  //follows
  db.run("CREATE TABLE IF NOT EXISTS follows (followerId INTEGER, followedId INTEGER, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, FOREIGN KEY(followerId) REFERENCES users(id), FOREIGN KEY(followedId) REFERENCES users(id))");
  //likes
  db.run("CREATE TABLE IF NOT EXISTS likes (userId INTEGER, postId INTEGER, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id), FOREIGN KEY(postId) REFERENCES posts(id))");
  //posts
  db.run("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, userId INTEGER, content TEXT, imagePath TEXT, created_at TEXT NOT NULL, updated_at TEXT NOT NULL, FOREIGN KEY(userId) REFERENCES users(id))");
  
});

module.exports = {
  db
};
