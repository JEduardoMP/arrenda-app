const { globalErrorHandler } = require("./errors.middelwares")


exports.headerValidator = (req, res, next) => {
  if (req.headers["content-type"] !== "application/json") {
    const err = new Error('no sirve desde header validator')
    err.status = 404
    next(err)
  } else {
    next()
  }
}