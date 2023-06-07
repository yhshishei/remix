//页面加载获取Web3对象
flag=false;
window.addEventListener('load',function(){
  //
  if(typeof web3 !=='undefined'){
    web3js=new Web3(web3.currentProvider);
  } else{
    web3js=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
  }

  startapp();
})

var mycontract;
function startapp(){
  var abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			}
		],
		"name": "del",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "post",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			}
		],
		"name": "query",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "seniors",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "a",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "s",
				"type": "string"
			}
		],
		"name": "setinformation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "under",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
var contractaddress="0xaBC3F2B035d10594Fa3B9AC76d41F3f52B675E1d";
mycontract=new web3js.eth.Contract(abi,contractaddress);
合约ABI
// var account = '0x9c91C50A700af87298c80fFc1f7b4142fe5fbC1e'; // 当前帐户地址

// var myContract = new web3.eth.Contract(abi);

// mycontract.deploy({
//   data: bytecode,
// //   arguments: [arg1, arg2, ...]
// })
// .send({
//   from: account,
//   gas: 1500000,
//   gasPrice: '30000000000000'
// })
// .then((newContractInstance) => {
//   alert('Contract deployed at address'+ newContractInstance.options.address);
// });

}

function gaozhong()
{
    mycontract.methods.seniors()
    .send({from:'0xe133E1473b53116735398544e6cf4439a99759DE'})
    .on('receipt',function(receipt){})
}

function benke()
{
    mycontract.methods.under()
    .send({from:'0xe133E1473b53116735398544e6cf4439a99759DE'})
    .on('receipt',function(receipt){})
}

function shuoshi()
{
    mycontract.methods.post()
    .send({from:'0xe133E1473b53116735398544e6cf4439a99759DE'})
    .on('receipt',function(receipt){})
}

function boshi()
{
    mycontract.methods.dot()
    .send({from:'0xe133E1473b53116735398544e6cf4439a99759DE'})
    .on('receipt',function(receipt){})
}

var schoolname;
var studentnum;
var state;
function add()
{
    state=0;
}

function query()
{
    state=1;
}

function dele()
{
    state=2;
}

function sure()
{
    schoolname=document.getElementById("schoolname").value;
    studentnum=document.getElementById("username").value;
    if(state==0)
    {
        mycontract.methods.setinformation(studentnum,schoolname)
        .send({from:'0x940809dFa779845C51A1eD3BAd2aE60B04425E01'})
        .on('receipt',function(receipt){})
        .then(alert('添加成功'))
    }
    else if(state==1)
    {
        mycontract.methods.query(studentnum)
		.call((err,result)=>{
			alert('uestc');
		})
    .then(alert('查询成功'))
    }
    else{
        mycontract.methods.del(studentnum)
    .send({from:'0xe133E1473b53116735398544e6cf4439a99759DE'})
    .on('receipt',function(receipt){})
    .then(alert('删除成功'))
    }
}