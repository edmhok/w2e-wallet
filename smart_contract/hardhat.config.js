
require ('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/EIBdVmnkeNEY__PotbeNx1SjA3Dp0F18',
      accounts: ['7729532de2521d2fd8f1afcd9787442b26fc71cc5f6d19d589303dd3c798f899'],
    }
  }
} 