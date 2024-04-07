//import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

type Props = {
  userId: number;
};


// * FETCH DATA WITH AN EXTERNAL API
const getData = async ({ userId }: Props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const PostUser = async ({ userId }: Props) => {
  // * FETCH DATA WITH AN EXTERNAL API
  const user = await getData({ userId });

  // FETCH DATA WITHOUT AN API
  //const user = await getUser(userId);
  //const user = { username: "John", img: "" };
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        width={50}
        height={50}
        priority={true}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;