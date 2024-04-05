'use client'

type Props = {
  children: React.ReactNode
}

// * Our provider will be rendered on the client side, but their children will be rendered on the server side if we don't write "use client" in the children component.
const ClientSideProviderTest = (props: Props) => {
  return (
    <>

      {props.children}
    </>
  )
}

export default ClientSideProviderTest