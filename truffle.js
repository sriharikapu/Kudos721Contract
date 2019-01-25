const HDWalletProvider = require('truffle-hdwallet-provider')
const HDWalletProviderPriv = require('truffle-hdwallet-provider-privkey')
const fs = require('fs')

// First read in the secrets.json to get our mnemonic
// let secrets
// let mnemonic
// let privkeys

// if (fs.existsSync('secrets.json')) {
//   secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'))
//   mnemonic = secrets.mnemonic
//   token = secrets.token
//   privkeys = secrets.privKeys
// } else {
//   console.log('No secrets.json found. If you are trying to publish EPM ' +
//               'this will fail. Otherwise, you can ignore this message!')
//   mnemonic = ''
//   token = ''
//   privkeys = []
// }

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: '*'
    }
  },
  compilers: {
     solc: {
       version: "0.4.24",
     }
  }
}
