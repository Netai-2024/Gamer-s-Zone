var count=0;
function play(btn){
    document.getElementsByTagName("audio")[0].play();
    if(count%2==0){
        btn.innerHTML="O";
        btn.style.color="rgb(0, 192, 0)";
    }
    else{
        btn.innerHTML="X";
        btn.style.color="rgb(247, 0, 37)";
    }
    count+=1;
    btn.disabled=true;
    if(isWin(btn)){
        for(let i=0;i<9;i++)   
            document.getElementsByTagName("button")[i].disabled=true;
        document.getElementById("turn").innerHTML="";
    }
    else{
        if(count==9){
            document.getElementById("result").innerHTML="Match draw";
            document.getElementById("history").innerHTML+=`<p>Match Draw</p><hr>`;
            document.getElementById("turn").innerHTML="";
        }
        else if(count%2==0){
            document.getElementById("turn").innerHTML="O your turn";
        }
        else{
            document.getElementById("turn").innerHTML="X your turn";
        }
    }
}

function isWin(btn){
    let allbtn=document.getElementsByTagName("button");

    if((allbtn[0].innerHTML===allbtn[1].innerHTML) &&(allbtn[0].innerHTML===allbtn[2].innerHTML)&&(allbtn[0].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[3].innerHTML==allbtn[4].innerHTML) &&(allbtn[3].innerHTML==allbtn[5].innerHTML)&&(allbtn[3].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[6].innerHTML==allbtn[7].innerHTML) &&(allbtn[6].innerHTML==allbtn[8].innerHTML)&&(allbtn[6].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[0].innerHTML==allbtn[3].innerHTML) &&(allbtn[0].innerHTML==allbtn[6].innerHTML)&&(allbtn[0].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[1].innerHTML==allbtn[4].innerHTML) &&(allbtn[1].innerHTML==allbtn[7].innerHTML)&&(allbtn[1].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[2].innerHTML==allbtn[5].innerHTML) &&(allbtn[2].innerHTML==allbtn[8].innerHTML)&&(allbtn[2].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[0].innerHTML==allbtn[4].innerHTML) &&(allbtn[0].innerHTML==allbtn[8].innerHTML)&&(allbtn[0].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
    else if((allbtn[2].innerHTML==allbtn[4].innerHTML) &&(allbtn[2].innerHTML==allbtn[6].innerHTML)&&(allbtn[2].innerHTML!=="")){
        document.getElementById("result").innerHTML=btn.innerHTML+" WON";
        document.getElementById("history").innerHTML+=`<p>${btn.innerHTML} WON</p><hr>`;
        return true;
    }
        return false;
}
var h=true;
function history(){
    if(h==true){
        document.getElementById("history").classList.remove("hide");
        document.getElementById("history").classList.add("show");
        h=false;
    }
    else{
        document.getElementById("history").classList.add("hide");
        document.getElementById("history").classList.remove("show");
        h=true;
    }
}
function newgame(){
    for(let i=0;i<9;i++) {
        document.getElementsByTagName("button")[i].innerHTML=""; 
            document.getElementsByTagName("button")[i].disabled=false;
    } 
    document.getElementById("result").innerHTML="";
    document.getElementById("turn").innerHTML="O your turn";
    count=0; 
    document.getElementById("history").classList.remove("show");
    document.getElementById("history").classList.add("hide");
}