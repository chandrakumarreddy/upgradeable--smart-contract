const hre = require("hardhat");

async function main() {
  const BoxV2 = await hre.ethers.getContractFactory("BoxV2");
  const boxv2 = await hre.upgrades.upgradeProxy(
    "0x147b93e105f1c369d536fc2608a176f316c2619b",
    BoxV2
  );
  await boxv2.deployed();

  console.log("Box deployed to:", boxv2.address);
}

main();
