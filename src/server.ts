import express,{ Express } from "express";
import MoviesRouter from "./routes/movies.routes";
import morgan from "morgan";

const app: Express = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/movies", MoviesRouter)

export default app;



