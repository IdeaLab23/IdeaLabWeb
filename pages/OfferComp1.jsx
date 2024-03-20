import Image from "next/legacy/image"

const Page3Comp1 = (props) => {
  return (
    <div className="my-12 max-sm:my-28">
        <div className="flex items-center gap-8 max-sm:block max-sm:w-7 ">
            <Image className="max-sm:w-[7rem] max-sm:h-[7rem] max-sm:ms-60"
                src="/processor.png"
                alt="chip"
                width="40px"
                height="40px"               
                />
            <h2 className="text-white font-bold font-mono text-3xl max-sm:text-4xl max-sm:ms-4 max-sm:my-9 ">{props.title}</h2>
        </div>
        <p className="text-slate-200 w-[30rem] text-justify ms-14 text-lg mt-6 max-sm:text-2xl max-sm:text-center max-sm:leading-normal max-sm:w-[20rem] max-sm:ms-1 ">{props.text}</p>
    </div>
  )
}

export default Page3Comp1