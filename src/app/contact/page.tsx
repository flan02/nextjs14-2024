//"use client";
import Image from "next/image";
import styles from "./contact.module.css";
import { FormEvent } from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact description",
};


const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), { ssr: false });

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