import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <Image
          height={100}
          width={100}
          src={"/images/searchglass-removebg-preview.png"}
          alt=""
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl">Sorry, you have no new notifications yet</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default page;
