const Web3 = require('web3');
const fs = require('fs');
let abi = JSON.parse(fs.readFileSync('SmartContract_sol_SmartContract.abi'));
let bytecode = fs.readFileSync('SmartContract_sol_SmartContract.bin').toString();
let listOfPosts = ['A Beginner’s Guide to Ethereum', 'How Does Ethereum Work?', 'The Year in Ethereum', 'What is Ethereum 2.0?', 'Ethereum is a Dark Forest'];
let connection = new Web3('http://rpc.apothem.network/') //AWS node
const deploy = async () => {
    try {
        // let contract = new connection.eth.Contract(abi)
        let contract = new connection.eth.Contract(abi, '0x4b6608af0289c7c589d73dC3eb8Dc83A52d3aCF7', {
            from: '0x0638E1574728b6D862dd5d3A3E0942c3be47D996',
            gas: 1500000,
            // gasPrice: connection.utils.toWei('0.00000', 'ether'),
            data: bytecode
        })
        // contract.methods.totalLikesFor(connection.utils.asciiToHex('How Does Ethereum Work?')).call(console.log);
        console.log("contract====", contract.methods)
        contract.methods.likePost(connection.utils.asciiToHex('How Does Ethereum Work?')).send({from: '0x0638E1574728b6D862dd5d3A3E0942c3be47D996'}).then((response) => console.log(response));
        connection.eth.getBalance('0x0638E1574728b6D862dd5d3A3E0942c3be47D996').then(console.log);
        contract.methods.totalLikesFor(connection.utils.asciiToHex('How Does Ethereum Work?')).call(console.log);
  
 
    } catch (error) {
        console.log("error==", error)
    }
};
deploy();