"use client";
import React from "react";
import { Button } from "./ui/button";
import { animate, motion } from "framer-motion";

const Body = () => {
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <div id="top" className="flex flex-col p-16 h-full">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
        variants={lineVariants}
        style={{ display: "inline-block", marginRight: "5px" }}
        className="text-8xl font-extrabold"
      >
        Hello!
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        variants={lineVariants}
        transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
        style={{ display: "inline-block", marginRight: "5px" }}
        className="text-8xl font-extrabold"
      >
        I'm Heritage
      </motion.h1>

      <div className="my-7 flex gap-4">
        <Button
          variant={"ghost"}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-full border-2 border-black hover:bg-black hover:text-white"
        >
          Copywriter
        </Button>
        <Button
          variant={"ghost"}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-full border-2 border-black  hover:bg-black hover:text-white"
        >
          Ghostwriter
        </Button>
        <Button
          variant={"ghost"}
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded-full border-2 border-black  hover:bg-black hover:text-white"
        >
          Essay writer
        </Button>
      </div>

      <motion.h3 className="font-semibold text-2xl my-3">
        Let's Scribble your dreams to life <br /> with a touch of creativity and
        excellence.
      </motion.h3>
    </div>
  );
};

export default Body;
