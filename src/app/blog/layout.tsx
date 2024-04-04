// * Layout only be will accessed by the pages where it is created.

type Props = {}

const BlogLayout = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/*<h1>This is a BlogLayout</h1>*/}
      {children}
    </div>
  )
}

export default BlogLayout