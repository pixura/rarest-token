const { ethers, upgrades } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Token = await ethers.getContractFactory("SuperRareToken");

  const proxy = await upgrades.deployProxy(Token, ['0xd5a498bbc6d21e4e1cdbb8fec58e3ecd7124fb43'], {initializer: 'init'});
  // const ProxyContractFactory = await ethers.getContractFactory("SuperRareTokenProxy");
  
  // const token = await ethers.


  await proxy.deployed();

  // console.log("Token address:", token.address);
  console.log("Token address:", proxy.address);
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });