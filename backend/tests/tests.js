
import {apiUtils} from "./apiUtils.js";
import assert from "assert";

describe('GET /api/user/all', function() {
  it('should return array of user ids', function() {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUsers().then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json instanceof Array)
        for (let user of json) {
          assert(typeof user === "number")
        }
        resolve()
      })
    })
  });
})

describe('GET /api/admin/features', function() {
  it('should return a feature dict', function() {
    return new Promise((resolve, reject) => {
      apiUtils.getFeatures().then(async (response) => {
        assert.strictEqual(response.status, 200);
        const features = await response.json();
        for (let feature in features) {
          console.assert(typeof feature === "string")
          console.assert(typeof features[feature] === "number")
          console.assert(features[feature] === 0 || features[feature] === 1)
        }
        resolve();
      });
    });
  });
});


describe('GET /api/admin/eventLogs', function() {
  it('should return array of event logs', function() {
    return new Promise((resolve, reject) => {
      apiUtils.getEventLogs().then(async (response) => {
        assert.strictEqual(response.status, 200);
        const eventLogs = await response.json();
        assert(Array.isArray(eventLogs));
        for (let log of eventLogs) {
          assert(typeof log === "object");
          assert(typeof log.username === "string");
          assert(typeof log.event === "string");
          assert(typeof log.eventTime === "string");
        }
        resolve();
      });
    });
  });
});


describe('GET /api/posts/list/followed', function() {
  it('should return array of posts', function() {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUserFollowsPosts().then(async (response) => {
        assert.strictEqual(response.status, 200);
        const posts = await response.json();
        assert(Array.isArray(posts));
        for (let post of posts) {
          assert(typeof post === "object");
          assert(typeof post.content === "string");
          assert(typeof post.id === "number");
          assert(typeof post.timeStamp === "string");
          assert(typeof post.posterId === "number");
        }
        resolve();
      });
    });
  });
});


describe('POST /api/posts', function() {
  it('should create a new post', function() {
    const content = "Test post content";
    return new Promise((resolve, reject) => {
      apiUtils.createPost(content).then(async (response) => {
        assert.strictEqual(response.status, 200);
        const createdPost = await response.json();
        assert(typeof createdPost === "object");
        assert(createdPost.status === "success");
        resolve();
      });
    });
  });
});