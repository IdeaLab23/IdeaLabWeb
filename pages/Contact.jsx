import Image from "next/legacy/image"

const Contact = () => {
  return (
    <div id="contact" className="pt-36 pb-56 text-white bg-black max-sm:pt-48">
      <div className="z-0 absolute top-[385rem] w-full h-[300px] max-sm:top-[1401rem] max-sm:w-[62rem] ">
        <Image 
          src="/Ellipse-BG.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
        <h3 className='text-7xl font-[Montserrat] w-[60rem] leading-normal max-sm:leading-tight ps-24 max-sm:text-center max-sm:text-[7.9rem] '>We can't wait to hear your ideas! Contact us.</h3>
        <form action="/contact" method="POST">
          <div className="flex flex-wrap justify-between ps-24 pt-10 max-sm:flex-col max-sm:items-center max-sm:ps-7 ">
            <div className="w-[52rem] max-sm:w-[45rem] ">
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " type="text" placeholder="First Name*" />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " type="text" placeholder="Last Name" />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " type="email" placeholder="Email*" />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " type="number" placeholder="Phone Number" />
            </div>
            <h3 className='text-4xl font-[Montserrat] w-[60rem] pt-16 font-bold max-sm:leading-normal max-sm:text-7xl max-sm:ps-28 max-sm:pt-28 '>Tell us your Wonderfull Skills . . .</h3>
            <div className="w-[52rem] pt-8 ps-10 max-sm:ms-5 max-sm:pt-16 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-9 ">
              <label htmlFor="web" className="font-mono text-2xl max-sm:text-6xl ">Web Developer : </label>
              <select name="" id="stack" className="bg-[#676262] ms-3 p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem] max-sm:h-[5rem] max-sm:text-4xl max-sm:w-[30rem] ">
                <option value="frontend">None</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Fullstack Developer</option>
              </select>
            </div>
            <div className="w-[52rem] pt-8 ps-10 max-sm:ms-5 max-sm:pt-16 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-9 ">
              <label htmlFor="app" className="font-mono text-2xl max-sm:text-6xl">App Developer : </label>
              <select name="" id="stack" className="bg-[#676262] ms-3 p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem] max-sm:h-[5rem] max-sm:text-4xl max-sm:w-[30rem]">
                <option value="frontend">None</option>
                <option value="frontend">Android Developer</option>
                <option value="backend">IOS Developer</option>
              </select>
            </div>
            <div className="w-[52rem] pt-8 ps-10 max-sm:ms-5 max-sm:pt-16 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-9 ">
              <label htmlFor="ui" className="font-mono text-2xl max-sm:text-6xl">UI/UX Designer : </label>
              <select name="" id="stack" className="bg-[#676262] p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem] max-sm:h-[5rem] max-sm:text-4xl max-sm:w-[30rem]">
                <option value="frontend">None</option>
                <option value="frontend">Canva</option>
                <option value="backend">Figma</option>
                <option value="fullstack">Adobe Photoshop</option>
              </select>
            </div>
          </div>
          <button className="w-[35rem] h-[6rem] ms-24 my-12 text-2xl text-white bg-black border border-white rounded hover:bg-white hover:text-black focus:outline-none max-sm:ms-60 max-sm:h-[9rem] max-sm:my-24 max-sm:text-5xl " type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact