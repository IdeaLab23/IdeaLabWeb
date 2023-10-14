import Image from "next/image"

const Page2Comp = (props) => {
  return (
    <div>
      <div className="text-white w-[20rem]">
        <Image
          src={props.img}
          alt="auto"
          width={70}
          height={1}
        />
        <h2 className="text-4xl font-bold my-7">{props.title}</h2>
        <p className="text-slate-200 text-lg">{props.text}</p>
      </div>
    </div>
  )
}

export default Page2Comp