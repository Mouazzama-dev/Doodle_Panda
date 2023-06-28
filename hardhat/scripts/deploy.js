const hre = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("hi");

  // // Deploy the contract
  // const doodlePandas = await hre.ethers.getContractFactory("DoodlePandas");
  // console.log("hello")
  // const contract = await doodlePandas.deploy("DoodlePanda", "dP", "ipfs://QmSQjYuFHmMJNqjqrcGUyyUz55bPyXgVJLpkazR6qvSRsr/");
  // console.log("Deploying DoodlePandas contract...");

  // // Estimate the gas cost for deployment
  // // const estimatedGas = await contract.estimateGas();
  // // console.log("Gas estimate for deployment:", estimatedGas.toString());

  // // Wait for deployment
  // await contract.deployed();
  // console.log("DoodlePandas contract deployed at:", contract.address);

  // // Wait for 30 seconds
  // await sleep(30 * 1000);

  // Verify the contract on etherscan
  await hre.run("verify:verify", {
    address: "0xD0748135723Dff04FC438295A450D8d350dc4EED",
    constructorArguments: ["DoodlePanda", "dP", "ipfs://QmSQjYuFHmMJNqjqrcGUyyUz55bPyXgVJLpkazR6qvSRsr/"],
  });

  console.log("Contract verification completed.");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
