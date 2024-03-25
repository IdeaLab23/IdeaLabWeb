import Image from "next/legacy/image"

const Page3Comp1 = (props) => {
  return (
    <div className="my-12 max-sm:my-9   max-sm:w-[30rem] ">
        <div className="">
            <Image  className="max-sm:inline"
                src="/processor.png"
                alt="chip"
                width="40px"
                height="40px"
                />
            <h2 className="text-white font-bold font-mono text-3xl max-sm:text-3xl max-sm:p-5  max-sm:inline   max-sm:w-[20rem]">{props.title}</h2>
        </div>
        <p className="text-slate-200 w-[30rem] ms-16 text-lg mt-6 max-sm:text-2xl max-sm:text-center  max-sm:leading-normal max-sm:w-[22rem] max-sm:ms-5 ">{props.text}</p>
    </div>
  )
}

export default Page3Comp1