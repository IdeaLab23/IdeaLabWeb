import Image from "next/image"

const FacilitiesComp = (props) => {
  return (
  <div className="p-10 text-white hover:bg-[#1B255E] w-96 h-96 bg-[#151721]"> 
      <Image 
        src={props.img_path}
        alt="Can't Load"
        width={70}
        height={50}  
      />
    <span className="font-bold  p-2 block text-2xl">{props.title}</span>
    <span className=" p-2 block text-lg">{props.description}</span>
    <button className="font-bold  text-[#7B86E5] ">Learn More</button></div>
    )
}

export default FacilitiesComp