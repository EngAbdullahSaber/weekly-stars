import React, { useState } from "react";
import dialog from "../assets/luck_bg 1.png";
import close from "../assets/close.png";
const Dialog = ({ isOpen, closeDialog, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#DFBD69] rounded-xl relative  shadow-lg">
        <img src={dialog} alt="dialog" />
        <p
          className="absolute font-lemon  w-[70%] top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2
         text-white md:text-3xl sm:text-xl font-normal md:leading-[38.32px] xs:leading-[28.32px] text-center"
        >
          {description}
        </p>
        <button
          onClick={closeDialog}
          className="absolute sm:bottom-36 bottom-36 xs:bottom-12 sm:left-[46%] left-[42%]"
        >
          <img src={close} alt="dialog" />
        </button>
      </div>
    </div>
  );
};

export default Dialog;
