"use client"
import Image from "next/legacy/image"
import React from "react"

const Contact = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [pitch, setPitch] = React.useState("")
  const [iot, setIot] = React.useState("")
  const [dev, setDev] = React.useState("")
  const [ui, setUi] = React.useState("")
  const submitHandler = async (e) => {
    e.preventDefault()
    const formResponse = {
      name,
      email,
      phone,
      pitch,
      iot,
      dev,
      ui
    }
    const res = await fetch("/api/FormResponses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formResponse)
    })
    eval(alert("Form Submitted Successfully"))
  }
  return (
    <div id="contact" className="pt-20 pb-56 text-white bg-black max-sm:pt-48">
      <div className="z-0 absolute top-[505rem] w-full h-[300px] max-sm:top-[1401rem] max-sm:w-[62rem] ">
        <Image 
          src="/Ellipse-BG.png"
          alt="rfe"
          layout="fill"
          objectFit="cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
        <h3 className='text-7xl font-[Montserrat] w-[60rem] leading-normal max-sm:leading-tight ps-24 max-sm:text-center max-sm:text-[7.9rem] '>We can't wait to hear your ideas! Contact us.</h3>
        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap justify-between ps-24 pt-10 max-sm:flex-col max-sm:items-center max-sm:ps-7 ">
            <div className="w-[52rem] max-sm:w-[45rem] ">
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " name="fName" type="text" placeholder="Full Name*" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " name="email" type="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="w-full h-[5.3rem] my-4 px-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " name="phone" type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <textarea className="w-full h-[5.9rem] my-4 py-8 pl-4 text-xl text-white placeholder-[#959595] bg-[#363636] border-b-2 border-white focus:border-b-2 focus:border-orange-600 focus:outline-none max-sm:h-[11rem] max-sm:text-[2.6rem] max-sm:px-8 " name="pitch" id="" cols="" rows="" placeholder="Pitch Yourself *" value={pitch} onChange={(e) => setPitch(e.target.value)}></textarea>
            </div>
            <h3 className='text-4xl font-[Montserrat] w-[60rem] pt-16 font-bold max-sm:leading-normal max-sm:text-7xl max-sm:ps-28 max-sm:pt-28 '>Tell us your Wonderfull Skills . . .</h3>
            <div className="w-[52rem] pt-8 ps-10 max-sm:ms-5 max-sm:pt-16 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-9 ">
              <label htmlFor="iot" className="font-mono text-2xl max-sm:text-6xl">  IOT Skills: </label>
              <select name="iotSkills" id="stack" className="bg-[#676262] ms-3 p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem] max-sm:h-[5rem] max-sm:text-4xl max-sm:w-[30rem]" value={iot} onChange={(e) => setIot(e.target.value)}>
                <option value="None">None</option>
                <option value="Microcontroller Platforms">Microcontroller Platforms( Arduino, Raspberry Pi, ESP8266, and ESP3)</option>
                <option value="Understanding of IoT Concepts">Understanding of IoT Concepts</option>
                <option value="Knowledge of Sensors and Actuators">Knowledge of Sensors and Actuators</option>
                <option value="Basic Electronics">Basic Electronics</option>
                <option value="Programming Skills">Programming Skills</option>
                <option value="Communication Protocols">Communication Protocols(Bluetooth & Wifi)</option>
                <option value="IoT Platforms and Tools">IoT Platforms and Tools</option>
                <option value="Security Fundamentals">Security Fundamentals</option>
              </select>
            </div>

            <div className="w-[52rem] pt-8 ps-10 max-sm:ms-5 max-sm:pt-16 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-9 ">
              <label htmlFor="developer" className="font-mono text-2xl max-sm:text-6xl "> Developer : </label>
              <select name="Dev" id="stack" className="bg-[#676262] ms-3 p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem] max-sm:h-[5rem] max-sm:text-4xl max-sm:w-[30rem]" value={dev} onChange={(e) => setDev(e.target.value)}>
                <option value="None">None</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Fullstack Developer">Fullstack Developer</option>
                <option value="Android Developer">Android Developer</option>
                <option value="Cross Platform Mobile Developer">Cross Platform Mobile Developer</option>
                <option value="IOS Developer">IOS Developer</option>
              </select>
            </div>
          
            <div className="w-[52rem] pt-8 ps-10 max-sm:ms-5 max-sm:pt-16 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-9 ">
              <label htmlFor="ui" className="font-mono text-2xl max-sm:text-6xl"> Designer : </label>
              <select name="uiux" id="stack" className="bg-[#676262] p-2 rounded-md text-center font-[Montserrat] font-bold tracking-wider w-[15rem] max-sm:h-[5rem] max-sm:text-4xl max-sm:w-[30rem]" value={ui} onChange={(e) => setUi(e.target.value)}>
                <option value="None">None</option>
                <option value="Canva">Canva</option>
                <option value="Figma">Figma</option>
                <option value="Adobe Photoshop">Adobe Photoshop</option>
              </select>
            </div>
          </div>
          <button className="w-[35rem] h-[6rem] ms-24 my-12 text-2xl text-white bg-black border border-white rounded hover:bg-white hover:text-black focus:outline-none max-sm:ms-60 max-sm:h-[9rem] max-sm:my-24 max-sm:text-5xl " type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact