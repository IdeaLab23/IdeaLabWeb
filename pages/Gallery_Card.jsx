import Image from "next/legacy/image"

const Gallery_Card = (props) => {
  return (
    <a className="pointer text-white font-extrabold flex xl:text-2xl xl:m-5 flex-col hover:brightness-50 hover:scale-100 " href="http://localhost:3000/gcards/Demonstration">
    <Image className=" "
      src={props.image}
      width={600}
      height={500}
    />  
    <div className="relative xl:bottom-12 xl:p-2 brightness-100 bg-black max-sm:bottom-84 max-sm:text-center">
      <span className="">{props.title}</span>
    <span>{props.desc}</span></div>
    </a>
  )
}
export default Gallery_Card