import Navbar from "@/pages/Navbar"
import  Gallery_Card  from "@/pages/Gallery_Card"
import '../app/globals.css'


const Gallery = () => {
  return (
    <>
      {/* <Navbar/> */}
      <video width="100%" height="100%"  autoPlay muted loop className="z-[-1] xl:right-0 xl:top-0 brightness-50">
        <source src=" video/highway.mp4" type="video/mp4"></source>
      </video> 
      <div className=" text-center text-white absolute xl:top-48 xl:bottom-16 xl:right-40 xl:left-40 max-sm:top-10   ">
        <h1 className="font-bold text-6xl max-sm:">Welcome To IdeaLab</h1>
        <p className="text-2xl">Unlock your creative potential at IDEALab</p>
        <a className="p-14 text-6xl hover:text-orange-500 max-sm:hidden "href="#first" > ↓</a>
      </div >  
      <div className="flex justify-center items-center bg-[#111827] max-sm:mt-5 max-sm:flex-col"  id="first">
        <Gallery_Card image="/idea_g/1.jpeg" title="Demonstrations" />  
        <Gallery_Card image="/idea_g/2.jpeg " title="Workshops"/>
      </div> 
      <div className="flex justify-center items-center bg-[#111827] max-sm:mt-5 max-sm:flex-col"> 
        <Gallery_Card image="/idea_g/13.jpeg" title="Memories"/>
        <Gallery_Card image="/idea_g/events_logo/3dtech.JPG" title="Posters"/>  
      </div>
    </>
  )
}

export default Gallery