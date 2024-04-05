//"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { FormEvent, useEffect, useState } from "react";
import HydrationTest from "@/components/HydrationTest";
import dynamic from "next/dynamic";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

// * Metadata is disallowed if the page is a "use client" component. Only "use server" components can have metadata.
/*
export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};
*/
// $ If the component is a client-side component, you can use the useEffect, localStorage, sessionStorage, etc. but you can't use the window object, document object, mouse events, etc.


// ? Browser console log warning us when we have a "use server" component and we try to re-render in the client side.
// ! Uncaught Error: Text content does not match server-rendered HTML.
// ! Uncaught Error: There was an error while hydrating this Suspense boundary. Switched to client rendering.


// $ COMMON CLIENT SIDE RENDERING. We need to enable "use client" in the first line of the file.
{/*
const ContactPage = () => {
  // * If you see this in the browser console log, it means that the page is being rendered on the client side but if you see ONLY in the CLI, it means that the page is being rendered on the server side.
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [])
  const random = Math.random();
  console.log(random);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt=""
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
{/* <div suppressHydrationWarning>{a}</div> */ }
{/* isClient && random  We sure that component only re-render on client-side */ }
{/* 
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button onClick={(e) => handlerForm(e)}>Send</button>
        </form>
      </div>
    </div>
  );
};

*/}



// TODO : Extremily important to know that if we use a "use client" component inside a "use server" component, we will have a hydration warning in the console log.

// * We are importing this component without using SSR. It means that the component will be rendered on the client side.
// ! How it is we can prevent the hydration warning in the console log. The most common problem when we rendering component in nextjs
const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), { ssr: false });

// $ SERVER SIDE RENDERING WITH HYDRATION. IT IS A COMPONENT SERVER BUT INSIDE CONTAIN OTHER COMPONENT THAT WORKS AS CLIENT-SIDE-RENDERING.
const ContactPage = () => {


  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt=""
          fill
          sizes="(max-width: 600px) 100vw, 600px"
          className={styles.img} />
      </div>
      <div className={styles.formContainer}>

        {/* <div suppressHydrationWarning>{a}</div>  // ! We'll continue this the hydration problem but it won't be visible in the console browser log */}
        {/*  <HydrationTest /> It is a client-side-component inside a "use server" parent */}
        <HydrationTestNoSSR />
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;

const handlerForm = (event: FormEvent) => {
  event.preventDefault();
  console.log("Form submitted");
}