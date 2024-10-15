import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="">
      <form className="flex">
        <Input
          placeholder="Search blogs..."
          className="text-white rounded-none w-80 rounded-l-full h-8 bg-transparent placeholder:text-white"
        />
        <Button className="bg-black rounded-none h-8 rounded-r-full ">
          <Search className="outline-none" width={16} />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
