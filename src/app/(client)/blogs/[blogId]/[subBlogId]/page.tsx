import React from "react";

interface Props {
  params: {
    subBlogId: string;
  };
}

const page = ({ params: { subBlogId } }: Props) => {
  return <div>blog {subBlogId}</div>;
};

export default page;
