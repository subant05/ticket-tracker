export const athenaConnect = async (req, res, next) => {
  if (
    req.headers.authorization !==
    `Bearer ${process.env.ATHENA_WEBHOOK_AUTHORIZATION}`
  ) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
};
