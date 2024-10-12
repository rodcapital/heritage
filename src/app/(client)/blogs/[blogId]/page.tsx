import React from "react";

interface Props {
  params: {
    blogId: string;
  };
}

const page = ({ params: { blogId } }: Props) => {
  return <div>blog {blogId}</div>;
};

export default page;
