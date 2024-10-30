import Sidebar from "@/components/sidebar";
import React from "react";

const Adminlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid grid-cols-6">
      <Sidebar />

      {/* splitting the adminpage */}
      <div className="col-span-5">{children}</div>
    </div>
  );
};

export default Adminlayout;
//write code to check if user is an admin or not
