import axios from "axios";
import authService from "./authService.jsx";


const HOST =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : ''

async function post(url, data= {}, headers) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: Object.assign({
        'Content-Type': 'application/json; charset=utf-8',
        ...headers
      }),
      credentials: 'include',
      body: JSON.stringify(data)
    })
    const response = await res.json()
    if (response['error'] != null) {
      if (response['error'] === "out of credits") {
        window.setCurrentPageCache("pricing")
      } else {
        window.notyf.error({
          message: `${response['error']}`,
          duration: 10000,
          x: 'center',
          dismissible: true
        })
        console.log(`Error from server on request ${url}: ${response['error']}`)
      }

    }
    return response
  } catch (e) {
    window.notyf.error({
      message: `Error sending request: ${e}. Check your internet connection`,
      duration: 10000,
      x: 'center',
      dismissible: true
    })
    throw e
  }
}

async function get(url, data, headers) {
  try {
    const res = await fetch(
      url + (data == null ? '' : '?' + new URLSearchParams(data)),
      {
        credentials: 'include',
        headers: headers ?? undefined
      }
    )
    return res.json()
  } catch (e) {
    window.notyf.error({
      message: `Error sending request: ${e}. Check your internet connection`,
      duration: 10000,
      x: 'center',
      dismissible: true
    })
    throw e
  }
}

async function put(url, data, headers) {
  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: Object.assign({
        'Content-Type': 'application/json; charset=utf-8',
        ...headers
      }),
      credentials: 'include',
      body: JSON.stringify(data)
    })
    return res.json()
  } catch (e) {
    window.notyf.error({
      message: `Error sending request: ${e}. Check your internet connection`,
      duration: 10000,
      x: 'center',
      dismissible: true
    })
    throw e
  }
}

async function deleteRequest(url, data, headers) {
  try {
    const res = await fetch(
      url + (data == null ? '' : '?' + new URLSearchParams(data)),
      {
        method: 'DELETE',
        headers: headers ?? undefined,
        credentials: 'include'
      }
    )
    return res.json()
  } catch (e) {
    window.notyf.error({
      message: `Error sending request: ${e}. Check your internet connection`,
      duration: 10000,
      x: 'center',
      dismissible: true
    })
    throw e
  }
}

async function getFeatures() {
  return await get(HOST + 'api/getFeatures', {}, {})
}

async function setFeatureState(featureName, featureState) {
  return await put(HOST + 'api/setFeatureState', {featureName, featureState}, {})
}

async function setPeePoleOwner(poleName, ownerId) {
  return await put(HOST + `api/pee/${poleName}/owner`, {ownerId}, {})
}

async function getPoleOwner(poleName) {
  return await get(HOST + `api/pee/${poleName}/owner`, {}, {})
}

async function getAllPoles() {
  return await get(HOST + 'api/pee/allPoles', {}, {})
}

async function login(username, passwordHash, rememberMe) {
  return await put(HOST + 'api/login', {username, passwordHash, rememberMe}, {})
}

async function logout() {
  return await put(HOST + 'api/logout', {}, {})
}

async function signup(username,email, passwordHash) {
  return await post(HOST + 'api/user', {username, email,passwordHash}, {})
}

async function getEventLogs() {
  return await get(HOST + 'api/getEventLogs', {}, {})
}

async function getUserData(userId) {
  return await get(HOST + 'api/getUserData', {userId}, {})
}

async function updateUserData(age, breed, favoriteToy, location, bio) {
  return await put(HOST + 'api/updateUserData', {age, breed, favoriteToy, location, bio}, {})
}

async function updateProfilePicture(image) {
  return await axios.post(HOST + 'image-upload', image, {withCredentials: true})
}

async function createPost(content) {
  return await post(HOST + 'api/createPost', {content}, {})
}

async function editPostContent(postId, content) {
  return await put(HOST + 'api/editPostContent', {postId, content}, {})
}

async function getPostUpdateTime(postId) {
  return await get(HOST + 'api/getPostUpdateTime', {postId}, {})
}

async function getAllUserFollowsPosts() {
  return await get(HOST + 'api/getAllUserFollowsPosts', {}, {})
}

async function addLike(postId) {
  return await post(HOST + 'api/addLike', {postId}, {})
}

async function removeLike(postId) {
  return await deleteRequest(HOST + 'api/removeLike', {postId}, {})
}

async function getPostLikeNumber(postId) {
  return await get(HOST + 'api/getPostLikeNumber', {postId}, {})
}

async function getPostLikeNumberByUser(postId) {
  return await get(HOST + 'api/getPostLikeNumberByUser', {postId}, {})
}

async function getAllUsersNotFollowedByUser() {
  return await get(HOST + 'api/follow/usersNotFollowedByMe', {}, {})
}

async function getAllUsersFollowedByUser() {
  return await get(HOST + 'api/follow/usersFollowedByMe', {}, {})
}

async function followUser(userId) {
  return await post(HOST + `api/follow/${userId}`, {}, {})
}

async function unfollowUser(userId) {
  return await deleteRequest(HOST + `api/follow/${userId}`, {}, {})
}

async function getAllUsersMatchingPrefix(searchContent) {
  return await get(HOST + `api/user/search/prefix/${searchContent}`, {searchContent}, {})
}

async function getAllUsersMatchingSubstring(searchContent) {
  return await get(HOST + `api/user/search/substring/${searchContent}`, {}, {})
}

async function getAllUsers() {
  return await get(HOST + 'api/user/all', {}, {})
}

async function getIsFollowing(userId) {
  return await get(HOST + `api/follow/${userId}`, {}, {})
}

async function deleteUser(userId) {
  return await deleteRequest(HOST + `api/user/${userId}`, {}, {})
}

const api = {
  login,
  logout,
  signup,
  getFeatures,
  setFeatureState,
  setPeePoleOwner,
  getAllPoles,
  getEventLogs,
  getPoleOwner,
  getUserData,
  updateUserData,
  updateProfilePicture,
  createPost,
  editPostContent,
  getPostUpdateTime,
  getAllUserFollowsPosts,
  addLike,
  removeLike,
  getPostLikeNumber,
  getPostLikeNumberByUser,
  getAllUsersNotFollowedByUser,
  getAllUsersFollowedByUser,
  followUser,
  unfollowUser,
  getAllUsersMatchingPrefix,
  getAllUsersMatchingSubstring,
  getAllUsers,
  getIsFollowing,
  deleteUser
}

export {
  api
}
