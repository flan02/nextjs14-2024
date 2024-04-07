

type Props = {}

const Skeleton = (props: Props) => {
  return (
    <div className="w-[288px] animate-pulse rounded shadow-xl border-[1px]">
      <div className="bg-gray-800/20 rounded w-full h-[168px]"></div>
      <section className="flex flex-col gap-3">
        <div className="">
          <div className="bg-gray-800/20 rounded h-4 w-16"></div>
          <div className="bg-gray-800/20 rounded h-4 w-16"></div>
        </div>
        <div className="">
          <div className="bg-gray-800/20 rounded h-4 w-16"></div>
          <div className="bg-gray-800/20 rounded h-4 w-16"></div>
        </div>
        <div className="">
          <div className="bg-gray-800/20 rounded h-4 w-16"></div>
          <div className="bg-gray-800/20 rounded h-4 w-16"></div>
        </div>

      </section>
    </div>
  )
}

export default Skeleton