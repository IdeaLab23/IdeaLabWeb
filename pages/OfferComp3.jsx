import Image from "next/legacy/image"

const Page3Comp1 = (props) => {
  return (
    <div className="my-12 max-sm:my-13  max-sm:w-[35rem] ">
        <div className="max-sm:ms-5 ">
            <Image  className=""
                src="/processor.png"
                alt="chip"
                width="40px"
                height="40px"
                />
            <h2 className="text-white font-bold font-mono xl:text-3xl max-sm:text-2xl max-sm:p-2    max-sm:ms-5    max-sm:w-[20rem]">{props.title}</h2>
        </div>
        <p className="text-slate-200 w-[30rem] ms-16 text-lg mt-6 max-sm:text-2xl max-sm:text-center  max-sm:leading-normal max-sm:w-[22rem] max-sm:ms-5 ">{props.text}</p>
    </div>
  )
}

export default Page3Comp1