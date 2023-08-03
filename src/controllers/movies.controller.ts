import { Request, Response } from "express";
import MoviesModel from "../model/movies.model";
import UserModel from "../model/user.model";

export const createMovie = async (req: Request, res: Response) => {

    const { name, year, score } = req.body;
    const { userID } = req.params;
    try {
        const newMovie = await MoviesModel.create({ name, year, score });
        await UserModel.findByIdAndUpdate({ _id: userID },{

           $push:{movies:newMovie._id} 
        });

        res.status(201).send(newMovie);


    } catch (error) {

        res.status(500).send(error);
    }
};

export const removeMovieByID = async (req: Request, res: Response) => {

  
}

export const getAllMovies = async (req: Request, res: Response) => {

    
}

export const getMovieById = async (req: Request, res: Response) => {

}

export const updateMovie = async (req: Request, res: Response) => {

}