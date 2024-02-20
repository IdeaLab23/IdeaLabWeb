import Image from "next/legacy/image"
import OfferComp1 from "./OfferComp1"
import OfferComp2 from "./OfferComp2"
import OfferComp3 from "./OfferComp3"

const Page3 = () => {
    const innovation = "AICTE IdeaLab may offer incubation support for student startups. This includes physical office space, infrastructure, and mentorship to help students develop their business ideas and products."
    const mentor = "Students may receive mentorship from experienced entrepreneurs, industry experts, and professors to guide them through the various stages of ideation, prototyping, and scaling their ventures."
    const training = "AICTE IdeaLab may organize workshops, training sessions, and boot camps to equip students with the necessary skills and knowledge to run a successful business."
    const resources = "The lab provides access to resources such as work stations, high speed internet connectivity, etc to assist students in developing their innovative ideas."
    const product = "Our dedicated teams of experts collaborate with you to bring your vision to life. From concept to market, we guide every step of your innovation journey."
    const network = "Students can connect with other like-minded peers and potential collaborators, helping them to build a network of resources and support."
  return (
    <div className="pt-24 pb-10 bg-black">
        <div className="z-0 absolute w-[400px] h-full rotate-180 right-0 top-[115rem] max-sm:top-[480rem] max-sm:left-[500px] max-sm:w-[500px] max-sm:h-[1000px] ">
            <Image
                src="/Ellipse-6.png"
                alt="okrf"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="w-[45rem] ms-56 max-sm:w-[55rem] max-sm:text-center max-sm:ms-16 ">
            <h3 className="innovation-slate-200 text-white font-mono text-lg max-sm:text-5xl ">What we Offer</h3>
            <h1 className="text-[3rem] font-bold font-mono mt-4 text-white leading-[4rem] max-sm:text-[4.5rem] max-sm:leading-[6rem] max-sm:my-10 ">Empowering Student<br/> Innovation at IDEA Lab</h1>
        </div>
        <div className="flex place-content-center items-center gap-14 max-sm:block max-sm:text-center max-sm:ms-52 max-sm:w-[50rem] ">
            <Image className="max-sm:w-[40rem] max-sm:h-[30rem] max-sm:-ms-6 "
                src="/roboHand.jpg"
                alt="hand"
                width="640px"
                height="450px"
            />
            <div>      
                <OfferComp1 title="Innovation Nurturing" text={innovation}/>
                <OfferComp1 title="Mentorship" text={mentor}/>
                <OfferComp1 title="Training and Workshops" text={training}/>
            </div>
        </div>
        <div className="flex justify-center gap-6 mt-28 mb-32 max-sm:flex max-sm:flex-col max-sm:gap-14 max-sm:items-center max-sm:w-[62rem] ">
            <OfferComp2 title="64K+" text="Success Projects" />
            <div className="w-[275px] h-[266px] flex flex-col justify-center bg-[#7B8CE5] hover:bg-[#151721] max-sm:w-[720px] max-sm:h-[550px] ">
                <p className="text-6xl font-mono font-bold text-white text-center max-sm:text-8xl ">54+</p>
                <p className="text-slate-200 text-xl text-center mt-4 max-sm:text-5xl max-sm:mt-7 ">Expert Team</p>
            </div>
            <OfferComp2 title="36K+" text="Satidifed Clients" />
            <OfferComp2 title="25+" text="Awards Winning" />
        </div>
        <div className="z-0 absolute w-[400px] h-full top-[185rem] max-sm:top-[730rem] max-sm:w-[500px] max-sm:h-[1000px] ">
            <Image
                src="/Ellipse-6.png"
                alt="okrf"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    <div className="flex justify-evenly max-sm:flex max-sm:flex-col max-sm:items-center max-sm:w-[62rem] ">
        <div className="text-white">
            <OfferComp3 title="Access to Resources" text={resources} />
            <OfferComp3 title="Product Development" text={product} />
            <OfferComp3 title="Networking" text={network} />
        </div>
        <Image className="max-sm:w-[45rem] max-sm:h-[50rem] max-sm:ms-5 max-sm:my-10"
          src="/man_inside.jpg"
          alt="Can't Load"
          width="640px"
          height="450px"
        />
    </div>
    </div>
  )
}

export default Page3