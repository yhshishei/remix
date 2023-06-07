// let Web3=require("web3");
// web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// let fs=require("fs");
//const { config } = require("process");
//const { error } = require('console');
// var mycontractABI=JSON.parse(fs.readFileSync("D:\\综合课程设计\\前端\\login.abi").toString());
// var mycontract=new web3.eth.Contract(mycontractABI);
// var data="0x608060405234801561001057600080fd5b506102ce806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806302e6af1514610046578063131c24db14610076578063c48782fd146100a6575b600080fd5b610060600480360381019061005b91906101cb565b6100c2565b60405161006d9190610226565b60405180910390f35b610090600480360381019061008b9190610241565b610110565b60405161009d919061027d565b60405180910390f35b6100c060048036038101906100bb91906101cb565b610134565b005b600081600080858152602001908152602001600020541480156100f75750826001600084815260200190815260200160002054145b15610105576001905061010a565b600090505b92915050565b6002818154811061012057600080fd5b906000526020600020016000915090505481565b600282908060018154018082558091505060019003906000526020600020016000909190919091505580600080848152602001908152602001600020819055508160016000838152602001908152602001600020819055505050565b600080fd5b6000819050919050565b6101a881610195565b81146101b357600080fd5b50565b6000813590506101c58161019f565b92915050565b600080604083850312156101e2576101e1610190565b5b60006101f0858286016101b6565b9250506020610201858286016101b6565b9150509250929050565b60008115159050919050565b6102208161020b565b82525050565b600060208201905061023b6000830184610217565b92915050565b60006020828403121561025757610256610190565b5b6000610265848285016101b6565b91505092915050565b61027781610195565b82525050565b6000602082019050610292600083018461026e565b9291505056fea2646970667358221220b06ab6426d560a86441e46101881558f6a7ff76d4a34f8f7c8db06c15311fe8664736f6c63430008120033";
//mycontract.deploy({
//  data:data,
//}).send({
//    from:'0x1424075841E6C09Dc5F247658Dc75969BFa09f27',
//    gas:1500000,
//    gasPrice: '1000000'
//},function(error,result){console.log(result)})
// var contractaddresss="0xE3f65Dea3Ef084DF169496aB02BEa138ba6a42fd";
// var myContract=new web3.eth.Contract(mycontractABI,contractaddresss);
// console.log(myContract.options.address);

//var username=document.getElementById("username").value;
//var password=document.getElementById("password").value;
// var num=0;
// var username=2021080904011;
// var password=12345678;
//var btn=document.getElementById("bton");
// myContract.methods.signup(username,password)
//    .send({from:'0xE3f65Dea3Ef084DF169496aB02BEa138ba6a42fd'})
//    .on('receipt',function(receipt){   

//     })
// myContract.methods.loginin("2021",password)
//    .send({from:'0xE3f65Dea3Ef084DF169496aB02BEa138ba6a42fd'})
//    .on('receipt',function(receipt){
//        if(receipt.status==true)  num=1;
//        else num=0;
       
//    })
    
//bton.onclick=function submitfunction()
//{
  //  if(num==0)
  //      jumpuser();
  //  else top.location.href="#";
//}

//function jumpuser()
//{
//   window.location.href("www.baidu.com");
//}

//学生账户
var username1=2021080904011;
var username2=2021080904012;
var username3=2021080904013;
var pass1=12345678;
var pass2=1234567;
var pass3=123456;
//老师账户
var tea1=1995;
var tea2=1996;
var tea3=1997;
var passt1=123;
var passt2=1234;
var passt3=12345;
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
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_password",
          "type": "uint256"
        }
      ],
      "name": "signup",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_password",
          "type": "uint256"
        }
      ],
      "name": "loginin",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "studentid",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  var contractaddress="0x87f63110f8666c0978D30cB58106C0d01284b930";
  mycontract=new web3js.eth.Contract(abi,contractaddress);
  mycontract.methods.signup(username1,pass1)
  .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
  .on('receipt',function(receipt){})
  mycontract.methods.signup(username2,pass2)
  .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
  .on('receipt',function(receipt){})
  mycontract.methods.signup(username3,pass3)
  .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
  .on('receipt',function(receipt){})
  mycontract.methods.signup(tea1,passt1)
  .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
  .on('receipt',function(receipt){})
  mycontract.methods.signup(tea2,passt2)
  .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
  .on('receipt',function(receipt){})
  mycontract.methods.signup(tea3,passt3)
  .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
  .on('receipt',function(receipt){})
}

var state=0;
var num=0;       


function tea(){
  num=0;
}
function stu(){
  num=1;
}
function jump()
{
  var username=document.getElementById("username").value;        
  var password=document.getElementById("password").value;
  mycontract.methods.loginin(username,password)
   .send({from:'0x87f63110f8666c0978D30cB58106C0d01284b930'})
   .on('receipt',function(receipt){
       if(receipt.status==true)  state=1;
       else state=0;
       
   })
  just();
}

function just()
{
  if(state==1&&num==1){
    window.location.href="D:/综合课程设计/前端/user.html";
    alert('登录成功！');
  }
  else if(state==1&&num==0){
    window.location.href="D:/综合课程设计/前端/asministor.html";
    alert('登录成功！');
  }
  // else
  // {
  //   alert('登录失败！');
  // }
}