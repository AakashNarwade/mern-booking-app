import express from "express";
import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  // console.log("req.cookies", req.cookies);
  const token = req.cookies.access_token;
  // console.log(token, "token");
  if (!token) {
    return createError(401, "You are not authenticated!");
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      return createError(403, "not a valid token");
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    // console.log(req.user.id);
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  console.log("hit verify admin");
  // req.user.isAdmin = true;
  verifyToken(req, res, next, () => {
    console.log(req, "req.user.isAdmin");
    if (req.user.isAdmin) {
      console.log("its admin");
      next();
    } else {
      console.log("its in else");
      return next(createError(403, "You are not authorized"));
    }
  });
};
