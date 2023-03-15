import express from "express";
import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return createError(401, "You are not authenticated!");
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return createError(403, "not a valoid token");
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    console.log(req.user.id);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  console.log("hit");
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      console.log("its in else");
      return next(createError(403, "You are not authorized"));
    }
  });
};
