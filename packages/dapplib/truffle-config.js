require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million proud hockey entire off smart'; 
let testAccounts = [
"0x90e3830a46ad63abc75692f097350aaa0a1ed6bfd8a2308c1d7ebcca6f4df8c0",
"0x1404934a1472b7210e1cb0900d6a792d3e698a5aa3ef6cd5b605ca24b6a3fc67",
"0x03e140b667945257dc3c1fc6acc53c236a17c5324696821c4c5b96120d181cd2",
"0x3181ef74d1c2dfa3b79d7457d707637ce93b331af0385c354223e7cc0ea8a0ba",
"0x65acdabb233ae2bbdce1a6e4b3e53e41fb335b296ca19e72ed899f91b8bea1de",
"0x77637b81e57ce72d9ba61a0b5f425b83520967e2ea07e7c5e978ddb180483559",
"0x1cf8c4264c2ce9737e4b332fb886ba88da25a21627038499474fd35af2016511",
"0x9155d23466a166edcb50250930b05c1887c34c79793675cab4fd93ca041f7336",
"0x4a17c9be9fadd1355dfd100c0ee5e98f4f1abb5284b01370862bc666ddca1404",
"0xdd1b74616a8bcc10363799c7a5b2ef9c8d739ecee9d263ace05bd81cef5a672d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
