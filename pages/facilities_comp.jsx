// import Image from "next/legacy/image"
// import { useState } from 'react';

// const Services_comp = (props) => {
//   return (
//   <div className="p-10 text-white hover:bg-[#1B255E] w-96 h-96 bg-[#151721] max-sm:w-[23rem] max-sm:h-[450px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center "> 
//     <Image className="max-sm:w-[5rem] max-sm:h-[5rem]"
//       src={props.img_path}
//       alt="Can't Load"
//       width="70px"
//       height="70px"
//     />

//     <span className="font-bold py-2 block text-2xl max-sm:text-3xl max-sm:py-2  ">{props.title}</span>
//     <span className=" py-2 block text-lg max-sm:text-2xl max-sm:text-center max-sm:leading-normal max-sm:my-6 ">{props.description}</span>

//   </div>
//   )
// }
"use client"
// export default Services_comp
""
import Image from "next/legacy/image";
import { useState } from "react";

const Facilities_comp = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative p-10 text-white hover:bg-[#1B255E] w-96 h-96 bg-[#151721] max-sm:w-[23rem] max-sm:h-[450px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center transition-all duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        className="max-sm:w-[5rem] max-sm:h-[5rem]"
        src={props.img_path}
        alt="Can't Load"
        width="70"
        height="70"
      />

      <span className="font-bold py-2 block text-2xl max-sm:text-3xl max-sm:py-2">
        {props.title}
      </span>
      <span className="py-2 block text-lg max-sm:text-2xl max-sm:text-center max-sm:leading-normal max-sm:my-6">
        {props.description}
      </span>

      {isHovered && props.hover_img_path && (
        <div className="absolute bottom-full mt-5 left-0 w-96 h-96 bg-black bg-opacity-70 p-1">
          <Image
            src={props.hover_img_path}
            alt="Large Hover Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default Facilities_comp;
