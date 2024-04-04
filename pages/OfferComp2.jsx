const Page3Comp2 = (props) => {
  return (
    <div>
        <div className="w-[265px] h-[266px] flex flex-col justify-center bg-[#151721] hover:bg-[#7B8CE5] max-sm:w-[20rem] max-sm:h-[20rem]">
            <p className="text-5xl font-sans font-bold text-white text-center max-sm:text-5xl">{props.title}</p>
            <p className="text-slate-200 text-xl text-center mt-4 max-sm:text-3xl max-sm:mt-7 ">{props.text}</p>
        </div>
    </div>
  )
}

export default Page3Comp2