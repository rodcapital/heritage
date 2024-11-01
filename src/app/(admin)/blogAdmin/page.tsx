import AddBlogs from "@/components/addBlogs";
import BlogPage from "@/components/blog/blogPage";
import EachBlog from "@/components/blog/eachBlog";
import { Blog } from "@/types";
import React from "react";

const fetchBlogs = async () => {
  const response = await fetch("https://dummyjson.com/posts?per_page=30");
  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }
  const data = await response.json();
  return data.posts?.map((p: any) => {
    return {
      id: p.id,
      title: p.title,
      des: p.body,
      image: "",
      category: p.tags,
    };
  });
};

const Page = async () => {
  const blogs = await fetchBlogs();
  return (
    <div className="">
      <AddBlogs />
      <div>
        {/* <BlogPage blogs={blogs} /> */}
        {/* <EachBlog data={blog} /> */}
      </div>
    </div>
  );
};

export default Page;
