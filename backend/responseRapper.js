const {InvalidParamError, UnAuthorizedError, NotFoundError} = require("./exceptions");

const rapper = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res)
      // if res is string convert to json
      if (typeof res.body === 'string') {
        res.body = {status: 'success', data: res.body}
      }
    } catch (err) {
      res.status(getStatusCode(err)).json({error: err.message})
    }
  };
};

function getStatusCode(err) {
  let statusCode = 500

  // Customize the status code based on the error type
  if (
    err instanceof SyntaxError ||
    err instanceof InvalidParamError ||
    err instanceof TypeError
  ) {
    statusCode = 400 // Bad Request
  } else if (err instanceof NotFoundError) {
    statusCode = 404
  } else if (err instanceof UnAuthorizedError) {
    statusCode = 401
  }

  return statusCode
}

module.exports = {
  rapper,
};