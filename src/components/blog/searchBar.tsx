import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="border rounded-full">
      <form className="flex">
        <Button className="bg-transparent hover:bg-transparent rounded-none h-8  rounded-l-full">
          <Search className="outline-none" width={16} />
        </Button>
        <Input
          placeholder="Search blogs..."
          className="text-white rounded-none w-[600px]  h-8 bg-transparent placeholder:text-white"
        />
      </form>
    </div>
  );
};

export default SearchBar;
