import React, { useEffect, useState } from "react";
import activeTabBar from "../../assets/images/pk-events/activeTabBar.png";
import tabBar from "../../assets/images/pk-events/tabBar.webp";
import back from "../../assets/icons/ic--outline-arrow-back.png";

import title from "../../assets/images/pk-events/title.webp";
import background from "../../assets/images/pk-events/reward_bg (2).webp";
import container from "../../assets/images/pk-events/container.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Design({ bonusData }) {
  const [activeTab1, setActiveTab1] = useState("tab3");
  const { t } = useTranslation();
  const renderTabContents = (data, tabId) => {
    if (activeTab1 === "tab3") {
      return (
        <div className="tab-panel flex flex-col justify-center items-center text-center">
          <div className="topRewards pb-32  mb-14 mx-auto rounded-3xl relative overflow-hidden">
            {/* Background Image */}
            <img
              src={background}
              alt="rewards"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-[2%] right-[22%]">
              <div className="relative inline-block cursor-pointer">
                <img
                  src={activeTabBar}
                  alt="rewards"
                  className="w-[220px] h-auto"
                />
                <p className="absolute font-lemon top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-normal leading-[48.32px] text-center">
                  {t("Rewards")}
                </p>
              </div>
            </div>
            <div className=" relative mt-24 flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute font-lemon top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 1")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_king?.top_1.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px]  md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" relative  flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute w-full font-lemon top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 2")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_king?.top_2.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px]  md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" relative  flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute w-full font-lemon top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 3")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_king?.top_3.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px] md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab1 === "tab4") {
      return (
        <div className="tab-panel flex flex-col justify-center items-center py-5 text-center">
          <div className="topRewards pb-32  my-14 mx-auto rounded-3xl relative overflow-hidden">
            {/* Background Image */}
            <img
              src={background}
              alt="rewards"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-[2%] right-[22%]">
              <div className="relative inline-block cursor-pointer">
                <img
                  src={activeTabBar}
                  alt="rewards"
                  className="w-[220px] h-auto"
                />
                <p className="absolute font-lemon top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-normal leading-[48.32px] text-center">
                  {t("Rewards")}
                </p>
              </div>
            </div>
            <div className=" relative mt-24 flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute font-lemon top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 1")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_room?.top_1.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px]  md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" relative  flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute w-full font-lemon top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 2")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_room?.top_2.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px]  md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" relative  flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute w-full font-lemon top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 3")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_room?.top_3.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px] md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab1 === "tab5") {
      return (
        <div className="tab-panel flex flex-col justify-center items-center py-5 text-center">
          <div className="topRewards pb-32  my-14 mx-auto rounded-3xl relative overflow-hidden">
            {/* Background Image */}
            <img
              src={background}
              alt="rewards"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-[2%] right-[22%]">
              <div className="relative inline-block cursor-pointer">
                <img
                  src={activeTabBar}
                  alt="rewards"
                  className="w-[220px] h-auto"
                />
                <p className="absolute font-lemon top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-normal leading-[48.32px] text-center">
                  {t("Rewards")}
                </p>
              </div>
            </div>
            <div className=" relative mt-24 flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute font-lemon top-1/2 left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 1")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_star?.top_1.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px]  md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" relative  flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute w-full font-lemon top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 2")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_star?.top_2.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px]  md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" relative  flex flex-col justify-center items-center gap-3 mx-auto w-auto h-auto">
              <div className="absolute top-[5%] right-[30%]">
                <div className="relative inline-block cursor-pointer">
                  <img src={title} alt="rewards" className="w-[150px] h-auto" />
                  <p className="absolute w-full font-lemon top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-normal leading-[48.32px] text-center">
                    {t("Top 3")}
                  </p>
                </div>
              </div>{" "}
              <div className="flex mt-16 mx-auto w-[90%]  flex-wrap flex-row justify-between items-center">
                {bonusData?.pk_star?.top_3.map((item, index) => (
                  <div
                    key={index} // Add a unique key for each item
                    className="relative mx-auto w-[30%] inline-block cursor-pointer"
                  >
                    <img
                      src={container} // Ensure `container` is defined
                      alt="rewards"
                      className="w-[140px] mx-auto h-[140px]"
                    />
                    <img
                      className="absolute top-7 left-4 md:w-[80px] xs:w-[65px] xs:h-[65px] md:h-[80px] rounded-full mx-auto " // Adjust class for proper positioning
                      src={
                        "https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75"
                      } // Use `item.image` directly
                      alt={item.name} // Add alt text for accessibility
                    />
                    <p className="font-lemon text-white text-[0.5rem] font-light  text-center">
                      {item.name} // Access the item name correctly
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-row justify-center h-full items-center">
      <div className="">
        <div className=" w-full flex justify-start items-center my-2 mb-4 ">
          {" "}
          <Link to={"/"} className="p-1 rounded-full bg-[#1e0f6b]">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              color="#fff"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"
              />
            </svg>
          </Link>
        </div>
        <div className="flex relative w-[100%] mx-auto  justify-around">
          {[
            {
              id: "tab3",
              label: "PK King",
              imgActive: activeTabBar,
              imgInactive: tabBar,
            },
            {
              id: "tab4",
              label: "PK Room",
              imgActive: activeTabBar,
              imgInactive: tabBar,
            },
            {
              id: "tab5",
              label: "PK Star",
              imgActive: activeTabBar,
              imgInactive: tabBar,
            },
          ].map((tab) => (
            <div
              key={tab.id}
              className={` inline-block cursor-pointer ${
                activeTab1 == tab.id ? "active" : ""
              } ${tab.id === "tab2" ? " " : "relative"}`}
              onClick={() => setActiveTab1(tab.id)}
            >
              <img
                src={activeTab1 == tab.id ? tab.imgActive : tab.imgInactive}
                alt="rules"
                className="w-[400px] h-auto"
              />
              <p className="absolute w-full top-1/2 font-lemon left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 xs:-translate-y-[50%] text-white  lg:text-xl md:text-base sm:text-sm   font-normal leading-[56.16px] text-center">
                {t(tab.label)}
              </p>
            </div>
          ))}
        </div>
        {renderTabContents()}
      </div>{" "}
    </div>
  );
}

export default Design;
