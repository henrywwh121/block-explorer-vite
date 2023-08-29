import { useParams } from "react-router-dom";
import { getBlock } from "../../services/alchemyApi";
import { useEffect, useState } from "react";
import { Utils } from "alchemy-sdk";

const BlockItem = ({ name, data, customClass }) => {
  return (
    <div className={`w-full flex flex-row ${customClass}`}>
      <div className="text-dimWhite flex-[0.3]">{name}:</div>
      <div className="text-white flex-[0.7]">{data}</div>
    </div>
  );
};

const Block = () => {
  const { blockno } = useParams();
  const [blockInfo, setBlockInfo] = useState(null);

  useEffect(() => {
    const BlockInfo = async (blockNumber) => {
      const res = await getBlock(blockNumber);
      setBlockInfo(res);
    };
    BlockInfo(parseInt(blockno));
  }, []);

  return (
    <div className="md:px-52 px-6 py-4">
      <h1 className="text-white text-lg">
        Block <span className="text-dimWhite">#{blockno}</span>
      </h1>
      <div className="border-t border-[#273343] mt-4" />

      {blockInfo && (
        <div className="border border-[#273343] mt-4 flex flex-col p-3 rounded-md">
          <BlockItem name="Block Height" data={blockno} />
          <BlockItem
            name="TimeStamp"
            data={blockInfo.timestamp}
            customClass="mt-2"
          />
          <BlockItem
            name="Transactions"
            data={blockInfo.transactions.length}
            customClass="mt-2"
          />
          <div className="border-t border-[#273343] mt-4" />

          <BlockItem
            name="Fee Recipient"
            data={blockInfo.miner}
            customClass="mt-2"
          />
          <div className="border-t border-[#273343] mt-4" />
          <BlockItem
            name="Gas Used"
            data={blockInfo.gasUsed._hex}
            customClass="mt-2"
          />
          <BlockItem
            name="Gas Limited"
            data={blockInfo.gasLimit._hex}
            customClass="mt-2"
          />
          <BlockItem
            name="Base/Gas"
            data={Utils.formatEther(blockInfo.baseFeePerGas._hex) + "ETH"}
            customClass="mt-2"
          />
          <div className="border-t border-[#273343] mt-4" />

          <BlockItem name="Hash" data={blockInfo.hash} customClass="mt-2" />
          <BlockItem name="Parent Hash" data={blockInfo.parentHash
} customClass="mt-2" />
          <BlockItem name="Nonce" data={blockInfo.nonce
} customClass="mt-2" />
        </div>
      )}
    </div>
  );
};

export default Block;
