import React, { useState, useEffect } from "react";
import Dialog from "./Dialog";
import img1 from "../assets/1 (6).jpeg";
import img2 from "../assets/1 (8).png";
import img3 from "../assets/1 (2).png";
import img4 from "../assets/1 (1).png";
import img5 from "../assets/1 (3).png";
import img6 from "../assets/1 (4).png";

import diamoned from "../assets/icon_background_diamond 2.png";
import layout from "../assets/local_turntalbe_top_bg 1.png";
import layout2 from "../assets/bons (5).png";
import ring from "../assets/ring1 (1).png";
import ring2 from "../assets/ring1 (2).png";
import ring3 from "../assets/ring1 (3).png";
import number from "../assets/number (1).png";
import number2 from "../assets/number (2).png";
import number3 from "../assets/number (3).png";
import background1 from "../assets/Vector.png";
import background2 from "../assets/img_social_group_family_ranking_bg 2.png";

import room_level from "../assets/room_level_34 1.png";
import bouns1 from "../assets/bons (4).png";

import { fetchWeeklyData, fetchBonusData, fetchWeeklyData1 } from "./api"; // Import your API functions
const Home = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [weeklyData, setWeeklyData] = useState(null);
  const [weeklyData1, setWeeklyData1] = useState(null);
  const [bonusData, setBonusData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  console.log(weeklyData1?.user);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (activeTab === "tab1") {
          const data = await fetchWeeklyData();
          setWeeklyData(data.data);
          const data1 = await fetchWeeklyData1();
          setWeeklyData1(data1.data);
        } else if (activeTab === "tab2") {
          const data = await fetchBonusData();
          setBonusData(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);
  const renderTimer = () => {
    // Check if weeklyData and weeklyData.weekly_event.remainingTime exist
    if (
      !weeklyData ||
      !weeklyData.weekly_event ||
      !weeklyData.weekly_event.remainingTime
    ) {
      return null; // Return null or a loading/placeholder if data is not available
    }

    const { day, hour, minute, second } = weeklyData.weekly_event.remainingTime;

    return (
      <div className="relative w-fit mx-auto">
        <div className="absolute z-[-1]  left-7 sm:w-[601px] w-auto h-[81px] rounded-[50px] bg-gradient-to-r from-[#DCB451E6] to-[#926F34E6]"></div>
        <div className="flex sm:flex-row flex-col gap-2 mx-auto relative left-9 py-4 px-2 top-[17px] z-20 justify-center w-auto sm:w-[601px] sm:h-[100px] h-auto  rounded-full border-4 border-[#AE8625] bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#D2AC47]">
          {/* Days */}

          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2">
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {Math.floor(day / 10)} {/* Tens place */}
              </span>
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {day % 10} {/* Ones place */}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              Days
            </span>
          </div>
          <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal">
            :
          </span>

          {/* Hours */}
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2">
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {Math.floor(hour / 10)} {/* Tens place */}
              </span>
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {hour % 10} {/* Ones place */}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              Hours
            </span>
          </div>
          <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal">
            :
          </span>

          {/* Minutes */}
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2">
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {Math.floor(minute / 10)} {/* Tens place */}
              </span>
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {minute % 10} {/* Ones place */}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              Minutes
            </span>
          </div>
          <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal">
            :
          </span>

          {/* Seconds */}
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2">
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {Math.floor(second / 10)} {/* Tens place */}
              </span>
              <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[38px] h-[44px] rounded-[5px] bg-gradient-to-b from-[#F9F292B3] via-[#E0AA3EB3] to-[#F9F398B3]">
                {second % 10} {/* Ones place */}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              Seconds
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderRewards = () => (
    <div className="rewards pt-4 flex sm:flex-row flex-col  justify-around items-center">
      {weeklyData?.weekly_event?.gifts.map((reward, index) => (
        <div key={reward.id} className="reward">
          <img
            src={`https://storage.googleapis.com/top-star-bucket${reward.show_img}`}
            alt={reward.name}
          />
          <div className="reward-title text-black font-inter font-medium text-[30px] leading-[36.31px] tracking-normal">
            {reward.name}
            <div className="flex flex-row justify-between items-center gap-2">
              <div className="text-black w-[53px] h-[36px] font-inter font-medium text-[30px] leading-[36.31px] tracking-normal">
                {reward.price}
              </div>
              <img src={diamoned} alt="diamond" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRanking = () => (
    <div className="flex flex-row justify-between my-1 w-full bg-gradient-to-r from-[rgba(223,189,105,0.9)] to-[rgba(146,111,52,0.9)]">
      <div className="flex flex-row justify-start items-center">
        <p className="w-[68px] h-[68px] text-[#F6CB00] font-inter font-normal text-[35px] leading-[42.36px] tracking-normal">
          {weeklyData1?.user.rank || "4"}{" "}
          {/* Assuming rank is available, fallback to 'N/A' */}
        </p>
        <img
          src={
            `https://storage.googleapis.com/top-star-bucket${weeklyData1?.user.avatar}` ||
            "default-avatar.jpg"
          } // Use the user avatar or a fallback image
          alt="avatar"
          className="w-[68px] h-[68px] rounded-full"
        />
        <div className="flex-col flex ml-2">
          <p className="text-black font-inter font-normal text-[37px] leading-[44.78px] tracking-normal">
            {weeklyData1?.user.name}
          </p>
          <img
            src={room_level}
            alt="room level"
            className="w-[78px] h-[39px]"
          />{" "}
          {/* Assuming room level image is defined */}
        </div>
      </div>
      <div className="flex flex-row justify-end gap-2 items-center">
        <p className="text-black font-inter font-normal text-[27px] leading-[32.68px] tracking-normal">
          {weeklyData1?.user.totalGiftNum || "0"}{" "}
          {/* Display the total gift number, default to '0' */}
        </p>
        <img src={diamoned} alt="diamond" />{" "}
        {/* Assuming the diamond icon is defined */}
      </div>
    </div>
  );

  const renderTabContent = () => {
    if (activeTab === "tab1") {
      return (
        <div className="tab-panel py-5 block text-center">
          {renderTimer()}
          <div className="sm:w-[684px] p-1 w-auto mt-8 mx-auto h-auto bg-gradient-to-r from-[#AE8625]  via-[#D2AC47] to-[#EDC967] border-4 border-[#FBE4AC] rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            {renderRewards()}
            <div className="sm:w-[663px] sm:block hidden w-auto h-auto my-4 mx-auto relative bg-gradient-to-r from-[rgba(223,189,105,0.9)] to-[rgba(146,111,52,0.9)] border-3 border-solid border-[#FFFFFF] rounded-[50px]">
              <div className=" relative inline-block cursor-pointer">
                <img src={layout} alt="rules" className="w-full h-auto" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2 text-white text-[45px] font-medium leading-[54.32px] text-center">
                  Weekly Star
                </p>
              </div>
              {weeklyData1?.data?.top.length > 0 ? (
                <div className="flex relative flex-row justify-around items-center">
                  {[
                    { img: ring, number: number },
                    { img: ring3, number: number3, background: background1 },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    >
                      {item.background && (
                        <img
                          src={item.background}
                          alt="background"
                          className="absolute bottom-14 z-0 w-[590px] max-w-[590px]"
                        />
                      )}
                    </div>
                  ))}
                  <img
                    src={background2}
                    alt="background"
                    className="absolute left-20 top-0 z-0 w-[167px] h-[167px]"
                  />
                </div>
              ) : (
                <div className="flex relative flex-row justify-around items-center">
                  {[
                    { img: ring, number: number },
                    { img: ring3, number: number3, background: background1 },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    >
                      <img
                        src={item.img}
                        alt="ring"
                        className={`w-[${index === 1 ? "239px" : "167px"}] h-[${
                          index === 1 ? "239px" : "167px"
                        }] ${index === 1 ? "z-10" : ""}`}
                      />
                      <img
                        src={item.number}
                        alt="number"
                        className="w-[65px] h-[63px]"
                      />
                      {item.background && (
                        <img
                          src={item.background}
                          alt="background"
                          className="absolute bottom-14 z-0 w-[590px] max-w-[590px]"
                        />
                      )}
                    </div>
                  ))}
                  <img
                    src={background2}
                    alt="background"
                    className="absolute left-20 top-0 z-0 w-[167px] h-[167px]"
                  />
                </div>
              )}
            </div>
            <div className="sm:w-[663px] sm:hidden block w-auto h-auto my-4 mx-auto relative bg-gradient-to-r from-[rgba(223,189,105,0.9)] to-[rgba(146,111,52,0.9)] border-3 border-solid border-[#FFFFFF] rounded-[50px]">
              <div className=" relative inline-block cursor-pointer">
                <img src={layout} alt="rules" className="w-full h-auto" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2 text-white text-[45px] font-medium leading-[54.32px] text-center">
                  Weekly Star
                </p>
              </div>
              {weeklyData1?.data?.top.length > 0 ? (
                <div className="flex relative flex-col justify-around items-center">
                  {[
                    { img: ring3, number: number3, background: background1 },
                    { img: ring, number: number },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="flex relative flex-col justify-around items-center">
                  {[
                    { img: ring3, number: number3, background: background1 },
                    { img: ring, number: number },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    >
                      <img
                        src={item.img}
                        alt="ring"
                        className={`w-[${index === 1 ? "239px" : "167px"}] h-[${
                          index === 1 ? "239px" : "167px"
                        }] ${index === 1 ? "z-10" : ""}`}
                      />
                      <img
                        src={item.number}
                        alt="number"
                        className="w-[65px] h-[63px]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="sm:w-[663px] w-auto border-4 relative p-[1px] h-auto py-8 mx-auto border-5 border-solid border-[#926F34] bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] to-[#EDC967] rounded-[50px] flex flex-col justify-center items-center">
              {/* <img
                src={background2}
                alt="background"
                className="absolute z-0 w-[513px] h-[531px]"
              /> */}

              {renderRanking()}
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "tab2") {
      return (
        <div className="tab-panel block text-center">
          <div className="sm:w-[684px] w-auto  mt-8 mx-auto h-auto p-1 bg-gradient-to-r from-[#AE8625]  via-[#D2AC47] to-[#EDC967] border-4 border-[#FBE4AC] rounded-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="sm:w-[663px] sm:block hidden w-auto h-auto my-4 mx-auto relative bg-gradient-to-r from-[rgba(223,189,105,0.9)] to-[rgba(146,111,52,0.9)] border-3 border-solid border-[#FFFFFF] rounded-[50px]">
              <div className=" relative inline-block cursor-pointer">
                <img src={layout} alt="rules" className="w-full h-auto" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2 text-white text-[45px] font-medium leading-[54.32px] text-center">
                  Weekly Star
                </p>
              </div>
              {weeklyData1?.data?.top.length > 0 ? (
                <div className="flex relative flex-row justify-around items-center">
                  {[
                    { img: ring, number: number },
                    { img: ring3, number: number3, background: background1 },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    >
                      {item.background && (
                        <img
                          src={item.background}
                          alt="background"
                          className="absolute bottom-14 z-0 w-[590px] max-w-[590px]"
                        />
                      )}
                    </div>
                  ))}
                  <img
                    src={background2}
                    alt="background"
                    className="absolute left-20 top-0 z-0 w-[167px] h-[167px]"
                  />
                </div>
              ) : (
                <div className="flex relative flex-row justify-around items-center">
                  {[
                    { img: ring, number: number },
                    { img: ring3, number: number3, background: background1 },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    >
                      <img
                        src={item.img}
                        alt="ring"
                        className={`w-[${index === 1 ? "239px" : "167px"}] h-[${
                          index === 1 ? "239px" : "167px"
                        }] ${index === 1 ? "z-10" : ""}`}
                      />
                      <img
                        src={item.number}
                        alt="number"
                        className="w-[65px] h-[63px]"
                      />
                      {item.background && (
                        <img
                          src={item.background}
                          alt="background"
                          className="absolute bottom-14 z-0 w-[590px] max-w-[590px]"
                        />
                      )}
                    </div>
                  ))}
                  <img
                    src={background2}
                    alt="background"
                    className="absolute left-20 top-0 z-0 w-[167px] h-[167px]"
                  />
                </div>
              )}
            </div>
            <div className="sm:w-[663px] sm:hidden block w-auto h-auto my-4 mx-auto relative bg-gradient-to-r from-[rgba(223,189,105,0.9)] to-[rgba(146,111,52,0.9)] border-3 border-solid border-[#FFFFFF] rounded-[50px]">
              <div className=" relative inline-block cursor-pointer">
                <img src={layout} alt="rules" className="w-full h-auto" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full -translate-y-1/2 text-white text-[45px] font-medium leading-[54.32px] text-center">
                  Weekly Star
                </p>
              </div>
              {weeklyData1?.data?.top.length > 0 ? (
                <div className="flex relative flex-col justify-around items-center">
                  {[
                    { img: ring3, number: number3, background: background1 },
                    { img: ring, number: number },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    ></div>
                  ))}
                </div>
              ) : (
                <div className="flex relative flex-col justify-around items-center">
                  {[
                    { img: ring3, number: number3, background: background1 },
                    { img: ring, number: number },
                    { img: ring2, number: number2 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`w-[${
                        index === 1 ? "40%" : "30%"
                      }] flex flex-col justify-between items-center`}
                    >
                      <img
                        src={item.img}
                        alt="ring"
                        className={`w-[${index === 1 ? "239px" : "167px"}] h-[${
                          index === 1 ? "239px" : "167px"
                        }] ${index === 1 ? "z-10" : ""}`}
                      />
                      <img
                        src={item.number}
                        alt="number"
                        className="w-[65px] h-[63px]"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            {[1, 2, 3].map((top) => (
              <div
                key={top}
                className="border-4 my-14 border-white mx-auto relative rounded-3xl sm:w-[663px] w-auto h-auto"
              >
                <div className="relative inline-block -top-10 cursor-pointer">
                  <img src={layout2} alt="rules" className="w-full h-auto" />
                  <p className="absolute text-shadow-[2px_2px_5px_rgba(0,0,0,0.3)] top-1/2 left-1/2 transform -translate-x-1/2 w-full font-lemon -translate-y-1/2 text-white text-[27px] font-normal leading-[54.32px] text-center">
                    TOP {top}
                  </p>
                </div>

                {/* Render items based on the dynamic API data */}
                <div className="flex flex-row flex-wrap justify-around items-center">
                  {bonusData?.data[`top_${top}`].map((item, index) => (
                    <div
                      key={index}
                      className="sm:w-[40%] flex flex-col justify-center items-center w-full relative"
                    >
                      <img
                        src={bouns1}
                        alt="bouns"
                        className="max-w-[258px] h-[245px]"
                      />
                      <img
                        src={item.image}
                        alt="bouns"
                        className="absolute top-[43%] left-[19%] max-w-[175px] h-[175px] transform sm:-translate-x-4 translate-x-[4.3rem] sm:-translate-y-1/2 -translate-y-[46%]"
                      />

                      <p className="font-medium text-[27px] leading-[32.68px] text-white w-full">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Dialog
        isOpen={isDialogOpen}
        closeDialog={closeDialog}
        description={weeklyData?.weekly_event?.description}
      />
      <div className="relative w-full">
        <img src={img1} alt="parent-img" className="w-full h-auto" />
        <div className="absolute top-[10%] right-0">
          <div
            onClick={openDialog}
            className="relative inline-block cursor-pointer"
          >
            <img src={img2} alt="rules" className="w-full h-auto" />
            <p className="absolute font-lemon top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 text-white text-3xl font-normal leading-[48.32px] text-center">
              Rules
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex space-x-8 justify-around">
          {[
            {
              id: "tab1",
              label: "This Week",
              imgActive: img3,
              imgInactive: img5,
            },
            { id: "tab2", label: "Bonus", imgActive: img6, imgInactive: img4 },
          ].map((tab) => (
            <div
              key={tab.id}
              className={`relative inline-block cursor-pointer ${
                activeTab == tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <img
                src={activeTab == tab.id ? tab.imgActive : tab.imgInactive}
                alt="rules"
                className="w-full h-auto"
              />
              <p className="absolute w-full top-1/2 font-lemon left-1/2 transform -translate-x-1/2 sm:-translate-y-[112%] xs:-translate-y-[85%] text-white sm:text-4xl xs:text-[1.7rem] font-normal leading-[56.16px] text-center">
                {tab.label}
              </p>
            </div>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Home;
