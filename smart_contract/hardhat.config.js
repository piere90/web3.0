require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/ipuGw3UpJJPfXsPm6nE0ZXmQoe432Fn6',
      accounts: [ '0df1abbf8c6f280622abc4a596a244a3a7641d764a7f2726a6be7561c15c06b4' ]
    }
  }
}