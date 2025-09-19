import routes from "@routes/routes";
import Express, { Application } from "express";
import morgan from "morgan";

const app: Application = Express();

app.use(Express.json());
app.use(morgan("dev"));

app.use("/api/v1", routes());


export default app;
