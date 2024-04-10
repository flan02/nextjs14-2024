/* eslint-disable @next/next/no-img-element */

import styles from "./singlePost.module.css";
import { Suspense } from "react";
import { getMovie } from "@/lib/data";
import Link from "next/link";
import PostUser from "@/components/postUser/postUser";
import { Metadata } from "next";

interface Params {
  slug: string;
}


export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = params;

  const movie = await getMovie(slug); // ? The fetch to the API or query to database only happens one time while their are the same.

  return {
    title: movie?.title || "Movie not found",
    description: movie?.plot || "No description available",
  };
};

const SinglePostPage = async ({ params }: { params: Params }) => {
  const { slug } = params;

  const movie = await getMovie(slug); // ? The fetch to the API or query to database only happens one time while their are the same.
  //console.log(movie);
  return (
    <>
      {
        movie
          ?
          <div className={styles.container}>
            {
              movie.poster && (
                <div className={styles.imgContainer}>
                  <img src={movie.poster as unknown as string} alt="" className={styles.img} />
                </div>
              )

            }
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{`${movie.title}`}</h1>
              <div className={styles.detail}>
                {
                  // * LAZY LOADING FOR WRAPPED COMPONENT
                  movie && (
                    <Suspense fallback={<div>Loading...</div>}>
                      <PostUser directors={(movie.directors as unknown as string[])} />
                    </Suspense>
                  )
                }
                <div className={styles.detailText}>
                  <span className={styles.detailTitle}>Published</span>
                  <span className={styles.detailValue}>{`${(movie.lastupdated as unknown as string).slice(0, 16)}`}</span>
                </div>
              </div>
              <div className={styles.content}>
                <span className={styles.detailTitle}>Plot:</span>
                <p>
                  {`${movie.plot}`}
                </p>
                <br />
                <p>
                  <span className={styles.detailTitle}>
                    Cast:
                  </span>
                  &nbsp; {`${(movie.cast as unknown as string[]) ? movie.cast.join(", ") : "unknown"}`}
                </p>
                <p>
                  <span className={styles.detailTitle}>
                    Release year:
                  </span>
                  &nbsp; {`${movie.year}`}
                </p>
              </div>
              <Link href="/blog" className="bg-white mb-4 px-4 py-2 w-max rounded-md text-blue-800 font-bold hover:bg-blue-800 hover:text-white hover:font-bold hover:border-2 hover:border-white">Go back</Link>

            </div>
          </div>
          : <p>No movie founded.</p>
      }
    </>
  )


  /*
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
  */
};

export default SinglePostPage;