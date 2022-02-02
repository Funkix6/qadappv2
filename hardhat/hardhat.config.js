/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { task } = require('hardhat/config');

require('@nomiclabs/hardhat-waffle');

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts) {
    console.log(account.address);
  }
});

task("balances", "Prints the list of account's balances ", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts) {
    console.log(`Addresses : ${account.address} balance : ${await account.getBalance()}`);
  }
});

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/8owlyqzgImzMfrMbabBHLHuz_ugr49Ac',
      accounts: ['6673a3e5c417c77fe74013d9eb0465e4caa2d9ef838a07713d996c5f3c3c178c']
    }
  }
};
