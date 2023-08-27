import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTransactions } from "../../services/alchemyApi";
import LatestTransaction from "./LatestTransaction";

const LatestTransactions = ({ blockNumber }) => {
  const [tranInfo, setTranInfo] = useState(null);

  useEffect(() => {
    const getTrans = async (blockno) => {
      const response = await getTransactions(blockno);
      setTranInfo(response);
    };
    getTrans(blockNumber);
  }, []);

  const trans = tranInfo ? tranInfo.transactions.slice(-6).reverse() : null;

  return (
    <div className="w-full flex flex-col border border-[#273343] rounded-md md:ml-4 md:mt-0 mt-4">
      <div className="text-white font-bold  p-4">Latest Transactions</div>
      <div className="border-t border-[#273343]" />
      <div className="w-full p-4">
        {tranInfo &&
          trans.map((tran) => (
            <LatestTransaction tran={tran} />
          ), [])}
      </div>
    </div>
  );
};

export default LatestTransactions;
