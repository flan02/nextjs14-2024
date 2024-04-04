import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/Links"
//import { auth } from "@/lib/auth";

const Navbar = async () => {

  //const session = await auth();
  const session = null;


  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>


        <Links session={session} />
      </div>
    </header>
  )
}

export default Navbar