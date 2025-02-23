import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const TimerComponent = ({
  initialTime = { day: 0, hour: 0, minute: 0, second: 0 },
}) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  console.log(remainingTime);
  const { t } = useTranslation();

  useEffect(() => {
    // Function to decrement the timer
    const decrementTime = () => {
      setRemainingTime((prevTime) => {
        let { day, hour, minute, second } = prevTime;

        if (second > 0) {
          second -= 1;
        } else {
          if (minute > 0) {
            minute -= 1;
            second = 59; // Reset seconds to 59
          } else {
            if (hour > 0) {
              hour -= 1;
              minute = 59; // Reset minutes to 59
              second = 59; // Reset seconds to 59
            } else {
              if (day > 0) {
                day -= 1;
                hour = 23; // Reset hours to 23
                minute = 59; // Reset minutes to 59
                second = 59; // Reset seconds to 59
              }
            }
          }
        }

        // If all time is zero, stop the timer
        if (day === 0 && hour === 0 && minute === 0 && second === 0) {
          clearInterval(interval);
        }

        return { day, hour, minute, second };
      });
    };

    const interval = setInterval(decrementTime, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, []);

  const renderTimer = () => {
    return (
      <div className="relative w-fit mx-auto">
        <div className="flex flex-row gap-2 mx-auto relative py-4 px-2 z-20 justify-center w-auto sm:w-[601px] sm:h-[100px] h-auto rounded-full">
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2 justify-center">
              <span className="text-[#FFFFFFCC] numbers font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[43px] h-[44px] rounded-[5px]">
                {remainingTime.day}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              {t("Days")}
            </span>
          </div>
          <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal">
            :
          </span>
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2 justify-center">
              <span className="text-[#FFFFFFCC] numbers font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[43px] h-[44px] rounded-[5px]">
                {remainingTime.hour}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              {t("Hours")}
            </span>
          </div>
          <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal">
            :
          </span>
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2 justify-center">
              <span className="text-[#FFFFFFCC] numbers font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[43px] h-[44px] rounded-[5px]">
                {remainingTime.minute}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              {t("Minutes")}
            </span>
          </div>
          <span className="text-[#FFFFFFCC] font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal">
            :
          </span>
          <div className="timer-item pt-[4px]">
            <div className="flex flex-row gap-2 justify-center">
              <span className="text-[#FFFFFFCC] numbers font-inter font-semibold text-[30px] leading-[36.31px] tracking-normal shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[43px] h-[44px] rounded-[5px]">
                {remainingTime.second}
              </span>
            </div>
            <span className="mt-[6px] text-[#FFFFFFCC] font-inter font-medium text-[17px] leading-[20.57px] tracking-normal">
              {t("Seconds")}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return renderTimer();
};

export default TimerComponent;
