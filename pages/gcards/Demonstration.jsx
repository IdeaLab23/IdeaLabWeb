import * as React from "react";
import "yet-another-react-lightbox/styles.css";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";

 function Demon() {
  const [index, setIndex] = React.useState(-1);
  const slus = [
    {
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },
    {
      src: "/idea_g/memories.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },
    {
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },
    {
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    },{
      src: "/idea_g/rahul.jpeg",
      alt: "image 1",
      width: 3840 ,
      height: 2560,
    }
  ];
  return (
    <>

      <PhotoAlbum
        layout="rows"
        photos= {slus}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}

      />

      <Lightbox
        index={index}
        slides={ slus}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={NextJsImage}
      />
    </>
  );
}

export default Demon