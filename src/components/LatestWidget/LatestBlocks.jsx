import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LatestBlock from "./LatestBlock";

const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}


const LatestBlocks = () => {
  const blockNumber = useSelector((state) => state.block.blockNumber);

  return (
    <div className="w-full flex flex-col border border-[#273343] rounded-md">
      <div className="text-white font-bold  p-4">Latest Blocks</div>
      <div className="border-t border-[#273343]" />
      <div className="w-full p-4">
      {blockNumber && range(blockNumber - 5, blockNumber).reverse().map((no) => (
        <LatestBlock blockNumber={no} key={no}/>
      ))}
      </div>
    </div>
  );
};

export default LatestBlocks;
