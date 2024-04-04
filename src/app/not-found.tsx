import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <>
      <h1>Not Found</h1>
      <p>Sorry, the page you are looking for doesn&apos;t exist.</p>
      <Link href="/">Go back to the homepage</Link>
    </>
  )
}

export default NotFound