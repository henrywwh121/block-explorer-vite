import { SiEthereum } from "react-icons/si";
import { BsGlobe2, BsServer, BsClockFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { getPrice } from "../../../services/coingekoApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockNumber } from "../../../features/block/blockSlice";

const BaseInfoDetail = () => {
  const dispatch = useDispatch();
  const [ethData, setEthData] = useState();
  const blockNumber = useSelector((state) => state.block.blockNumber)
  const isLoading = useSelector((state) => state.block.isLoading)
  const error = useSelector((state) => state.block.error)

  useEffect(() => {
    const getEthData = async () => {
      const res = await getPrice("ethereum");
      setEthData(res);
    };
    getEthData();
  }, []);

  useEffect(()=> {
    dispatch(fetchBlockNumber())
  },[dispatch])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className={`flex flex-row items-center py-2`}>
        <SiEthereum className="text-white w-[30px] h-[30px]" />
        <div className="flex flex-col ml-3">
          <div className="text-dimWhite text-sm">ETHER PRICE</div>
          {ethData && (
            <h3 className="text-white">
              ${ethData.bprice}
              <span className="text-dimWhite"> @{ethData.cbtcprice} BTC</span>
            </h3>
          )}
        </div>
      </div>

      <div className={`flex flex-row items-center py-2`}>
        <BsServer className="text-white w-[30px] h-[30px]" />
        <div className="flex flex-col ml-3">
          <div className="text-dimWhite text-sm">MARKET CAP</div>
          {ethData && <h3 className="text-white">${ethData.marketCap}</h3>}
        </div>
      </div>

      <div className={`flex flex-row items-center py-2`}>
        <BsGlobe2 className="text-white w-[30px] h-[30px]" />
        <div className="flex flex-col ml-3">
          <div className="text-dimWhite text-sm">TRANSACTIONS</div>
          <h3 className="text-white">099</h3>
        </div>
      </div>

      <div className={`flex flex-row items-center py-2`}>
        <BsClockFill className="text-white w-[30px] h-[30px]" />
        <div className="flex flex-col ml-3">
          <div className="text-dimWhite text-sm">LATEST BLOCK</div>
          {!isLoading && <h3 className="text-white">{blockNumber}</h3>}
        </div>
      </div>
    </div>
  );
};

export default BaseInfoDetail;
