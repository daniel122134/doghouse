

class InvalidParamError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingParamError";
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
  }
}

class UnAuthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnAuthorizedError";
  }
}

module.exports = {
  InvalidParamError,
  NotFoundError,
  UnAuthorizedError
};