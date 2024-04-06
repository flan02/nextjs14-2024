import React from 'react';
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
//import { getPosts } from "@/lib/data";

type Post = {
  id: number
  title: string
  body: string
  img: string
  createdAt: string
  slug: string
}

interface Params {
  params: string;
  searchParams: string;
}

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = ({ params, searchParams }: Params) => {
  console.log(params, searchParams); // http://localhost:3000/blog?q=test    {q: 'test'}
  // FETCH DATA WITH AN API
  //const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Blog with images HERE</h1>
      {
        /*
      posts.map((post: Post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))
      */
      }
    </div>
  );
};

export default BlogPage;