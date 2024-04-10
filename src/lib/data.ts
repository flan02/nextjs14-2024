import { IMovie } from "@/app/blog/page";
import { User, Movie } from "./models";
import { connectToDb, disconnectFromDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
import { isValidObjectId } from "mongoose";

export const getMovies = async () => {

  try {
    connectToDb();
    //console.log("Fetching Movies from MongoDB.........");
    const movies = await Movie.find().limit(100);
    // console.log(movies);
    //disconnectFromDb();
    return movies;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Movies from MongoDB!");
  }
};

export const getMovie = async (slug: string): Promise<IMovie | null> => {

  try {
    connectToDb();
    const movie = await Movie.findById(slug);
    //console.log(movie);
    //disconnectFromDb();
    return movie;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }


};

export const getUser = async (id: string) => {
  // noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    //disconnectFromDb();
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    disconnectFromDb();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
