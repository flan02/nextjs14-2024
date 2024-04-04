import Image from "next/image"



type Props = {}

const Aboutpage = (props: Props) => {
  return (
    <div>
      <Image src="/about.png" alt="about-image" width={300} height={300} />
    </div>
  )
}

export default Aboutpage