const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface , bytecode} = require('./compile');

const provider = new HDWalletProvider(
    'route embrace pumpkin hole then please spice fabric above lottery health ask',
    'https://rinkeby.infura.io/v3/12f8b2cb4e2944198d968eda37324a77'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data : '0x' + bytecode })
    .send({ gas : '1000000', from : accounts[0]});


        console.log(interface);
        
    console.log('Contract deployed to', result.options.address);
};

deploy();