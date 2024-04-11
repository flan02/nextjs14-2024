"use server"; // $ Define a function as a server action
// TODO if you'll 'use server' in many functions, you can move it to the top of the file instead to add the directive in each function

import { revalidatePath } from "next/cache";

import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { User, Movie } from "./models";


export const useServer = async () => {
  //'use server' // $ Define a single function as a server action 
  console.log("This is a server action")
}


export type typeUser = {
  name: string
  email: string
  password: string
  idUser: number
  err?: string
}

/*
export interface IMovieData {
  title: string
  year: string
  plot: string
  directors: string[]
  cast: string[]
};
*/

export const addUser = async (formData: FormData): Promise<typeUser | void> => {
  // 'use server'
  const newUser: typeUser = Object.fromEntries(formData) as unknown as typeUser;
  //console.log(formData); // ? shows an array of objects with key:value format with $ACTION_ID name, email, password, idUser
  //console.log(newUser); // ? shows 1 object with $ACTION_ID, name, email, password, idUser
  console.log("idUser data typeof is: ", typeof newUser.idUser);

  const idUser = parseInt(newUser.idUser.toString())

  try {
    connectToDb();
    const addUser = new User({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      idUser
    })


    await addUser.save();
    console.log("saved to db");
    revalidatePath("/serveractiontest"); // ? revalidate the path to update the data. Its regenerate the page '/serveractiontest' after a period of time(defined by param "revalidate" in getServerActions / getServerActionProps).
    // ? After the page is regenerated, the new data is fetched from the server and the page is updated. The users always will see the new data when the page is regenerated.

    // return newUser;

  } catch (err) {
    console.log(err);

  }

}


/*

export const deleteUser = async (formData: FormData) => {
  // 'use server'
  const { idUser } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Movie.deleteMany({ userId: idUser });
    await User.findByIdAndDelete(idUser);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (prevState: unknown, formData: FormData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password as string, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState: unknown, formData: FormData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if ((err as Error).message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
*/
/*

export const addPost = async (prevState: unknown, formData: FormData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const movieData = Object.fromEntries(formData) as unknown as IMovieData;

  try {
    connectToDb();
    const newPost = new Movie({
      title: movieData.title,
      year: movieData.year,
      plot: movieData.plot,
      directors: movieData.directors,
      cast: movieData.cast,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData: FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Movie.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};
*/