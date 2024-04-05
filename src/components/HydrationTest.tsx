"use client"

type Props = {}

const HydrationTest = (props: Props) => {
  const random = Math.random();
  console.log(random);
  return (
    <>
      <h1>Hydration Test </h1>
      <p>{random}</p>
    </>
  )
}

export default HydrationTest