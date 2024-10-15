import React from "react";
import SearchBar from "./searchBar";
import { Button } from "../ui/button";
import Categories from "./categories";
import { ArrowLeft, Ghost, HeartHandshake, House } from "lucide-react";
import Link from "next/link";

const BlogHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 text-white z-50 bg-black/30 backdrop-blur-md  flex items-center justify-between px-5 py-1">
      <div>
        <Link href={"/hero"}>
          <div className="text-lg font-bold bg-white text-black px-2 py-2 rounded-md shadow-lg">
            <div className="py-2 px-2 rounded-full bg-black"></div>
          </div>
        </Link>
      </div>

      <div className="flex ">
        <SearchBar />
      </div>

      <div>
        <Categories />
      </div>
      <div className="flex items-center gap-1">
        <HeartHandshake width={18} />
        <p className="text-sm hover:underline">Donations</p>
      </div>
    </div>
  );
};

export default BlogHeader;
