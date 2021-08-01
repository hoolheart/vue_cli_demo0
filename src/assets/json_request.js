function jsonRequest (method, url, data, responseHandler, errorHandler) {
  var xhr = new XMLHttpRequest()
  xhr.withCredentials = false
  if (responseHandler !== undefined) {
    xhr.addEventListener('load', function () {
      responseHandler(JSON.parse(xhr.responseText))
    })
  }
  if (errorHandler !== undefined) {
    xhr.addEventListener('error', errorHandler)
  }
  if (((method === 'GET') || (method === 'HEAD')) && (data !== undefined)) {
    xhr.open(method, url + '?' + new URLSearchParams(data).toString())
  } else {
    xhr.open(method, url)
  }
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader('Accept', 'application/json')
  xhr.send(JSON.stringify(data))
}

export const JsonRequest = jsonRequest

export const JsonGet = (url, data, responseHandler, errorHandler) => {
  jsonRequest('GET', url, data, responseHandler, errorHandler)
}

export const JsonPost = (url, data, responseHandler, errorHandler) => {
  jsonRequest('POST', url, data, responseHandler, errorHandler)
}

export const JsonUpdate = (url, data, responseHandler, errorHandler) => {
  jsonRequest('UPDATE', url, data, responseHandler, errorHandler)
}

export const JsonDelete = (url, data, responseHandler, errorHandler) => {
  jsonRequest('DELETE', url, data, responseHandler, errorHandler)
}
