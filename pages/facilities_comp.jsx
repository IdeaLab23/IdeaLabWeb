import Image from "next/image"

const Services_comp = (props) => {
  return (
  <div className="p-10 text-white hover:bg-[#1B255E] w-96 h-96 bg-[#151721] max-sm:w-[780px] max-sm:h-[700px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center "> 
    <Image className="max-sm:w-[7rem] max-sm:h-[7rem]"
      src={props.img_path}
      alt="Can't Load"
      width={70}
      height={50}  
    />
    <span className="font-bold p-2 block text-2xl max-sm:text-5xl max-sm:pt-9 ">{props.title}</span>
    <span className=" p-2 block text-lg max-sm:text-4xl max-sm:text-center max-sm:leading-normal max-sm:my-6 ">{props.description}</span>
    <button className="font-bold text-[#7B86E5] max-sm:text-3xl ">Learn More</button>
  </div>
  )
}

export default Services_comp