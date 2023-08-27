import { BsBookshelf } from "react-icons/bs";

const currentTime = Math.floor(new Date().getTime() / 1000);

const LatestTransaction = ({ tran }) => {

  return (
    <>
      {tran && (
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="flex flex-row">
            <BsBookshelf className="text-white bg-secondary w-[50px] h-[50px] p-2 rounded-md" />
            <div className="flex flex-col ml-2 cursor-pointer w-24">
              <div className="text-linkBlue font-bold">{tran.hash.substring(0, 10)}...</div>
              {/* <div className="text-dimWhite">
                {parseInt(currentTime) - parseInt(blockInfo.timestamp)} secs ago
              </div> */}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-dimWhite">
              From{" "}
              <span className="text-linkBlue font-bold cursor-pointer">
                {tran.from.substring(0, 10)}...
              </span>
            </div>
            <div className="text-dimWhite">
              To <span className="text-linkBlue font-bold">{tran.to.substring(0, 10)}...</span>
            </div>
          </div>

          {/* <div className="items-center w-24">
            <div className="text-dimWhite border border-dimWhite p-1 rounded-md">
              {tran.gasPrice._hex.slice(0,7)}
            </div>
          </div> */}
        </div>
      )}
    </>
  );
};

export default LatestTransaction;
