import Image from "next/legacy/image"

const Page2Comp = (props) => {
  return (
    <div>
      <div className="text-white w-[20rem] max-sm:w-[40rem] ">
        <Image className="max-sm:w-[12rem] max-sm:h-[12rem] max-sm:ms-32 "
          src={props.img}
          alt="auto"
          width="70px"
          height="70px"
        />
        <h2 className="text-4xl font-bold my-7 max-sm:text-7xl max-sm:-ms-52 max-sm:my-12 ">{props.title}</h2>
        <p className="text-slate-200 text-lg text-justify max-sm:text-5xl max-sm:-ms-52 max-sm:leading-normal max-sm:mb-16 max-sm:tracking-wide ">{props.text}</p>
      </div>
    </div>
  )
}

export default Page2Comp