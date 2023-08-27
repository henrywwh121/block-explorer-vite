import { coinGeko } from "./configs/config";

const getPrice = async (token) => {
  const response = await coinGeko.request({
    url: `/coins/${token}`,
    method: "GET",
  });

  const binance = response.data.tickers[0];
  const bprice = binance.last;
  const cbtcprice = binance.converted_last.btc;
  const marketCap = response.data.market_data.market_cap.usd;
  
  console.log(response)

  return { bprice, cbtcprice, marketCap };
};

export { getPrice };
