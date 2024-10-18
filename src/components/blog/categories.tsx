import React from "react";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuContent } from "@radix-ui/react-dropdown-menu";
import { AlignJustify, List } from "lucide-react";

const Categories = () => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="hover:underline text-sm flex items-center gap-2">
            <AlignJustify width={10} />
            <span>Categories</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 z-50 bg-black/30 backdrop-blur-md "
          align="start"
        >
          <DropdownMenuLabel></DropdownMenuLabel>

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Education</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Arts & Entertainment</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Sports</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Science & Technology</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Categories;
