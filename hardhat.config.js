require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");

dotenv.config({path: __dirname + '/.env'});
const {POLYGON_EDGE_URL,PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.9",
  networks :{
    hardhat:{},
    polygon_edge:{
      url : POLYGON_EDGE_URL,
      accounts : [`0x${PRIVATE_KEY}`],
      chainId : 100
    }
  }
};
