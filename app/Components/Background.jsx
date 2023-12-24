import React from "react";

const Background = () => {
  return (
    <div className="h-full w-full z-[2] fixed">
      <div className=" absolute text-3xl flex w-full mt-10 h-[10vh] justify-center items-center text-zinc-300">
        Documents.
      </div>
      <h1 className=" text-[13vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-thin font-sans text-zinc-400">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
