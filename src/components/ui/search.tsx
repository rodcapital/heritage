import { Search } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";

const Find = () => {
  return (
    <form action="">
      <div className="flex items-center border border-1 px-3 rounded-lg">
        <Search width={18} />
        <Input
          type="text"
          placeholder="Search"
          className="border-none outline-none bg-transparent "
        />
      </div>
    </form>
  );
};

export default Find;
