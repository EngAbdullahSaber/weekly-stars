import React, { useState, useEffect } from "react";

import {
  fetchWeeklyData1,
  fetchWeeklyData2,
  fetchWeeklyData3,
  fetchTops,
  fetchBonusData,
} from "../../services/api"; // Import your API functions
import Design from "./Design";
const Home = () => {
  const [weeklyData1, setWeeklyData1] = useState(null);
  const [weeklyData2, setWeeklyData2] = useState(null);
  const [weeklyData3, setWeeklyData3] = useState(null);
  const [topData, setTopData] = useState(null);
  const [bonusData, setBonusData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data1 = await fetchWeeklyData1();
        setWeeklyData1(data1.data);
        const data2 = await fetchWeeklyData2();
        setWeeklyData2(data2.data);
        const data3 = await fetchWeeklyData3();
        setWeeklyData3(data3.data);
        const data4 = await fetchTops();
        setTopData(data4.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Design
        weeklyData1={weeklyData1}
        weeklyData2={weeklyData2}
        weeklyData3={weeklyData3}
        topData={topData}
      />
    </div>
  );
};

export default Home;
// there is two end points want to replace them
// structure of image
// token
//responsive
