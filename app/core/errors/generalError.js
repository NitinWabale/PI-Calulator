/**
 * Error thrown when invalid authentication is encountered
 */
module.exports = class GeneralError extends Error {
    constructor(reason) {
      super();
      Error.captureStackTrace(this, GeneralError);
      this.message = `Error while calculationg Pi; reason was: '${reason}'`;
    }
  };
  