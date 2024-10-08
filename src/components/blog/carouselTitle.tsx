import React from "react";
import { Button } from "../ui/button";
import { Ghost } from "lucide-react";

const CarouselTitle = () => {
  return (
    <div className="flex gap-3 flex-col text-center font-bold text-black">
      <h1 className="text-6xl">
        Immerse Yourself in a Vast World <br />
        Where Stories Reside
      </h1>
      <div>
        <Button variant={"ghost"}>View Blogs</Button>
      </div>
    </div>
  );
};

export default CarouselTitle;
