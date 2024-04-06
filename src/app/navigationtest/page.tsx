// ! For client side navigation, use the next/navigation module. For server side navigation, use the next/router module.
//'use client'

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"



// TODO *******************************  CLIENT SIDE NAVIGATION  *******************************

// ! How Routing and Navigation works in Next.js. Check the documentation for more information: https://nextjs.org/docs/routing/introduction
// ? https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching
type Props = {}

// * The common behaviour of the navigation <Link> is prefetching the link given in the href attribute. It moves faster to the next page when the user clicks on the link. This is a good practice for the user experience.

/*

const NavigationtestPage = (props: Props) => {

  const router = useRouter()
  const pathName = usePathname()
  console.log(pathName);
  const searchParams = useSearchParams()

  const nameParams = searchParams.get("name") // ? get the value of the query parameter 'name'
  const agePärams = searchParams.get("age") // ? get the value of the query parameter 'age'
  console.log(nameParams, agePärams);

  const handlerClick = () => {

    console.log('clicked') // print the message in Console Browser Log
    //router.replace('/') // ? replace the current page with the home page. The user can't go back to the previous page since previous page is erased and replaced from the history. 
    //router.refresh() // ? refresh the current page. The component will be re-rendered. 
    //router.back() // ? go back to the previous page
    router.push('/') // ? redirect to home
  }


  return (
    <>
    <Link href="/">Home with prefetch</Link> {/* TRUE: The full route will be prefetched for both static and dynamic routes */
{/*
      <Link href="/" prefetch={false}>Home no prefetch</Link>  /* FALSE: Prefetching will never happen both on entering the viewport and on hover */}
{ /*
      <button onClick={handlerClick} style={{ background: "#fff", width: "max-content", padding: "10px", borderRadius: "3rem" }}>Write and redirect</button>
      */ }
//</>
//)
//}

// export default NavigationtestPage



// TODO *******************************  SERVER SIDE NAVIGATION  *******************************

const NavigationtestPage = (props: Props) => {

  const router = useRouter()
  const pathName = usePathname()
  console.log(pathName);
  const searchParams = useSearchParams()

  const nameParams = searchParams.get("name") // ? get the value of the query parameter 'name'
  const agePärams = searchParams.get("age") // ? get the value of the query parameter 'age'
  console.log(nameParams, agePärams);

  const handlerClick = () => {

    console.log('clicked') // print the message in Console Browser Log
    //router.replace('/') // ? replace the current page with the home page. The user can't go back to the previous page since previous page is erased and replaced from the history. 
    //router.refresh() // ? refresh the current page. The component will be re-rendered. 
    //router.back() // ? go back to the previous page
    router.push('/') // ? redirect to home
  }


  return (
    <>
      <Link href="/">Home with prefetch</Link> {/* TRUE: The full route will be prefetched for both static and dynamic routes */}
      <Link href="/" prefetch={false}>Home no prefetch</Link>  {/* FALSE: Prefetching will never happen both on entering the viewport and on hover */}
      <button onClick={handlerClick} style={{ background: "#fff", width: "max-content", padding: "10px", borderRadius: "3rem" }}>Write and redirect</button>


    </>
  )
}

export default NavigationtestPage
