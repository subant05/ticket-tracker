import express from "express";
import cors from "cors";
import fs from "fs";
import morgan from "morgan";
import path from "path";
import ApiRouter from "./api-routes/index.js";
import dotenv from "dotenv";
import { postgraphile, makePluginHook } from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgPubsub from "@graphile/pg-pubsub";
import { JupiterSubscriptionPlugin } from "./plugins/postgraphile/subscriptions.js";
import { SchemaResolver } from "postgraphile-schema-resolver";

const pluginHook = makePluginHook([PgPubsub]);
const __dirname = path.dirname("/");

dotenv.config({ path: "./.env" });

const app = express();
// const requestLogStream = fs.createWriteStream(path.join('./'+__dirname+'server-request-logs', 'request.log'), { flags: 'a' })

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json({ limit: "50mb", extended: true }));
// app.use(morgan('dev', {stream: requestLogStream }));
app.use("/api", ApiRouter);
app.use("/", express.static(path.join(__dirname, "./dist")));
app.use(express.static("./dist"));

app.use(
  postgraphile(
    process.env.NODE_ENV === "development"
      ? process.env.DEV_DATABASE_URL
      : process.env.POSTGRAPHILE,
    [
      "tickets",
      "rules",
      "vehicles",
      "tags",
      "groups",
      "personnel",
      "organizations",
    ],
    {
      appendPlugins: [
        SchemaResolver,
        PgSimplifyInflectorPlugin,
        ConnectionFilterPlugin,
        // , JupiterSubscriptionPlugin
      ],
      pluginHook,
      ownerConnectionString: `${process.env.DATABASE_URL}`,
      watchPg: true,
      enhanceGraphiql: true,
      ignoreRBAC: false, // Role Based Access Control (RBAC)
      extendedErrors: ["errcode", "detail", "hint"],
      graphiql: process.env.NODE_ENV === "development" ? true : false,
      subscriptions: true,
      simpleSubscriptions: true,
      live: true,
      retryOnInitFail: true,
      rejectUnauthorized: false,
    }
  )
);

app.get("*", function (req, res) {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.listen(process.env.PORT || 4000);
