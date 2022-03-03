require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift release place assume install industry sun silk'; 
let testAccounts = [
"0xa1a39f0fc333ec344f6497c1deac361b3e820c0d5e54cf9242e2714bd64e0b85",
"0xdacce147e69f7814eb0f1a44e7c5ca43ae5eeba1ee62f14d9788d2b47169c126",
"0x353ca3178f5d994ea11858c5d155d634d19de8e2688b9672f753a468f2775cb5",
"0x67a8e43a82967a4443556d49e1a7f30c9e154e3f7b94df40297e79d4529ee41c",
"0x92ca428e5511d6373f7945afb0ea9153d33fa84d4beb4a0ed1f697f7b6d19739",
"0x8142ed600c4db4d18037bd872a5e2c92f322b4f643a62143fd27ba466d88a2d7",
"0x66731ceab459aae0b18cb81afa49387c871ddab955a1bd57f6b8743b05b9192f",
"0xf202e2908142e572597869abc2d734b12e70ead38ed62091272d54046e9e4b31",
"0x090f2ca0bafd8a68fd85cde3871a6fa17704aa2274e1d9491c1dfe1163aaf6a6",
"0xd9b45c195189f62eeef05a9010ed1fffcdd65d8215ad52c997909a74dc36c75f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

