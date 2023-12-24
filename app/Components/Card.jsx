"use client";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      className="flex-shrink-0 bg-zinc-500 h-72 w-60 rounded-[45px] relative px-7 py-10 text-zinc-900 drop-shadow-2xl overflow-hidden"
    >
      <FaFileAlt />
      <p className="mt-5 font-light">{data.title}</p>
      <div className="footer absolute bottom-0 w-full  left-0  ">
        <div className="py-3 px-7 flex items-center justify-between">
          <p className=" font-light">{data.fileSize}</p>
          {data.close ? <IoIosCloseCircle /> : <IoCloudDownload />}
        </div>
        {data.tags.isopen && (
          <div
            className={`tag ${
              data.tags.tagColor === "green" ? "bg-green-600" : "bg-blue-600"
            } h-12 w-full flex items-center justify-center`}
          >
            <h4 className="text-white font-semibold">{data.tags.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
