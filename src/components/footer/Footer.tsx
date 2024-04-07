import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>flan02</div>
      <div className={styles.text}>
        Nextjs14 features © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;