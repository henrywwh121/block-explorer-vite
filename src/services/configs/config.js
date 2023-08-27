import axios from "axios";
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export const coinGeko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});
