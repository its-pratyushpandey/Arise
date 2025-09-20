"use client";

import dynamic from "next/dynamic";
const ClerkHeader = dynamic(() => import("@/components/ClerkHeader"), { ssr: false });



const MainLayout = ({ children }) => {
  return (
    <>
      <ClerkHeader />
      <div className="container mx-auto mt-24 mb-20">{children}</div>
    </>
  );
};

export default MainLayout;
