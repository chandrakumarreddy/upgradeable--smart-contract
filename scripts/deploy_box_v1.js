const hre = require("hardhat");

async function main() {
  const Box = await hre.ethers.getContractFactory("Box");
  const box = await hre.upgrades.deployProxy(Box, [40], {
    initializer: "initialize",
  });
  await box.deployed();

  console.log("Box deployed to:", box.address);
}

main();
