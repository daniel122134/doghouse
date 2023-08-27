

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

async function getFeatures() {
  return await get(HOST + 'api/getFeatures', {}, {})
}

async function setFeatureState(featureName, featureState) {
  return await post(HOST + 'api/setFeatureState', {featureName, featureState}, {})
}

async function setPeePoleOwner(poleName, ownerId) {
  return await post(HOST + 'api/pee', {poleName, ownerId}, {})
}

async function getPoleOwner(poleName) {
  return await post(HOST + 'api/poleOwner', {poleName}, {})
}

async function getAllPoles() {
  return await get(HOST + 'api/getAllPoles', {}, {})
}

async function login(username, passwordHash) {
  return await post(HOST + 'api/login', {username, passwordHash}, {})
}

async function logout() {
  return await post(HOST + 'api/logout', {}, {})
}

async function signup(username,email, passwordHash) {
  return await post(HOST + 'api/signup', {username, email,passwordHash}, {})
}

// get event logs
async function getEventLogs() {
  return await get(HOST + 'api/getEventLogs', {}, {})
}

async function getUserData(userId) {
  return await get(HOST + 'api/getUserData', {userId}, {})
}

async function createPost(userId, content) {
  return await post(HOST + 'api/createPost', {userId, content}, {})
}

async function getAllPostsForUser(userId) {
  return await post(HOST + 'api/getAllPostsForUser', {userId}, {})
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
  createPost,
  getAllPostsForUser
}

export {
  api
}
