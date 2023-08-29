import LatestBlocks from "./LatestWidget/LatestBlocks";
import LatestTransactions from "./LatestWidget/LatestTransactions";
import { useSelector } from "react-redux";

const LatestInfo = () => {
  const blockNumber = useSelector((state) => state.block.blockNumber);

  return (
    <div className="md:px-52 px-6 p-4 flex md:flex-row flex-col">
        <LatestBlocks />
        {blockNumber && <LatestTransactions blockNumber={blockNumber} />}
    </div>
  );
};

export default LatestInfo;
