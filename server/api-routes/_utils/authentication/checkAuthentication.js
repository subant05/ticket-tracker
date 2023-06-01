import fetch from "node-fetch";
import { refreshToken } from "./expressConnectAuth.js";

const checkFormantToken = async (token) => {
  try {
    const response = await fetch(
      `https://api.formant.io/v1/admin/users/${token}`
    );
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const requestAuthenciation = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401);
    res.send("401 Unauthorized");
  }

  const isAuthenticated = await checkFormantToken(req.headers.authorization);
  if (isAuthenticated) next();
  else {
    res.status(401);
    res.send("401 Unauthorized");
  }
};

export const packageAuthentication = async (req, res, next) => {
  if (
    req.path == "/upload" &&
    req.headers.authorization !=
      `Basic ${process.env.SOFTWARE_DEPLOYMENT_TOKEN}`
  ) {
    res.status(401);
    res.send("401 Unauthorized");
  } else if (
    req.path.includes("/package") &&
    req.query.token &&
    req.query.token == process.env.VEHICLE_TOKEN
  ) {
    next();
  }
  //  else if (req.path.includes("/package")
  //         && req.headers.authorization != `Basic ${process.env.VEHICLE_TOKEN}`
  //     ){
  //         res.status(401)
  //         res.send("401 Unauthorized")
  // }
  else await requestAuthenciation(req, res, next);
};

export const deploymentCheckAuthentication = async (req, res, next) => {
  if (req.headers.authorization != `Basic ${process.env.VEHICLE_TOKEN}`) {
    res.status(401);
    res.send("401 Unauthorized");
  } else next();
};

export const formantEventAuth = async (req, res, next) => {
  try {
    if (
      req.headers.authorization !==
      `Basic ${process.env.FORMANT_EXPERT_WEBHOOK_AUTHORIZATION}`
    ) {
      res.status(401);
      res.send(`401 Unauthorized`);
    } else next();
  } catch (e) {
    res.status(503);
    res.setHeader("Content-Type", "application/json");
    res.send({
      issue: "FORMANT POST CONNECTION AUTH ISSUE",
      Error: e,
    });
  }
};

export const expertConnect = async (req, res, next) => {
  if (
    req.headers.authorization !==
    `Basic ${process.env.EXPERT_CONNECT_WEBHOOK_AUTHORIZATION}`
  ) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};

export const formantConnect = async (req, res, next) => {
  if (
    req.headers.authorization !==
    `Basic ${process.env.FORMANT_WEBHOOK_AUTHORIZATION}`
  ) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};

export const webClientConnect = async (req, res, next) => {
  if (req.headers.authorization !== `Bearer ${process.env.WEB_CLIENT_TOKEN}`) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};
