const hre = require("hardhat");

async function main() {
  const ShikshaverseCollegeNFT = await hre.ethers.getContractFactory("ShikshaverseCollegeNFT");
  const shikshaverseCollegeNFT = await ShikshaverseCollegeNFT.deploy("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266","0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]);

  await shikshaverseCollegeNFT.deployed();

  console.log("ShikshaverseCollegeNFT Contract deployed to:", shikshaverseCollegeNFT.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
