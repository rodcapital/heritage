"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight, Dot } from "lucide-react";
import { Badge } from "../ui/badge";
import { Blog } from "@/types";
import { getImageUrls } from "@/actions";

interface Props {
  data: Blog;
}

const EachBlog = ({ data: blog }: Props) => {
  const [image, setImage] = useState<{
    name: string;
    path: string;
    height: number;
    width: number;
  }>();
  useEffect(() => {
    getImageUrls(blog.title).then((data) => {
      setImage(data[0]);
    });
  }, [blog]);
  return (
    <div>
      <Card key={blog.id} className="h-full">
        <CardContent className="flex flex-col h-full p-3">
          <div className="h-[280px]">
            <Image
              src={image?.path || "/images/default.jpg"} // Fallback image
              alt={image?.name || ""}
              className="object-cover py-2 h-full w-full"
              width={image?.width ?? 200}
              height={image?.height ?? 200}
            />
          </div>
          <div className="flex flex-1 flex-col gap-3 py-1">
            <div className="flex items-center text-sm">
              <Badge className="bg-purple-300 hover:bg-purple-300 font-light text-black">
                {blog.category || "General"}
              </Badge>
              <Dot width={12} />
              <p>{new Date(Date.now()).getDate() || "Just now"}</p>
            </div>

            <div className="flex flex-col flex-1 h-full gap-4">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="line-clamp-2">{blog.des}</p>
            </div>

            <Link href={`/blogs/${blog.id}`} className="flex justify-end my-4">
              <Button className="flex bg-purple-800 rounded-full text-sm items-center gap-1 dark:text-white hover:bg-purple-900  hover:-translate-x-2 hover:transform duration-1000">
                <span>Read more</span>
                <ChevronRight width={12} />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EachBlog;
