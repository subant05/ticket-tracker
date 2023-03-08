import express from "express";
import { expertConnect } from "../_utils/authentication/checkAuthentication.js";

const router = express.Router();

router.use(expertConnect);

router.post("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ data: "Expert Connect Post Method Response" });
});

export default router;
