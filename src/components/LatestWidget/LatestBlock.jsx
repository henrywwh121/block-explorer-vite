import { useEffect, useState } from "react";
import { BsBox } from "react-icons/bs";
import { getBlock } from "../../services/alchemyApi";

const currentTime = Math.floor(new Date().getTime() / 1000);

const LatestBlock = ({ blockNumber }) => {
  const [blockInfo, setBlockInfo] = useState(null);

  useEffect(() => {
    const BlockInfo = async (blockNumber) => {
      const res = await getBlock(blockNumber);
      setBlockInfo(res);
    };
    BlockInfo(blockNumber);
  }, []);

  return (
    <>
      {blockInfo && (
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-row">
            <BsBox className="text-white bg-secondary w-[50px] h-[50px] p-2 rounded-md" />
            <div className="flex flex-col ml-2 cursor-pointer w-24">
              <div className="text-linkBlue font-bold">{blockNumber}</div>
              <div className="text-dimWhite">
                {parseInt(currentTime) - parseInt(blockInfo.timestamp)} secs ago
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-dimWhite">
              Fee Recipient{" "}
              <span className="text-linkBlue font-bold cursor-pointer">
                {blockInfo.miner.substring(0, 10)}...
              </span>
            </div>
            <div className="text-dimWhite">
              {blockInfo.transactions.length} txns
            </div>
          </div>

          {/* <div className="items-center w-24">
            <div className="text-dimWhite border border-dimWhite p-1 rounded-md">
              {blockInfo.gasUsed._hex.slice(0,7)}
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default LatestBlock;
