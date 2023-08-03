import express,{ Express } from "express";
import MoviesRouter from "./routes/movies.routes";
import morgan from "morgan";
import dotenv from "dotenv";
import UserRouter from "./routes/user.routes";
import GenreRouter from './routes/genre.routes';


const app: Express = express();
app.set("PORT", process.env.PORT || 5002);
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

app.use("/movies", MoviesRouter)
app.use("/user", UserRouter)
app.use("/genres", GenreRouter)



export default app;



