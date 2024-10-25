import hre from "hardhat";

async function main() {
  const DEPLOYED_DEGEN_CONTRACT =
    "0x7888f4bD17factoryF5679a4D1ced221518dDbeD8f86304";

  const myAccount = "0xac9535B43e7f652344A158FaB8e44472A1070299";
  const signer = await hre.ethers.getSigner(myAccount);

    const degenContractInstance = await hre.ethers.getContractAt(
      "DegenToken",
      DEPLOYED_DEGEN_CONTRACT
    );
  
     // Starting scripting

  console.log(
    "############################ Deploying degen ####################"

    
  );

  


}