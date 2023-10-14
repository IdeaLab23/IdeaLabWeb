import Image from "next/image"
import OfferComp1 from "./OfferComp1"
import OfferComp2 from "./OfferComp2"
import OfferComp3 from "./OfferComp3"

const Page3 = () => {
    const text = "jdjk"
    const innovation = "AICTE IdeaLab may offer incubation support for student startups. This includes physical office space, infrastructure, and mentorship to help students develop their business ideas and products."
    const mentor = "Students may receive mentorship from experienced entrepreneurs, industry experts, and professors to guide them through the various stages of ideation, prototyping, and scaling their ventures."
    const training = "AICTE IdeaLab may organize workshops, training sessions, and boot camps to equip students with the necessary skills and knowledge to run a successful business."
    const resources = "The lab provides access to resources such as work stations, high speed internet connectivity, etc to assist students in developing their innovative ideas."
    const product = "Our dedicated teams of experts collaborate with you to bring your vision to life. From concept to market, we guide every step of your innovation journey."
    const network = "Students can connect with other like-minded peers and potential collaborators, helping them to build a network of resources and support."
  return (
    <div className="pt-24 pb-10 bg-black">
        <div className="z-0 absolute w-[400px] h-full rotate-180 right-0 top-[115rem]">
            <Image
                src="/Ellipse-6.png"
                alt="okrf"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="w-[45rem] ms-56">
            <h3 className="innovation-slate-200 text-white font-mono text-lg">What we Offer</h3>
            <h1 className="text-[3rem] font-bold font-mono mt-4 text-white leading-[4rem]">Empowering Student<br/> Innovation at IDEA Lab</h1>
        </div>
        <div className="flex place-content-center items-center gap-14">
            <Image 
                src="/roboHand.jpg"
                alt="hand"
                width={600}
                className="w-[670px] h-[500px]"
                height={400}
            />
            <div>      
                <OfferComp1 title="Innovation Nurturing" text={innovation}/>
                <OfferComp1 title="Mentorship" text={mentor}/>
                <OfferComp1 title="Training and Workshops" text={training}/>
            </div>
        </div>
        <div className="flex justify-center gap-6 mt-28 mb-32">
            <OfferComp2 title="64K+" text="Success Projects" />
            <div className="w-[275px] h-[266px] flex flex-col justify-center bg-[#7B8CE5] hover:bg-[#151721]">
                <p className="text-6xl font-mono text-white text-center ">54+</p>
                <p className="text-slate-200 text-xl text-center mt-4">Expert Team</p>
            </div>
            <OfferComp2 title="36K+" text="Satidifed Clients" />
            <OfferComp2 title="25+" text="Awards Winning" />
        </div>
        <div className="z-0 absolute w-[400px] h-full top-[185rem]">
            <Image
                src="/Ellipse-6.png"
                alt="okrf"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="flex justify-evenly">
        <div className="text-white">
            <OfferComp3 title="Access to Resources" text={resources} />
            <OfferComp3 title="Product Development" text={product} />
            <OfferComp3 title="Networking" text={network} />
        </div>
        <Image 
          src="/man_inside.jpg"
          alt="Can't Load"
          width={450}
          className="w-[550px] h-[600px] mt-10"
          height={100}
        />
    </div>
    </div>
  )
}

export default Page3