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
		"inputs": [],
		"name": "a",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "callback",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
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
		"name": "makesure",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "pure",
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
				"name": "id",
				"type": "string"
			}
		],
		"name": "queryid",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "record",
		"outputs": [
			{
				"internalType": "enum application.Record",
				"name": "",
				"type": "uint8"
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
		"inputs": [],
		"name": "under",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
  var contractaddress="0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27";
  mycontract=new web3js.eth.Contract(abi,contractaddress);
//   mycontract.methods.constructor('0x8F335591861E1a33F2f94aE24716b588245Ebf3b')
//   .send({from:'0x8F335591861E1a33F2f94aE24716b588245Ebf3b'})
//   .on('receipt',function(receipt){})
}

function gaozhong()
{
    mycontract.methods.seniors()
    .send({from:'0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27'})
    .on('receipt',function(receipt){})
}

function benke()
{
    mycontract.methods.under()
    .send({from:'0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27'})
    .on('receipt',function(receipt){})
}

function shuoshi()
{
    mycontract.methods.post()
    .send({from:'0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27'})
    .on('receipt',function(receipt){})
}

function boshi()
{
    mycontract.methods.dot()
    .send({from:'0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27'})
    .on('receipt',function(receipt){})
}

var num=0;
function sure()
{
	num=1;
	mycontract.methods.makesure()
	.send({from:'0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27'})
	alert('操作成功！你已同意该申请！');
}

function dele()
{
	num=2;
	mycontract.methods.callback()
	.send({from:'0xe22fD630fa1ACF4C60cdA0F80b5Fd43d559E2E27'})
	
	alert('操作成功！你已撤销该申请！');
}

function make()
{
	var username1=document.getElementById("usernames").value;
	mycontract.methods.queryid(username1)
	.call((err,result)=>{
		alert('uestc');
	})
	
}

 
