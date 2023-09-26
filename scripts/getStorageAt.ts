import { ethers } from "hardhat";
const hre = require("hardhat");

const getStorageAt = async (networkURL, contractAddress, slotNumber) => {
  const provider = new ethers.getDefaultProvider(networkURL);

  try {
    const storageValue = await provider.getStorageAt(contractAddress, slotNumber);
    console.log(`Contract Address\t: ${contractAddress}`);
    console.log(`Slot #Number\t\t: #${slotNumber}`);
    console.log(`Network RPC\t\t: ${networkURL}`);
    console.log(`Response Slot Number #${slotNumber}\t: 0x${storageValue}`);
  } catch (error) {
    console.error("Error:", error);
  }
};

async function main() {
  const contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";
  const slotNumber = 0;
  const networkURL = hre.network.config.url;

  await getStorageAt(networkURL, contractAddress, slotNumber);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});