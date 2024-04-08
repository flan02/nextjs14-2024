import { User, Movie } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getMovies = async () => {

  try {
    connectToDb();
    //console.log("Fetching Movies from MongoDB.........");
    const movies = await Movie.find().limit(100);
    // console.log(movies);

    return movies;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Movies from MongoDB!");
  }
};

export const getMovie = async (slug: string) => {

  try {
    connectToDb();
    const movie = await Movie.findOne({ slug });
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
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
