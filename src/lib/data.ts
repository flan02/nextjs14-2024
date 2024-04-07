import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TODO : Implement the real data fetching functions with dummy data for a fake array.

// * TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  { id: 1, title: "Post 1", body: "Post number 1", userId: 1 },
  { id: 2, title: "Post 2", body: "Post number 2", userId: 1 },
  { id: 3, title: "Post 3", body: "Post number 3", userId: 2 },
  { id: 4, title: "Post 4", body: "Post number 4", userId: 2 },
];


export const getPosts = async () => {
  /*
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
  */
  return posts; // ? TEMPORARY DATA. We don't have a real bbdd yet.
};

export const getPost = async (id: number) => {
  /*
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
  */
  return posts.find((post) => post.id === id); // ? TEMPORARY DATA. We don't have a real bbdd yet.
};

export const getUser = async (id: string) => {
  noStore();
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
