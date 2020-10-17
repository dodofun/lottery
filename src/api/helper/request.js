import axios from './axios'
import Logger from './apiLogger'

class Request {
  get(url, params, data, otherProps) {
    return this.send(url, 'GET', params, data, otherProps)
  }

  post(url, params, data, otherProps) {
    return this.send(url, 'POST', params, data, otherProps)
  }

  put(url, params, data, otherProps) {
    return this.send(url, 'PUT', params, data, otherProps)
  }

  delete(url, params, data, otherProps) {
    return this.send(url, 'DELETE', params, data, otherProps)
  }

  send(method, url, params, data, otherProps) {
    return new Promise((resolve, reject) => {
      if (!otherProps.responseType) {
        otherProps.responseType = 'json'
      }
      if (!otherProps.headers) {
        otherProps.headers = {
          Accept: 'application/json',
        }
      }
      Logger.describeRequest({url, method, params, data, ...otherProps})
      axios({
        method,
        url,
        params,
        data,
        ...otherProps,
      })
        .then((response) => {
          Logger.describeSuccessResponse(response)
          resolve(response.data)
        })
        .catch((error) => {
          Logger.describeErrorResponse(error)
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // handle error here
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            // handle error here
          } else {
            // Something happened in setting up the request that triggered an Error
            // error.config is there
          }
          reject(error)
        })
    })
  }
}

export default Request
