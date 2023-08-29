import { alchemy } from "./configs/config";
import { Utils } from "alchemy-sdk";

const getBlockNumber = async () => {
  const response = await alchemy.core.getBlockNumber();
  return response;
};

const getBlock = async (blockNumber) => {
  const response = await alchemy.core.getBlock(Utils.hexlify(blockNumber));
  return response;
};

const getTransactions = async (blockNumber) => {
  const response = await alchemy.core.getBlockWithTransactions(Utils.hexlify(blockNumber));
  return response;
};

const getTransactionReceipt = async (tranno) => {
  const response = await alchemy.core.getTransactionReceipt(tranno);
  return response;
}

export { getBlockNumber, getBlock, getTransactions, getTransactionReceipt };
