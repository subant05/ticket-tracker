export function migrationAuth(req, res, next) {
  if (req.headers.authorization !== process.env.MIGRATION_TOKEN) {
    res.status(401);
    res.send(`401 Unauthorized`);
  } else next();
}
