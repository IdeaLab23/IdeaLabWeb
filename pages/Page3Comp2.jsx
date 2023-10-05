const Page3Comp2 = (props) => {
  return (
    <div>
        <div className="w-[275px] h-[266px] flex flex-col justify-center bg-[#151721]">
            <p className="text-6xl font-mono text-white text-center ">{props.title}</p>
            <p className="text-slate-200 text-xl text-center mt-4">{props.text}</p>
        </div>
    </div>
  )
}

export default Page3Comp2