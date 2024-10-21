import React from "react";
import SearchBar from "./searchBar";
import { Button } from "../ui/button";
import Categories from "./categories";
import { ArrowLeft, Ghost, HeartHandshake, House } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BlogHeader = () => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 w-full text-white  bg-black/30 backdrop-blur-md flex items-center justify-between px-5 py-3">
      <div>
        <Link href={"/"}>
          <div className="flex items-center  text-2xl font-bold">
            <Image
              height={50}
              width={50}
              alt=""
              src={`/images/rect1-removebg-preview.png`}
            />
          </div>
        </Link>
      </div>

      <SearchBar />

      <div className="flex h-full gap-10">
        <Categories />

        <div className="flex items-center gap-1">
          <HeartHandshake width={18} />
          <p className="text-sm hover:underline">Donations</p>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
