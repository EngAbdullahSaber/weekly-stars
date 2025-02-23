import React from "react";
import dialog from "../../assets/images/pk-events/container.png";
import close from "../../assets/icons/close.png";
import { useTranslation } from "react-i18next";

const Dialog = ({ isOpen, closeDialog, description }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black   bg-opacity-50 flex items-center justify-center z-[999999]">
      <div className="bg-[#694aff] rounded-xl   h-[90%] relative dialog  shadow-lg">
        <img
          src={dialog}
          alt="dialog"
          className="inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <p
            className="font-lemon w-[90%] scrollbar-hidden overflow-y-auto text-[#240f3f] md:text-xl sm:text-xl font-normal md:leading-[38.32px] xs:leading-[28.32px] text-center px-4 py-2"
            style={{
              maxHeight: "60%", // Limit the height to prevent overflow
              overflowY: "auto", // Add scroll if the content is too long
              whiteSpace: "normal", // Ensure text wraps
            }}
          >
            {description}
          </p>
        </div>
        <p className="absolute bottom-6 font-lemon left-1/2 transform -translate-x-1/2 text-[#240f3f] md:text-4xl xs:text-3xl font-normal text-center">
          {t("Rules")}
        </p>
        <button onClick={closeDialog} className="absolute top-3 right-[3%]">
          <img src={close} alt="close" className="w-8" />
        </button>
      </div>
    </div>
  );
};

export default Dialog;
