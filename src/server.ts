import express,{ Express } from "express";
import MoviesRouter from "./routes/movies.routes";
import morgan from "morgan";
import dotenv from "dotenv";

const app: Express = express();
app.set("PORT", process.env.PORT || 5002);
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

app.use("/movies", MoviesRouter)

export default app;



