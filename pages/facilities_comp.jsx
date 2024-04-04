import Image from "next/legacy/image"

const Services_comp = (props) => {
  return (
  <div className="p-10 text-white hover:bg-[#1B255E] w-96 h-96 bg-[#151721] max-sm:w-[23rem] max-sm:h-[450px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center "> 
    <Image className="max-sm:w-[5rem] max-sm:h-[5rem]"
      src={props.img_path}
      alt="Can't Load"
      width="70px"
      height="70px"
    />
    <span className="font-bold py-2 block text-2xl max-sm:text-3xl ">{props.title}</span>
    <span className=" py-2 block text-lg max-sm:text-[1.3rem] max-sm:text-center max-sm:leading-normal ">{props.description}</span>
  </div>
  )
}

export default Services_comp