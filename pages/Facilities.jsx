import Facilities_comp from "./facilities_comp"
import Image from "next/legacy/image"
const Page4 = () => {
const data=
  [
    "A 3D printer is a revolutionary manufacturing device that creates three-dimensional objects by layering materials such as plastic, metal, or resin based on digital designs.  ",
    "A portable grinding machine is a versatile tool used for shaping, sharpening, or smoothing surfaces by removing material through abrasion",
    "A portable drilling machine is a tool used to drill holes in various types of materials, such as wood, metal, and plastic. ",
    "A digital microscope is an advanced imaging tool that combines optical magnification with digital imaging technology to capture high-resolution images and videos of microscopic objects. ",
    "A laser cutter is a versatile tool used for precision cutting, engraving, and marking a variety of materials with the use of a high-powered laser beam.",
    "A PCB prototype machine is a specialized device used in electronics manufacturing to create prototype printed circuit boards (PCBs) quickly and accurately"

  ]
  return (
    <div id="facilities" className="bg-black pt-14 max-sm:w-full max-sm:pt-16 ">
      <div className="z-0 xl:absolute right-0 top-[250rem] rotate-180 w-[300px] h-full max-sm:top-[1050rem] max-sm:left-[500px] max-sm:w-[50px] max-sm:h-[10px] max-sm:hidden ">
        <Image 
          src="/Ellipse-6.png"
          alt="tgf"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className="text-slate-200 font-mono ms-56 text-lg max-sm:ms-[2rem] max-sm:text-xl ">Our Facilities</h3>
      <div className="flex max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:w-[22rem] ">
        <h1 className="text-[3rem] font-bold font-mono text-white leading-[4rem] ms-56 max-sm:text-3xl max-sm:leading-[3rem] max-sm:my-10 max-sm:ms-3 ">Our World Class Facilities<br/>and Resources</h1>
        <button className="xl:w-52 xl:h-14 bg-[#7B8CE5] rounded-full text-white xl:ms-[10rem] text-lg font-mono hover:bg-white hover:text-[#7B8CE5] max-sm:w-[20rem]  max-sm:text-3xl max-sm:h-[5rem] max-sm:ms-9 ">Discover More</button>  
      </div>
      <div className="flex justify-center gap-7 my-14 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:ms-2 ">
        <Facilities_comp title="3d Printer"  description={data[0]} img_path="/auto.png"/>
        <Facilities_comp title="Portable Grinding Machine" description={data[1]} img_path="/pre.png"/>
        <Facilities_comp title="3D Scanner" description={data[2]} img_path="/manu.png"/>
      </div>
      <div className="flex justify-center gap-7 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:ms-2 ">
        <Facilities_comp title="Digitial Microscope " description={data[3]} img_path="/safety.png"/>
        <Facilities_comp title="Laser Cutter" description={data[4]} img_path="/drill.png"/>
        <Facilities_comp title="PCB Prototype Machine" description={data[5]} img_path="/pre.png"/>
    
      </div> 
    </div>
  )
}

export default Page4