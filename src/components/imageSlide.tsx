"use client";
import Image from "next/image";
import React, { useState } from "react";
interface Prod {
  id: number;
  img: string;
}
const ImageSlide = () => {
  const [image, setImage] = useState<Prod>(content[0]); //tells the state it's holding an object

  return (
    <div className="flex items-center gap-2">
      <div>
        {content.map((i) => (
          <img
            onClick={() => {
              setImage(i);
            }}
            key={i.id}
            height={100}
            width={100}
            src={i.img}
            alt=""
          />
        ))}
      </div>
      <div>
        <img src={image.img} width={500} height={400} alt="" />
      </div>
    </div>
  );
};

export default ImageSlide;

const content = [
  {
    id: 1,
    img: `/images/book-library-with-open-textbook.jpg`,
  },
  {
    id: 2,
    img: `/images/businessman-video-conference-call-while-working-from-home-coronavirus-pandemic.jpg`,
  },
  {
    id: 3,
    img: `/images/lovely-friends-looking-laptop-indoors.jpg`,
  },
];
