import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DegenTokenModule = buildModule("DegenTokenModule", (d) => {
  const degenToken = d.contract("DegenToken");

  return { degenToken };
});

export default DegenTokenModule;