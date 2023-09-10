import {apiUtils} from "./apiUtils.js";
import assert from "assert";
import {dal} from "../DAL/persist.js";

let testUser = {};
let testUserId = 0;

let followedUser = {};
let followedUserId = 0;

let unfollowedUser = {};
let unfollowedUserId = 0;

let testSignUpUser = "";
let testSignUpUserId = 0;

let testPostId = 0;
let testPost = {};



async function clearTestData() {
  try {
    const allUsers = await dal.getAllUsers()
    
    testUser = allUsers.find(user => user.username === "test")
    if (testUser) {
      testUserId = testUser.id
    }
    followedUser = allUsers.find(user => user.username === "followed")
    if (followedUser) {
      followedUserId = followedUser.id
    }
    unfollowedUser = allUsers.find(user => user.username === "unfollowed")
    if (unfollowedUser) {
      unfollowedUserId = unfollowedUser.id
    }
    testSignUpUser = allUsers.find(user => user.username === "testSignUpUser")
    if (testSignUpUser) {
      testSignUpUserId = testSignUpUser.id
    }

    
    const userPosts = await dal.getAllUserFollowsPosts(testUserId)

    try {
      const testPostId = userPosts[0].id
      await dal.removeLike(testUserId, testPostId)
    } catch (e) {
      console.log(e)
    }

    try {
      const testPostId = userPosts[0].id
      await dal.deletePost(testPostId)
    } catch (e) {
      console.log(e)
    }

    try {
      await dal.deleteUser(testUserId)
    } catch (e) {
      console.log(e)
    }

    try {
      await dal.deleteUser(testSignUpUserId)
    } catch (e) {
      console.log(e)
    }

    try {
      await dal.deleteUser(followedUserId)
    } catch (e) {
      console.log(e)
    }

    try {
      await dal.deleteUser(unfollowedUserId)
    } catch (e) {
      console.log(e)
    }

  } catch (e) {
    console.log(e)
  }
}

beforeEach(async function () {
  console.log('clearing on statup')
  await clearTestData()
  console.log('Creating test data')
  try {
    await dal.createUser("test", "test", "test")
    await dal.createUser("followed", "followed", "followed")
    await dal.createUser("unfollowed", "unfollowed", "unfollowed")
    const allUsers = await dal.getAllUsers()
    testUserId = allUsers.find(user => user.username === "test").id
    followedUserId = allUsers.find(user => user.username === "followed").id
    unfollowedUserId = allUsers.find(user => user.username === "unfollowed").id
    await dal.createPost(testUserId, "test")
    const userPosts = await dal.getAllUserFollowsPosts(testUserId)
    testPostId = userPosts[0].id
    await dal.addLike(testUserId, testPostId)
    await dal.followUser(1, followedUserId)
  } catch (e) {
    console.log(e)
  }
});

afterEach(async function () {
  console.log('Teardown Running')
  await clearTestData()
});

describe('POST /api/auth/login', function () {
  it('should return a token', function () {
    return new Promise((resolve, reject) => {
      apiUtils.login("test", "test").then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(typeof json.id === "number")
        resolve()
      })
    })
  });
})

//test logout
describe('POST /api/auth/logout', function () {
  it('should return a 200', function () {
    return new Promise((resolve, reject) => {
      apiUtils.logout().then(async (response) => {
        assert(response.status === 200)
        resolve()
      })
    })
  });
})

//test signup
describe('POST /api/user', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      console.log(testSignUpUser)
      apiUtils.signup("testSignUpUser", "testSignUpUser", "test").then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(typeof json.id ==="number")
        assert(json.username === "testSignUpUser")
        assert(json.email === "testSignUpUser")
        assert(json.isAdmin === false)
        resolve()
      })
    })
  });
})

//test get feature state
describe('GET /api/admin/features', function () {
  it('should return a features object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getFeatures("Edit Post").then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json["Edit Post"] === 1)
        resolve()
      }).catch((e) => {
        console.log(e)
      })
    })
  });
})


//test set feature state
describe('PUT /api/admin/features/:featureName', function () {
  it('should set a feature', function () {
    return new Promise((resolve, reject) => {
      apiUtils.setFeatureState("Edit Post", 1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.status === "success")
        resolve()
      })
    })
  });
})

//test set pole owner
describe('PUT /api/pee/:poleName/owner', function () {
  it('should return a pole object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.setPeePoleOwner("test", 1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.status === "success")
        resolve()
      })
    })
  });
})

//test get all poles
describe('GET /api/pee/allPoles', function () {
  it('should return a pole object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getAllPoles().then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json instanceof Array)
        for (let pole of json) {
          assert(typeof pole === "string")
        }
        resolve()
      })
    })
  });
})

//test get pole owner
describe('GET /api/pee/:poleName/owner', function () {
  it('should return a pole object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getPoleOwner("fence").then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(typeof json.username === "string")
        resolve()
      })
    })
  });
})

// test get user data
describe('GET /api/user', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getUserData(1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(typeof json.toy == "string")
        assert(typeof json.age === "string")
        assert(typeof json.breed === "string")
        assert(typeof json.location === "string")
        assert(typeof json.bio === "string")
        assert(typeof json.profilePicture === "string")
        assert(typeof json.username === "string")
        resolve()
      })
    })
  });
})


// test update user data
describe('PUT /api/user', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.updateUserData("test", "test", "test","test", "test", 1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.status == "success")
        resolve()
      })
    })
  });
})

// test edit post content
describe('PUT /api/post/:postId', function () {
  it('should return a post object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.editPostContent(1, "test").then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.status == "success")
        resolve()
      })
    })
  });
})


// test get post update time
describe('GET /api/post/:postId/updated', function () {
  it('should return a post object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getPostUpdateTime(1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        // assert type is a arrau
        assert(json instanceof Array)
        // assert array contains a number
        assert(typeof json[0].updateTime === "string")
        resolve()
      })
    })
  });
})

// test addLike
describe('PUT /api/post/:postId/like', function () {
  it('should return a post object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.addLike(1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.status == "success")
        resolve()
      })
    })
  });
})


//test removeLike
describe('DELETE /api/post/:postId/like', function () {
  it('should return a post object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.removeLike(1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.status == "success")
        resolve()
      })
    })
  });
})

//test get post likes number
describe('GET /api/post/:postId/likes', function () {
  it('should return a post object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getPostLikeNumber(1).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json instanceof Array)
        assert(typeof json[0].likeCount === "number")
        resolve()
      })
    })
  });
})

//test get post like number by user
describe('GET /api/post/:postId/likes/:userId', function () {
  it('should return a post object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getPostLikeNumberByUser(testPostId).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json[0].likeCount === 0)


        resolve()
      })
    })
  });
})

//test get all users not followed by user
describe('GET /api/user/:userId/notFollowed', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUsersNotFollowedByUser(testUserId).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json instanceof Array)
        for (let user of json) {
          assert(typeof user === "object")
        }
        resolve()
      })
    })
  });
})

//test get all users followed by user
describe('GET /api/user/:userId/followed', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUsersFollowedByUser(testUserId).then(async (response) => {
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

//test follow user
describe('PUT /api/follow/:userId', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.followUser(testUserId, unfollowedUserId).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(typeof json === "object");
        assert(json.status === "success");
        resolve()
      })
    })
  });
})

//test unfollow user
describe('DELETE /api/follow/:userId', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.unfollowUser(followedUserId ).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(typeof json === "object");
        assert(json.status === "success");
        resolve()
      })
    })
  });
})

//test get all users matching prefix
describe('GET /api/user/:prefix', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUsersMatchingPrefix("a").then(async (response) => {
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

//test get all users matching substring
describe('GET /api/user/:substring', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUsersMatchingSubstring("a").then(async (response) => {
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


//test get is following
describe('GET /api/follow/:userId', function () {
  it('should return a user object', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getIsFollowing(followedUserId).then(async (response) => {
        assert(response.status === 200)
        const json = await response.json()
        assert(json.isFollowing === true)
        resolve()
      })
    })
  });
})

describe('GET /api/user/all', function () {
  it('should return array of user ids', function () {
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

describe('GET /api/admin/features', function () {
  it('should return a feature dict', function () {
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
      }).catch((err) => {
        reject(err);
      });
    });
  });
});


describe('GET /api/admin/eventLogs', function () {
  it('should return array of event logs', function () {
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


describe('GET /api/posts/list/followed', function () {
  it('should return array of posts', function () {
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


describe('POST /api/posts', function () {
  it('should create a new post', function () {
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

describe('GET /api/pee/allPoles', function () {
  it('should return array of pee poles', function () {
    return new Promise((resolve, reject) => {
      apiUtils.getAllPoles().then(async (response) => {
        assert.strictEqual(response.status, 200);
        const poles = await response.json();
        assert(Array.isArray(poles));
        for (let pole of poles) {
          assert(typeof pole === "object");
          assert(typeof pole.name === "string");
          assert(typeof pole.userId === "number");
          assert(typeof pole.updated_at === "string");
        }
        resolve();
      });
    });
  });
});

describe('GET /api/user/all', function() {
  it('should return array of user ids', function() {
    return new Promise((resolve, reject) => {
      apiUtils.getAllUsers().then(async (response) => {
        assert.strictEqual(response.status, 200);
        const usersId = await response.json();
        assert(Array.isArray(usersId));
        for (let userId of usersId) {
          assert(typeof userId === "number");
        }
        resolve();
      });
    });
  });
});

describe('DELETE /api/user/${userId}', function () {
  it('should delete a user', function () {
    return new Promise((resolve, reject) => {
      apiUtils.deleteUser(testUserId).then(async (response) => {
        assert.strictEqual(response.status, 200);
        const deletedUser = await response.json();
        assert(typeof deletedUser === "object");
        assert(deletedUser.status === "success");
        resolve();
      });
    });
  });
});