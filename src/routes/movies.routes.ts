import { Router } from "express";
import { createMovie, getAllMovies, removeMovieByID } from "../controllers/movies.controller";

const MoviesRouter = Router();

MoviesRouter
.post("/", createMovie)
.get("/", getAllMovies)
.delete("/:movieID", removeMovieByID)


export default MoviesRouter;