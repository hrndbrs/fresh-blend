import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.status(500).json({ message: "Internal Server Error" })
}

export default errorHandler
