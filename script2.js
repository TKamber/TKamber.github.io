document.write("请在180秒内回答以下灯谜方可过关")
var t = 180;
function time(){
    document.getElementById("begin").style.display="none";
    if(t>=0){
        setTimeout(function(){
            document.getElementById("clock").innerHTML = t;
            t--;
            time();
        },1000);
    }
}
function display() {
    document.getElementById("one").style.display="block";
}
function judge1(){
    var str = document.getElementById("judge1").value;
    if(str=="")
        alert("用户输入不能为空");
    else if(str!="素")
        alert("答案不正确");
    else{
        document.getElementById("one").style.display="none";
        document.getElementById("two").style.display="block";
    }
}
function judge2(){
    var str = document.getElementById("judge2").value;
    if(str=="")
        alert("用户输入不能为空");
    else if(str!="袭")
        alert("答案不正确");
    else{
        document.getElementById("two").style.display="none";
        document.getElementById("three").style.display="block";
    }
}
function judge3(){
    var str = document.getElementById("judge3").value;
    if(str=="")
        alert("用户输入不能为空");
    else if(str!="雷")
        alert("答案不正确");
    else{
      document.getElementById("three").style.display="none";
      document.getElementById("four").style.display="block";
  }
}
function judge4(){
    var str = document.getElementById("judge4").value;
    if(str=="")
        alert("用户输入不能为空");
    else if(str!="同甘共苦")
        alert("答案不正确");
    else{
        alert("恭喜用户过关");
        t=-2;
        document.getElementById("clock").style.display="none";
    }
}
