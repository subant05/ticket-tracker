import express from "express";

const router = express.Router();

// router.use(expertConnect)

router.post("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send({ data: "JIRA Post Method Response" });
});

export default router;
