import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

type Post = {
  id: number
  title: string
  body: string
  userId?: number | null
  img?: string | null
  createdAt?: string | null
  slug?: string | null
}



const PostCard = ({ post }: { post: Post }) => {
  console.log(post.id);
  //console.log(post);
  post.img = "https://res.cloudinary.com/dhbig9jt8/image/upload/v1710278657/ksvykiyh9whhpd8dsajz.png"; // ? It will come from real bbdd by now I add a propertie to the object with a random image.
  return (

    post.img && post.id <= 12 &&
    <div className={styles.container}>
      <div className={styles.top}>
        {
          post.img && post.id <= 12 &&
          <div className={styles.imgContainer}>
            {/*<Image src={post.img} alt="" fill className={styles.img} />*/}
            <Image src={post.img} alt="dummy-image" fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.img} />
          </div>
        }
        {
          post.id <= 12 && <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
        }
      </div>
      <div className={styles.bottom}>
        {
          post.id <= 12 &&
          <>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>

            <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
            {/*
            <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
            */}
          </>
        }
      </div>
    </div>
  )
}

export default PostCard