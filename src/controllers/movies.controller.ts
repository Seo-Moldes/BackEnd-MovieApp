import { Request, Response } from "express";

export const createMovie = (req: Request, res: Response) => {

    console.log(req.body)

    res.status(200).send({ msg: "Movie Created" });

};


export const removeMovieByID = (req: Request, res: Response) => {

    res.status(200).send({ msg: "Deleted" })
}

export const getAllMovies = (req: Request, res: Response) => {

    res.status(200).send({ msg: "All Movies" })
}

const getMovieById = () => {

}

const updateMovie = () => {

}