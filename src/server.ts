/**
 * Modules dependencies
 */
import * as express from "express";
import * as compression from "compression";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as dotenv from "dotenv";

/**
 * load environment variables from .env file.
 */
dotenv.config({path: ".env.example"});

/**
 * Controllers (route handlers).
 */
import * as apiController from "./controller/api";

/**
 * Create Express Server
 */
const app = express();

/**
 * Express configuration.
 */
app.set("port", process.env.port || 3000);
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Api routes
 */
app.get("/api", apiController.index);

/**
 * Error handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start express server
 */
app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});

module.exports = app;
