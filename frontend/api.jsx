

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

const api = {
  getFeatures,
  setFeatureState
}

export {
  api
}