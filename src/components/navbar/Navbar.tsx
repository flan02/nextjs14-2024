import Link from "next/link"
import styles from "./navbar.module.css"
import Links from "./links/Links"
import { FaBlog } from "react-icons/fa";
//import { auth } from "@/lib/auth";

const Navbar = async () => {

  //const session = await auth();
  const session = null;


  return (
    <header className={styles.container}>
      <Link href="/" className={styles.logo}>
        <FaBlog
          style={{
            color: "#f0b40f",
          }}
        />
      </Link>
      <div>


        <Links session={session} />
      </div>
    </header>
  )
}

export default Navbar