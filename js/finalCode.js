$(function(){
    let final = parseInt(Math.random()*99)+1; //終極密碼
    let max = 100; //密碼的最大值
    let min = parseInt(0); //密碼的最小值
    let code = ""; //使用者輸入的密碼
    $("#showNum").sevenSeg({ digits: 2, value: code });
   
    //點數字按鈕輸入密碼
    $(".numBtn").click(function(){
        if(code.length<2){
            code += $(this).text();
            $("#showNum").sevenSeg({ digits: 2, value: code });
        }
    }); //end 點數字按鈕輸入密碼

    //點重置按鈕
    $("#btnReset").click(function(){
        code = "";
        $("#showNum").sevenSeg({ digits: 2, value:'00'});
    }); //end 點重置按鈕

    //點確定按鈕
    $("#btnSandOut").click(function(){
        $(".tip").css("display","none");
        if(code == ""){
            $(".tip").css("display","inline-block");
            $(".tipText").text("你還沒輸入密碼！");
        }else if(code == final){
            $("#codeBlock").text(final);
            $(".blackBox").css("display","flex");
        }else if(parseInt(code) >= max || parseInt(code) <= min){
            $(".tip").css("display","inline-block");
            $(".tipText").text("請輸入範圍內的數字！");
            code = "";
            $("#showNum").sevenSeg({ digits: 2, value:'00'});
        }else{
            if(code > final){ //縮小密碼範圍
                max = code;
                $("#maxNum").text(max);
                code = "";
                $("#showNum").sevenSeg({ digits: 2, value:'00'});
            }else{
                min = code;
                $("#minNum").text(min);
                code = "";
                $("#showNum").sevenSeg({ digits: 2, value:'00'});
            }
        }
    }); //end 點確定按鈕

    //點"再玩一次"按鈕
    $("#againBtn").click(function(){
        final = parseInt(Math.random()*99)+1;
        max = 100;
        min = parseInt(0);
        code = "";
        $("#showNum").sevenSeg({ digits: 2, value: '00' });
        $(".blackBox").css("display","none");
        $("#codeBlock").text("?");
        $("#maxNum").text(max);
        $("#minNum").text(min);
    }); // end 點"再玩一次"按鈕


}); //end ready

