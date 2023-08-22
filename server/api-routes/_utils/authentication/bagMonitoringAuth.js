export const bagMonitoringAuth = async (req, res, next) => {
  console.log(req.method);
  if (
    req.method === "GET" &&
    req.headers.authorization !== `Bearer ${process.env.WEB_CLIENT_TOKEN}`
  ) {
  } else if (
    req.method === "POST" &&
    req.headers.authorization !==
      `Bearer ${process.env.BAG_MONITORING_AUTHORIZATION}`
  ) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};
