import { useParams } from "react-router-dom";
import { getTransactionReceipt } from "../../services/alchemyApi";
import { useEffect, useState } from "react";
import { Utils } from "alchemy-sdk";

const TransactionItem = ({ name, data, customClass }) => {
  return (
    <div className={`w-full flex flex-row ${customClass}`}>
      <div className="text-dimWhite flex-[0.3]">{name}:</div>
      <div className="text-white flex-[0.7]">{data}</div>
    </div>
  );
};

const TransactionDetail = () => {
  const { tranno } = useParams();
  const [TranInfo, setTranInfo] = useState(null);

  useEffect(() => {
    const TranInfo = async (tranNumber) => {
      const res = await getTransactionReceipt(tranNumber);
      setTranInfo(res);
    };
    TranInfo(tranno);
  }, []);

  console.log(TranInfo);

  return (
    <div className="md:px-52 px-6 py-4">
      <h1 className="text-white text-lg">Transaction Details</h1>
      <div className="border-t border-[#273343] mt-4" />

      {TranInfo && (
        <div className="border border-[#273343] mt-4 flex flex-col p-3 rounded-md">
          <TransactionItem name="Transaction Hash" data={tranno} />
          <TransactionItem
            name="Block Hash"
            data={TranInfo.blockHash}
            customClass="mt-2"
          />
          <TransactionItem
            name="status"
            data={TranInfo.status}
            customClass="mt-2"
          />
          <TransactionItem
            name="Block Number"
            data={TranInfo.blockNumber}
            customClass="mt-2"
          />
          <TransactionItem
            name="Transaction Index"
            data={TranInfo.transactionIndex}
            customClass="mt-2"
          />
          <div className="border-t border-[#273343] mt-4" />
          <TransactionItem
            name="From"
            data={TranInfo.from}
            customClass="mt-2"
          />
          <TransactionItem name="To" data={TranInfo.to} customClass="mt-2" />
          <div className="border-t border-[#273343] mt-4" />
          <TransactionItem
            name="Gas Used"
            data={TranInfo.gasUsed._hex}
            customClass="mt-2"
          />
          <TransactionItem
            name="Gas Priced"
            data={TranInfo.effectiveGasPrice._hex}
            customClass="mt-2"
          />
          <TransactionItem
            name="Confirmations"
            data={TranInfo.confirmations}
            customClass="mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default TransactionDetail;
