import React, { useEffect, useState } from "react";
import Design from "./Design";
import { fetchBonusData } from "../../services/api"; // Import your API functions
const Rewards = () => {
  const [bonusData, setBonusData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data1 = await fetchBonusData();
        setBonusData(data1.data);
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
      <Design bonusData={bonusData} />
    </div>
  );
};

export default Rewards;
