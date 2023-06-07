// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;
import "course/login.sol";
contract Studentuser{
    struct studentrecord//学生学历相关信息
    {
        string studentID;
        string seniorschool;//高中
        string undergraduate;//本科
        string postgraduate;//硕士
        string Doctoral;//博士
    }
    
    studentrecord[3] student;
    enum Record{seniorschool,undergraduate,postgraduate,Doctoral}
    Record record;
    mapping (string=>uint) locate;
    
    function seniors() public{
        record=Record.seniorschool;
    }//选择添加高中学历

    function under() public{
        record=Record.undergraduate;
    }//添加本科学历

    function post() public{
        record=Record.postgraduate;
    }//添加硕士研究生学历

    function dot() public{
        record=Record.Doctoral;
    }//添加博士研究生学历

    function init() private {
        student[0].studentID="2021080904011";
        student[1].studentID="2021080904001";
        student[2].studentID="2021080904012";
        for(uint l=0;l<3;l++)
        {
            student[l].seniorschool="null";
            student[l].undergraduate="null";
            student[l].postgraduate="null";
            student[l].Doctoral="null";
        }
    }

    uint time=0;
    function setinformation(string memory a,string memory s) public{
        if(time==0)
            {init();}
        time=time+1;
        uint l=locate[a];
        if(record==Record.seniorschool)
            student[l].seniorschool=s;
        else if(record==Record.undergraduate)
            student[l].undergraduate=s;
        else if(record==Record.postgraduate)
            student[l].postgraduate=s;
        else if(record==Record.Doctoral)
            student[l].Doctoral=s;
    }

    function query(string memory a) public view  returns(string memory){
        uint l=locate[a];
        string memory b;
        if(record==Record.seniorschool)
            b=student[l].seniorschool;
        else if(record==Record.undergraduate)
            b=student[l].undergraduate;
        else if(record==Record.postgraduate)
            b=student[l].postgraduate;
        else if(record==Record.Doctoral)
            b=student[l].Doctoral;
        return b;
    }

    function del(string memory a)  public 
    {
        uint l=locate[a];
        if(record==Record.seniorschool)
            delete student[l].seniorschool;
        else if(record==Record.undergraduate)
            delete  student[l].undergraduate;
        else if(record==Record.postgraduate)
            delete  student[l].postgraduate;
        else if(record==Record.Doctoral)
            delete  student[l].Doctoral;
    }

}
