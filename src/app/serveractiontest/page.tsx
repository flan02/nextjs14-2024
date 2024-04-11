import { useServer, addUser, typeUser } from "@/lib/action"


type Props = {}

const ServerActionPage = async (props: Props) => {

  const serverActionInComponent = async () => {
    'use server'
    console.log('Server action in component');
  }

  //const newUser = await addUser(new FormData());

  return (
    <>
      <form action={useServer}>
        <button
          className="bg-white py-2 px-4 text-blue-700 font-bold rounded-lg">
          Test me from server
        </button>
      </form>

      <form action={addUser} className="flex flex-col border border-emerald-300 h-48 pl-4 justify-evenly text-orange-500">
        <input type="text" name="name" id="name" placeholder="name" className="w-48 rounded-md " />
        <input type="text" name="email" id="email" placeholder="email" className="w-48 rounded-md " />
        <input type="text" name="password" id="password" placeholder="password" className="w-48 rounded-md " />
        <input type="number" name="idUser" id="idUser" placeholder="idUser" className="w-48 rounded-md " />
        <button
          className="bg-white py-2 px-4 text-blue-700 font-bold rounded-lg w-max self-center hover:bg-blue-700 hover:text-white">
          Create
        </button>
        <figcaption>Test ServerAction inside component</figcaption>
      </form>


    </>
  )
}

export default ServerActionPage