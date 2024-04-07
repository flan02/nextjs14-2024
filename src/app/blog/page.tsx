import React from 'react';
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from '@/lib/data';


type Post = {
  id: number
  title: string
  body: string
  userId?: number | null
  img?: string | null
  createdAt?: string | null
  slug?: string | null

}




interface Params {
  params: string;
  searchParams: string;
}

// FETCH DATA WITH AN API
/*
const getData = async () => {

  // $ Data Fetching Behaviours...
  // * Calling to Fake API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "force-cache" }); // ? Cached per default, doesn't need to be specified 2nd parameter
  const resNoCached = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-cache" }); // ? Not Cached, we define this request in our 2nd parameter
  const resNoStored = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" }); // ? Not Stored, It's not stored in the cache each fetch is a new request

  // * Calling to Server API
  //const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } }); // ? Refresh data every 1 hour

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  ;
  return res.json();
};
*/
const BlogPage = async () => {
  // const BlogPage = ({ params, searchParams }: Params) => {

  // console.log(params, searchParams); // http://localhost:3000/blog?q=test    {q: 'test'}

  // ? FETCH DATA WITH AN EXTERNAL API
  //const posts = await getData();

  // ? FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {

        posts.map((post: Post) => (
          <div className={styles.post} key={post?.id}>
            <PostCard post={post} />
          </div>
        ))

      }
    </div>
  );
};

export default BlogPage;