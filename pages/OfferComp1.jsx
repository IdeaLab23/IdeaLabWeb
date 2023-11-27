import Image from "next/image"

const Page3Comp1 = (props) => {
  return (
    <div className="my-12 max-sm:my-28">
        <div className="flex items-center gap-8 max-sm:block ">
            <Image className="max-sm:w-[7rem] max-sm:h-[7rem] max-sm:ms-60"
                src="/processor.png"
                alt="chip"
                width={40}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                height={1}
                />
            <h2 className="text-white font-bold font-mono text-3xl max-sm:text-6xl max-sm:-ms-48 max-sm:my-9 ">{props.title}</h2>
        </div>
        <p className="text-slate-200 w-[30rem] text-justify ms-14 text-lg mt-6 max-sm:text-[2.7rem] max-sm:text-center max-sm:leading-normal max-sm:w-[50rem] max-sm:-ms-24 ">{props.text}</p>
    </div>
  )
}

export default Page3Comp1