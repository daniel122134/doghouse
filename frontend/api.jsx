import axios from "axios";
import authService from "./authService.jsx";


const HOST =
    process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : ''

async function displayError(errorMessage) {
  
  window.notyf.error({
    message: `${errorMessage}`,
    duration: 10000,
    x: 'center',
    dismissible: true
  })
}

async function handleErrors(response, data) {
  if (data['error'] != null) {
    await displayError(data['error'])
  }
  else{
    if (response.status === 401) {
      await authService.logout()
      window.location.href = '/login'
    }
    
  }
  
}

async function post(url, data= {}, headers) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: Object.assign({
        'Content-Type': 'application/json; charset=utf-8',
        ...headers
      }),
      credentials: 'include',
      body: JSON.stringify(data)
    })
    const result = await response.json()
    await handleErrors(response, result)
    return result
  } catch (e) {
    await displayError(`Error sending request: ${e}. Check your internet connection`)
  }
}

async function get(url, data, headers) {
  try {
    const response = await fetch(
      url + (data == null ? '' : '?' + new URLSearchParams(data)),
      {
        credentials: 'include',
        headers: headers ?? undefined
      }
    )
    const result = await response.json()
    await handleErrors(response, result)
    return result
  } catch (e) {
    await displayError(`Error sending request: ${e}. Check your internet connection`)
  }
}

async function put(url, data, headers) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: Object.assign({
        'Content-Type': 'application/json; charset=utf-8',
        ...headers
      }),
      credentials: 'include',
      body: JSON.stringify(data)
    })
    const result = await response.json()
    await handleErrors(response, result)
    return result
  } catch (e) {
    await displayError(`Error sending request: ${e}. Check your internet connection`)
  }
}

async function deleteRequest(url, data, headers) {
  try {
    const response = await fetch(
      url + (data == null ? '' : '?' + new URLSearchParams(data)),
      {
        method: 'DELETE',
        headers: headers ?? undefined,
        credentials: 'include'
      }
    )
    const result = await response.json()
    await handleErrors(response, result)
    return result
  } catch (e) {
    await displayError(`Error sending request: ${e}. Check your internet connection`)
  }
}

async function getFeatures() {
  return await get(HOST + 'api/admin/features', {}, {})
}

async function setFeatureState(featureName, featureState) {
  return await put(HOST + `api/admin/${featureName}`, {featureState}, {})
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
  return  await put(HOST + 'api/auth/login', {username, passwordHash, rememberMe}, {})
}

async function logout() {
  return await put(HOST + 'api/auth/logout', {}, {})
}

async function signup(username,email, passwordHash) {
  return await post(HOST + 'api/user', {username, email,passwordHash}, {})
}

async function getEventLogs() {
  return await get(HOST + 'api/admin/eventLogs', {}, {})
}

async function getUserData(userId) {
  return await get(HOST + `api/user/${userId}`, {}, {})
}

async function updateUserData(age, breed, favoriteToy, location, bio, userId) {
  return await put(HOST + `api/user/${userId}`, {age, breed, favoriteToy, location, bio}, {})
}

async function updateProfilePicture(image) {
  return await axios.post(HOST + 'image-upload', image, {withCredentials: true})
}

async function createPost(content) {
  return await post(HOST + 'api/posts', {content}, {})
}

async function editPostContent(postId, content) {
  return await put(HOST + `api/posts/${postId}`, {content}, {})
}

async function getPostUpdateTime(postId) {
  return await get(HOST + `api/posts/${postId}/updateTime`, {}, {})
}

async function getAllUserFollowsPosts() {
  return await get(HOST + 'api/posts/list/followed', {}, {})
}

async function addLike(postId) {
  return await post(HOST + `api/likes/${postId}`, {}, {})
}

async function removeLike(postId) {
  return await deleteRequest(HOST + `api/likes/${postId}`, {}, {})
}

async function getPostLikeNumber(postId) {
  return await get(HOST + `api/likes/${postId}`, {}, {})
}

async function getPostLikeNumberByUser(postId) {
  return await get(HOST + `api/likes/${postId}/userLike`, {}, {})
}

async function getAllUsersNotFollowedByUser() {
  return await get(HOST + 'api/follow/list/usersNotFollowedByMe', {}, {})
}

async function getAllUsersFollowedByUser() {
  return await get(HOST + 'api/follow/list/usersFollowedByMe', {}, {})
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
