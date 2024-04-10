//import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

type Props = {
  directors: string[];
};


// * FETCH DATA WITH AN EXTERNAL API - jsonplaceholder
/*
const getData = async ({ directors }: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
*/

const PostUser = async ({ directors }: Props) => {
  // * FETCH DATA WITH AN EXTERNAL API
  //const user = await getData({ userId });
  //console.log(directors);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={"/noavatar.png"}
        alt=""
        width={50}
        height={50}
        priority={true}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Director/s</span>
        <span className={styles.username}>{directors ? directors.join(", ") : "unknown"}</span>
      </div>
    </div>
  );
};

export default PostUser;