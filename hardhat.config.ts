import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'dotenv/config'

require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  defaultNetwork: "swisstronik",
  networks: {
    swisstronik: {
      url: process.env.SWISSTRONIK,
      accounts: [process.env.PRIVATE_KEY]
    },
    sepolia: {
      url: process.env.ETHEREUM_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY]
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};

export default config;
