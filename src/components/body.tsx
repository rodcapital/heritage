import React from "react";
import { Button } from "./ui/button";

const Body = () => {
  return (
    <div id="top" className="flex flex-col p-16 h-full">
      <h1 className="text-8xl font-extrabold">
        Hello! <br /> I'm Heritage
      </h1>

      <div className="my-7 flex gap-4">
        <Button
          variant={"ghost"}
          className="rounded-full border-2 border-black hover:bg-black hover:text-white"
        >
          Copywriter
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border-2 border-black  hover:bg-black hover:text-white"
        >
          Ghostwriter
        </Button>
        <Button
          variant={"ghost"}
          className="rounded-full border-2 border-black  hover:bg-black hover:text-white"
        >
          Essay writer
        </Button>
      </div>

      <h1 className="font-semibold text-2xl my-3">
        Let's Scribble your dreams to life <br /> with a touch of creativity and
        excellence.
      </h1>
    </div>
  );
};

export default Body;
