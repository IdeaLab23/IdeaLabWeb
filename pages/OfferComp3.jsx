import Image from "next/legacy/image"

const Page3Comp1 = (props) => {
  return (
    <div className="my-12 max-sm:my-12 max max-sm:ms-7 ">
        <div className="flex items-center gap-8 max-sm:flex max-sm:flex-col  ">
            <Image 
                src="/processor.png"
                alt="chip"
                width="40px"
                height="40px"
                />
            <h2 className="text-white font-bold font-mono text-3xl max-sm:text-xl max-sm:my-9 max-sm:w-40 ">{props.title}</h2>
        </div>
        <p className="text-slate-200 w-[30rem] ms-16 text-lg mt-6 max-sm:text-[2rem] max-sm:text-center  max-sm:leading-normal max-sm:w-[20rem] max-sm:ms-1 ">{props.text}</p>
    </div>
  )
}

export default Page3Comp1