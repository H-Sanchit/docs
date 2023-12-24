import React from "react";
import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

const page = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-neutral-600">
        <Background />
        <Foreground />
      </div>
    </>
  );
};

export default page;
