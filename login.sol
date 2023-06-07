// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Signup{
    mapping (uint=>uint) password;
    
    uint public  studentid;

    function signup(uint id,uint _password) public {
        password[id]=_password;
        
    }


    function loginin(uint id,uint _password) public view  returns (uint){
        if(password[id]==_password){
            return 1;
        }
        else return 0;
    }
}