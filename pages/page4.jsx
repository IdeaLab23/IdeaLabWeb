import Services_comp from "@/components/services_comp"
import Image from "next/image"
const Page4 = (props) => {
const data=
[
  "Augue congue turpis ut purus ut nibh sit. Et consectetur elit volutpat blandit sed facilisis. At in orci vel a vestibulum egestas. Ut faucibus.",
  ""
]
  return (
    <div className="ml-28 ">
        <h3 className="text-slate-200 font-mono text-lg">OUR  SERVICES</h3>
        <div className="flex  text-center">
            <h1 className="text-[2.4rem] font-bold font-mono  text-white leading-[4rem]	">Revolutionize Your Industry with<br/>  AI and Robotics</h1>
            <button className=" bg-[#7e8fe0] rounded-full  max-h-12  w-48 text-xs  p-3 ml-auto mr-56">DISCOVER MORE </button>  
        </div>
        <div className="flex justify-evenly mt-16 mr-13 -ml-14">
            <Services_comp title="Automation"  description={data[0]} img_path="/auto.png"/>
            <Services_comp title="Construction" description={data[0]} img_path="/pre.png"/>
            <Services_comp title="Manufacturing" description={data[0]}img_path="/manu.png"/>
                  </div>
                  <div className="flex justify-evenly mt-16  mr-13 -ml-14">
                  <Services_comp title="Public Safety " description={data[0]} img_path="/safety.png"/>
            <Services_comp title="Power Utilities" description={data[0]} img_path="/drill.png"/>
            <Services_comp title="Management" description={data[0]} img_path="/pre.png"/>
            </div> </div>
  )
}

export default Page4