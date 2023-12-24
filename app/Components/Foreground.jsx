"use client";
import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  let data = [
    {
      title: "Hello this is working I think",
      fileSize: "3.2mb",
      close: false,
      tags: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      title: "Hello this is working I think",
      fileSize: "3.2mb",
      close: false,
      tags: { isopen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      title: "Hello this is working I think",
      fileSize: "3.2mb",
      close: false,
      tags: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      title: "Hello this is working I think",
      fileSize: "3.2mb",
      close: false,
      tags: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className=" h-screen w-screen z-[3] top-0 left-0 fixed flex flex-wrap gap-5 p-5"
    >
      {data.map((item, index) => (
        <Card data={item} key={index} refrence={ref} />
      ))}
    </div>
  );
};

export default Foreground;
