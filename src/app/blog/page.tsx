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

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();

  // FETCH DATA WITHOUT AN API
  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {
        posts.map((post: Post) => (
          <div className={styles.post} key={post.id}>
            <PostCard post={post} />
          </div>
        ))

      }
    </div>
  );
};

export default BlogPage;