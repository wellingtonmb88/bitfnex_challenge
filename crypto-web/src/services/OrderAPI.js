const axios = require("axios");

const url = "https://api.bitfinex.com/v2";

export const getOrderList = async () => {
  const response = await axios(`${url}/book/tBTCUSD/P0`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
  });
  return response;
};
