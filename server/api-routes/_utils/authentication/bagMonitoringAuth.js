export const bagMonitoringAuth = async (req, res, next) => {
  if (
    req.headers.authorization !==
    `Bearer ${process.env.BAG_MONITORING_AUTHORIZATION}`
  ) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};
