import React from "react";

const Adminlayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      {/* side bar here */}
      <div>
        {/* header here */}
        {children}
        {/* footer here */}
      </div>
    </div>
  );
};

export default Adminlayout;
//write code to check if user is an admin or not
