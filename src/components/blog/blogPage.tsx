"use client";
import React from "react";
import { Element } from "react-scroll";
import { Explore } from "./explore";
import { Blog } from "@/types";
import EachBlog from "./eachBlog";

interface Props {
  blogs?: Blog[];
}

const BlogPage = ({ blogs }: Props) => {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available</p>;
  }

  return (
    <Element name="blogPage">
      <div>
        <div className="py-4 flex justify-center pt-36 text-center">
          <Explore />
        </div>
        <div id="blogpage" className="grid md:grid-cols-3 gap-4 p-3">
          {blogs.map((blog) => (
            <EachBlog data={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default BlogPage;
