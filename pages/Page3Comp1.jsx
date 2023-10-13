import Image from "next/image"

const Page3Comp1 = (props) => {
  return (
    <div className="my-12">
        <div className="flex items-center gap-8">
            <Image 
                src="/processor.png"
                alt="chip"
                width={40}
                height={1}
                />
            <h2 className="text-white font-bold font-mono text-3xl">{props.title}</h2>
        </div>
        <p className="text-slate-200 w-[30rem] text-justify ms-14 text-lg mt-6">{props.text}</p>
    </div>
  )
}

export default Page3Comp1