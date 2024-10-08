import React from "react";

const Adminlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default Adminlayout;
//write code to check if user is an admin or not
