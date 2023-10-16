import Image from "next/image"

const Contact = () => {
  return (
    <div id="contact" className="pt-36 pb-56 text-white bg-black">
      <div className="z-0 absolute top-[385rem] w-full h-[300px]">
        <Image 
          src="/Ellipse-BG.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
        />
      </div>
        <h3 className='text-7xl font-[Montserrat] w-[60rem] leading-normal ps-24'>We can't wait to hear your ideas! Contact us.</h3>
        <form action="post">
          <div className="flex flex-wrap justify-between ps-24 pt-10">
            <div className="w-[52rem]">
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none" type="text" placeholder="First Name*" />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none" type="text" placeholder="Last Name" />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none" type="email" placeholder="Email*" />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none" type="number" placeholder="Phone Number" />
            </div>
            <h3 className='text-4xl font-[Montserrat] w-[60rem] pt-16 font-bold leading-normal'>Tell us your Wonderfull Skills . . .</h3>
            <div className="w-[52rem] pt-8 ps-10">
              <label htmlFor="web" className="font-mono text-2xl">Web Developer : </label>
              <select name="" id="stack" className="bg-[#676262] ms-3 p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem]">
                <option value="frontend">None</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
              </select>
            </div>
            <div className="w-[52rem] pt-8 ps-10">
              <label htmlFor="web" className="font-mono text-2xl">App Developer : </label>
              <select name="" id="stack" className="bg-[#676262] ms-3 p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem]">
                <option value="frontend">None</option>
                <option value="frontend">Android Developer</option>
                <option value="backend">IOS Developer</option>
              </select>
            </div>
            <div className="w-[52rem] pt-8 ps-10">
              <label htmlFor="web" className="font-mono text-2xl">UI/UX Designer : </label>
              <select name="" id="stack" className="bg-[#676262] p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem]">
                <option value="frontend">None</option>
                <option value="frontend">Canva</option>
                <option value="backend">Figma</option>
                <option value="fullstack">Adobe Photoshop</option>
              </select>
            </div>
          </div>
          <button className="w-[35rem] h-[6rem] ms-24 my-12 text-2xl text-white bg-black border border-white rounded hover:bg-white hover:text-black focus:outline-none" type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact