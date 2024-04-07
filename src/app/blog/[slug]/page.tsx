import Image from "next/image";
import styles from "./singlePost.module.css";
//import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";


// * Dynamic route page
type Post = {
  id: number
  title: string
  body: string
  userId: number
  img?: string | null
  createdAt?: string | null
  slug?: string | null

}

interface Params {
  slug: string;
}



// FETCH DATA WITH AN API
const getData = async (slug: string) => {
  //const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = params;

  //const post = await getPost(slug);
  const post = { title: "Post 1", desc: "This is post 1" }
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }: { params: Params }) => {
  const { slug } = params;
  // console.log(params)


  // * FETCH DATA WITH AN EXTERNAL API
  /*
  const post = await getData(slug);
  post.img = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1710278657/ksvykiyh9whhpd8dsajz.png"; // ? It will come from real bbdd by now I add a propertie to the object with a random image.
  post.createdAt = new Date().toString().slice(4, 16)
  //console.log(post);
  */

  // * FETCH DATA WITHOUT AN API. FROM OUR FAKE FILE data.ts
  const post: Post = await getPost(parseInt(slug));
  post.img = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1710278657/ksvykiyh9whhpd8dsajz.png"; // ? It will come from real bbdd by now I add a propertie to the object with a random image.
  post.createdAt = new Date().toString().slice(4, 16)
  return (
    <div className={styles.container}>
      {

        post && post.img && (
          <div className={styles.imgContainer}>
            <Image src={post?.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} />
          </div>
        )

      }
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {
            // * LAZY LOADING FOR WRAPPED COMPONENT
            post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )

          }
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {
                post && post.createdAt
              }
            </span>
          </div>
        </div>
        <div className={styles.content}>{post && post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;