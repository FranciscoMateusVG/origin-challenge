import express from "express";
const PORT = process.env.PORT || 2030;
const app = express();
import logger from "morgan";
import cookieParser from "cookie-parser";
import * as swaggerDocument from "../swagger.json";
import swaggerUi = require("swagger-ui-express");
import routeResult from "./routes/result";
import checkParametersValidity from "./middlewares/checkParametersValidity";

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(checkParametersValidity);

// Routes
app.use("/", routeResult);

export default app;

// Server
if (process.env.JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => console.log(`#Running on port => ${PORT}!`));
}
