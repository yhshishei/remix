// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.1 <0.9.0;
import "course/student.sol";
import "course/admin.sol";
contract app{
    constructor(address _a)
    {
        a=_a;
    }

    struct studentrecord//学生学历相关信息
    {  
        uint studentID;
        string seniorschool;//高中
        string undergraduate;//本科
        string postgraduate;//硕士
        string Doctoral;//博士
    }
    
    address public a;
    uint256 studentID;
    enum Record{seniorschool,undergraduate,postgraduate,Doctoral}
    mapping (bytes=>uint) locate;

    Record public record;

    function seniors() public{
        Studentuser(a).seniors();
    }//选择查看高中学历

    function under() public{
        Studentuser(a).under();
    }//选择查看本科学历

    function post() public{
        Studentuser(a).post();
    }//选择查看硕士研究生学历

    function dot() public{
        Studentuser(a).dot();
    }//选择查看博士研究生学历

    function queryid(string memory id) public view  returns (string memory){
        string memory s;
        s=Studentuser(a).query(id);
        return s;
    }

    function callback(string memory id) public returns (bool){
        Studentuser(a).del(id);
        return false;
    }               
                    
    function makesure() public pure returns (bool){
        return true;
    }
}