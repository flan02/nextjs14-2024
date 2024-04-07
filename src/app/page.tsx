import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {

  return (
    <main className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>TvShows</h1>
        <p className={styles.desc}>
          Reviews for the best movies and series. Find out what to watch next.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More </button>
          <button className="bg-purple-500 px-8 rounded-md">Contact </button>
        </div>

        <div className={styles.brands}>
          <Image
            sizes="(max-width: 600px) 100vw, 600px"
            src="/brands.png" alt="brands" fill className={styles.brandImg} />
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="Homepage Image"

          sizes="(max-width: 600px) 100vw, 400px"
          width={500}
          height={500}
          className={styles.heroImg}
        />
      </div>

    </main>

  );
}
