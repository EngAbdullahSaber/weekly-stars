import React, { useState, useEffect } from "react";
import Dialog from "./Dialog";
import DialogButton from "../../assets/images/pk-events/button_dialog_2.png";
import mainBackground from "../../assets/images/pk-events/pk_tab_back.webp";
import activeTabBar from "../../assets/images/pk-events/activeTabBar.png";
import tabBar from "../../assets/images/pk-events/tabBar.webp";
import ring from "../../assets/icons/pk_1st_icon.png";
import ring2 from "../../assets/icons/pk_2nd_icon.png";
import ring3 from "../../assets/icons/pk_3rd_icon.png";
import rectangle from "../../assets/images/pk-events/rectangle2.webp";
import id from "../../assets/images/pk-events/id.webp";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import TimerComponent from "./TimerComponent";
const Design = ({ weeklyData1, weeklyData2, weeklyData3, topData }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeTab1, setActiveTab1] = useState("tab3");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const { t } = useTranslation();
  const initialTime = { day: 2, hour: 3, minute: 30, second: 0 };
  // Update the timer every second

  const renderTabContent = () => {
    if (activeTab === "tab1") {
      return (
        <div className="tab-panel flex flex-row justify-center items-center text-center">
          <div className="flex relative mx-auto w-[55%]  flex-row justify-around items-center">
            {topData?.winner_previous_event?.PK_king.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between items-center w-[${
                  index === 1 ? "40%" : "25%"
                }]`}
              >
                <img
                  src={`https://storage.googleapis.com/top-star-bucket/${item.image}`}
                  alt="avatar"
                  className={`${
                    index === 1 ? "w-[100px]" : "w-[60px]"
                  } rounded-full`}
                />
                <img
                  src={index === 1 ? ring : index === 2 ? ring2 : ring3}
                  alt="background"
                  className={`${index === 1 ? "w-[100px]" : "w-[60px]"}`}
                />
                <img
                  src={rectangle}
                  alt="background"
                  className={`${index === 1 ? "max-w-[55%]" : "max-w-[40%]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activeTab === "tab2") {
      return (
        <div className="tab-panel flex flex-row justify-center items-center text-center">
          <div className="flex relative mx-auto md:w-[55%] xs:w-full flex-row justify-around items-center">
            {topData?.winner_previous_event?.Room_pk.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between items-center w-[${
                  index === 1 ? "40%" : "25%"
                }]`}
              >
                <img
                  src={`https://storage.googleapis.com/top-star-bucket/${item.avatar}`}
                  alt="avatar"
                  className={`${
                    index === 1 ? "sm:w-[200px] xs:w-[150px]" : "w-[60px]"
                  } rounded-full`}
                />
                <img
                  src={index === 1 ? ring : index === 2 ? ring2 : ring3}
                  alt="background"
                  className={`${index === 1 ? "w-[100px]" : "w-[60px]"}`}
                />
                <img
                  src={rectangle}
                  alt="background"
                  className={`${index === 1 ? "max-w-[55%]" : "max-w-[40%]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (activeTab === "tab3") {
      return (
        <div className="tab-panel flex flex-row justify-center items-center py-5 text-center">
          <div className="flex relative mx-auto w-[55%] mt-20 flex-row justify-around items-center">
            {topData?.winner_previous_event?.start_pk.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col justify-between items-center w-[${
                  index === 1 ? "40%" : "25%"
                }]`}
              >
                <img
                  src={`https://storage.googleapis.com/top-star-bucket/${item.image}`}
                  alt="avatar"
                  className={`${
                    index === 1 ? "w-[100px]" : "w-[60px]"
                  } rounded-full`}
                />
                <img
                  src={index === 1 ? ring : index === 2 ? ring2 : ring3}
                  alt="background"
                  className={`${index === 1 ? "w-[100px]" : "w-[60px]"}`}
                />
                <img
                  src={rectangle}
                  alt="background"
                  className={`${index === 1 ? "max-w-[55%]" : "max-w-[40%]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  const renderTabContents = (data, tabId) => {
    return (
      <div className="tab-panel flex flex-col justify-center items-center text-center">
        {[1].map((top) => (
          <div
            key={top}
            className="topEvents   mb-14 w-full rounded-3xl relative overflow-hidden"
          >
            {" "}
            <img
              src={mainBackground}
              alt="rewards"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative pt-20 pb-24 my-14 mt-16 flex flex-col justify-center items-center  mx-auto sm:w-[663px] w-auto h-auto">
              {data?.top.map((item, index) => (
                <div className="user xs:w-[95%]" key={item.id}>
                  {/* Ensure each item has a unique 'key' prop */}
                  <div className="flex flex-row justify-around px-5 items-center h-full">
                    <div className="w-[30%] flex flex-row justify-around items-center">
                      {index < 3 ? (
                        <img
                          src={index === 0 ? ring : index === 1 ? ring2 : ring3}
                          alt="rules"
                          className="w-6 mb-4"
                        />
                      ) : (
                        <p className="text-shadow-[2px_2px_5px_rgba(0,0,0,0.3)]  mb-4 font-lemon text-yellow-400 text-[20px] font-normal">
                          {index + 1}
                        </p>
                      )}
                      <img
                        src={`https://dash-tail.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser.1bff0bca.png&w=128&q=75`}
                        alt="rules"
                        className="w-9 rounded-full  mb-4"
                      />
                    </div>
                    <div className="md:w-[62%] xs:w-[95%] flex flex-row justify-around items-center">
                      <div className="flex w-[55%] flex-col justify-center items-center">
                        <p className="w-full font-lemon text-white text-[15px] font-normal text-center">
                          {item.name}
                        </p>
                        <img src={id} alt="rules" className="w-9" />
                      </div>
                      <p className="text-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] w-[35%] px-3  text-white font-mono font-semibold sm:text-[20px] xs:text-[13px]  leading-[54.32px] text-right">
                        {parseInt(item.totalGiftNum)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTabContent1 = () => {
    if (activeTab1 === "tab3") {
      return renderTabContents(weeklyData1, "tab3");
    } else if (activeTab1 === "tab4") {
      return renderTabContents(weeklyData2, "tab4");
    } else if (activeTab1 === "tab5") {
      return renderTabContents(weeklyData3, "tab5");
    }
  };

  return (
    <div>
      <Dialog
        isOpen={isDialogOpen}
        closeDialog={closeDialog}
        description={topData?.pk_event?.description}
      />
      <div className="relative w-full main">
        {/* <img src={mainBackground} alt="parent-img" className="w-full h-[60%]" /> */}
        <div className="absolute top-[10%] right-0">
          <div
            onClick={openDialog}
            className="relative inline-block cursor-pointer"
          >
            <img
              src={DialogButton}
              alt="rules"
              className=" w-[120px] md:[170px] h-auto"
            />
            <p className="absolute font-lemon top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 text-white text-lg md:text-3xl font-normal leading-[48.32px] text-center">
              {t("Rules")}
            </p>
          </div>
        </div>
        <div className="absolute top-[37%] right-0">
          <div
            onClick={openDialog}
            className="relative inline-block cursor-pointer"
          >
            <img
              src={DialogButton}
              alt="rewards"
              className=" w-[120px] md:[170px] h-auto"
            />
            <Link to="/rewards">
              <p className="absolute font-lemon top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 text-white text-lg md:text-3xl font-normal leading-[48.32px] text-center">
                {t("Rewards")}
              </p>
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="tabs">
        <div className="flex top-4 relative flex-wrap sm:w-[60%] xs:w-[100%] mx-auto space-x-8 justify-around">
          {[
            {
              id: "tab1",
              label: "Yesterday PK King",
              imgActive: activeTabBar,
              imgInactive: tabBar,
            },
            {
              id: "tab2",
              label: "Yesterday PK Room",
              imgActive: activeTabBar,
              imgInactive: tabBar,
            },
            {
              id: "tab3",
              label: "Yesterday PK Star",
              imgActive: activeTabBar,
              imgInactive: tabBar,
            },
          ].map((tab) => (
            <div
              key={tab.id}
              className={` inline-block  relative w-[45%]  cursor-pointer ${
                activeTab == tab.id ? "active" : ""
              } ${tab.id === "tab3" ? " sm:-top-10 xs:-top-4 z-50" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <img
                src={activeTab == tab.id ? tab.imgActive : tab.imgInactive}
                alt="rules"
                className="w-[400px] h-auto"
              />
              <p className="absolute w-full top-1/2 font-lemon left-1/2 transform -translate-x-1/2 sm:-translate-y-1/2 xs:-translate-y-[85%] text-white lg:text-xl md:text-base sm:text-sm xs:text-[0.6rem] font-normal  text-center">
                {t(tab.label)}
              </p>
            </div>
          ))}
        </div>
        {renderTabContent()}
      </div>
      {topData?.pk_event?.remainingTime ? (
        <TimerComponent initialTime={topData?.pk_event?.remainingTime} />
      ) : null}{" "}
      <div className="">
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
              className={` inline-block cursor-pointer  ${
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
        {renderTabContent1()}
      </div>{" "}
    </div>
  );
};

export default Design;
// token
//responsive
