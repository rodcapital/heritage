"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/textGenerateEffect";

// const Text = () => {
//   const words = `Let's Scribble your dreams to life with a touch of creativity and
//         excellence.`;
//   return (
//     <div>
//       <TextGenerateEffect duration={1000} filter={true} words={words} />
//     </div>
//   );
// };

// export default Text;

const words = `Let's Scribble your dreams to life with a touch of creativity and
    excellence.`;

export default function TextGenerateEffectDemo() {
  return (
    <TextGenerateEffect
      duration={2}
      className="w-1/3"
      filter={false}
      words={words}
    />
  );
}
