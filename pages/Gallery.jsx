import Navbar from "@/pages/Navbar"
import  Gallery_Card  from "@/pages/Gallery_Card"
import '../app/globals.css'


const Gallery = () => {
  return (
    <>
      {/* <Navbar/> */}
      <video width="100%" height="100%"  autoPlay muted loop className="z-[-1] right-0 top-0 brightness-50">
        <source src=" video/highway.mp4" type="video/mp4"></source>
      </video> 
      <div className=" text-center text-white absolute top-48 bottom-16 right-40 left-40">
        <h1 className="font-bold text-6xl max-sm:">Welcome To IdeaLab</h1>
        <p className="text-2xl">Unlock your creative potential at IDEALab</p>
        <a className="p-14 text-6xl hover:text-orange-500 "href="#first" > ↓</a>
      </div >  
      <div className="flex  bg-[#111827]"  id="first">
        <Gallery_Card image="/idea_g/demon.jpeg" title="Demonstrations" />  
        <Gallery_Card image="/idea_g/workshop_f.jpeg " title="Workshops"/>
      </div> 
      <div className="flex bg-[#111827]"> 
        <Gallery_Card image="/idea_g/memories.jpeg" title="Memories"/>
        <Gallery_Card image="/idea_g/events_logo/3dtech.JPG" title="Posters"/>  
      </div>
    </>
  )
}

export default Gallery