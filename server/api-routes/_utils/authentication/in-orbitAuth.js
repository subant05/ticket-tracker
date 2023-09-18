export const inOrbitConnect = async (req, res, next) => {
  if (req.headers["x-inorbit-key"] !== process.env.IN_ORBIT_WEBHOOK_KEY) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};
