import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const JobText = () => {
  return (
    <div className=" h-screen  flex">
      {/* <div className="space-y-2 p-3">
        <h2 className="text-3xl font-bold">Job Requests</h2>
        <p className="text-sm">View all your job requests here</p>
      </div> */}
      <div className="flex items-center justify-center">
        <Image
          height={100}
          width={100}
          src={"/images/searchglass-removebg-preview.png"}
          alt=""
        />

        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-3xl">Sorry, couldn't find any jobs here</h1>
          <p>Jobs will be shown when a request is made</p>
        </div>
      </div>
    </div>
  );
};

export default JobText;
