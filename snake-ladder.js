var board=document.getElementById("board");
var box=document.getElementsByClassName("box");
user=`<div id="user" class="counter" style='background-color:red;'>&#9924</div>`;
computer=`<div id="computer" class="counter" style='background-color:blue;'>&#9924</div>`;
const Roll=document.getElementById("roll");
const Dice=document.getElementById("dice");
var user_Score=1;
var computer_Score=1;
var user_Value;
var computer_value;
var pos;
var mode=true;
var gamestart=false;

for(i=0;i<100;i++){
    board.innerHTML+=`<div class='box'></div>`;
}

function index(score){
    var x=parseInt(score/10);
    var c=score%10;
    if(c==0){
        x=x-1;
        c=10;
    }
    var r=90-(x)*10;
    if((parseInt(r/10))%2!=0){
        return (r-1)+c;
    }
    return (r+(10-c));
}

function snake_or_ladder(Score){
    if(Score==5)
        Score=35;
    else if(Score==9)
        Score=51;
    else if(Score==23)
        Score=42;
    else if(Score==48)
        Score=86;
    else if(Score==69)
        Score=91;
    else if(Score==36)
        Score=5;
    else if(Score==49)
        Score=7;
    else if(Score==56)
        Score=8;
    else if(Score==82)
        Score=20;
    else if(Score==87)
        Score=66;
    else if(Score==95)
        Score=38;
    else
        Score=Score;

    return Score;
}

function roll(){
    if(gamestart){
        Dice.style.transform=`rotateX(${0}deg) rotateY(${-720}deg)`;
        setTimeout(() => { 
            Dice.style.transform=`rotateX(${0}deg) rotateY(${0}deg)`;
            user_Value=Math.floor(Math.random()*6)+1;
            Dice.style.backgroundImage=`url(Dice-${user_Value}.png)`;
            user_Score+=user_Value;
            if(user_Score<=100){
                user_Score-=user_Value;
                pos=parseInt(index(user_Score));
                box[pos].innerHTML="";
                user_Score+=user_Value;
                user_Score=snake_or_ladder(user_Score);
                pos=index(user_Score);
                setTimeout(() => {
                    box[pos].innerHTML=user;
                    if(user_Score==100){
                        document.getElementById("result").innerHTML="&#127881;&#127881; You Won The Match &#127881;&#127881;";
                        mode=false;
                    }
                }, 500);
            }
            else{
                user_Score-=user_Value;
            }
        },500);
        Roll.disabled=true;
            setTimeout(() => {
            if(mode){
                Dice.style.transform=`rotateX(${0}deg) rotateY(${-720}deg)`;
                setTimeout(() => { 
                    Dice.style.transform=`rotateX(${0}deg) rotateY(${0}deg)`;
                    computer_value=Math.floor(Math.random()*6)+1;
                    Dice.style.backgroundImage=`url(Dice-${computer_value}.png)`;
                    computer_Score+=computer_value;
                    if(computer_Score<=100){
                        computer_Score-=computer_value;
                        pos=parseInt(index(computer_Score));
                        box[pos].innerHTML="";
                        computer_Score+=computer_value;
                        computer_Score=snake_or_ladder(computer_Score);
                        pos=index(computer_Score);
                        setTimeout(() => {
                            box[pos].innerHTML=computer;
                            if(computer_Score==100){
                                document.getElementById("result").innerHTML="&#127881;&#127881; Computer Won The Match &#127881;&#127881;";
                            }
                            else{
                                Roll.disabled=false;
                            }
                        }, 500);
                    }
                    else{
                        user_Score-=user_Value;
                    }
                },500);
            }
        },4000);
    }
}

function red(){
    user=`<div id="user" class="counter" style='background-color:red;'>&#9924</div>`;
    computer=`<div id="computer" class="counter" style='background-color:blue;'>&#9924</div>`;
}
function blue(){
    user=`<div id="user" class="counter" style='background-color:blue;'>&#9924</div>`;
    computer=`<div id="computer" class="counter" style='background-color:red;'>&#9924</div>`;
}
function yellow(){
    user=`<div id="user" class="counter" style='background-color:yellow;'>&#9924</div>`;
    computer=`<div id="computer" class="counter" style='background-color:blue;'>&#9924</div>`;
}
function green(){
    user=`<div id="user" class="counter" style='background-color:rgb(8, 187, 8);'>&#9924</div>`;
    computer=`<div id="computer" class="counter" style='background-color:blue;'>&#9924</div>`;
}

function reset(){
    window.location.reload();
}

function quit(){
    window.close();
}

function start(){
    document.getElementById("red").disabled=true;
    document.getElementById("blue").disabled=true;
    document.getElementById("yellow").disabled=true;
    document.getElementById("green").disabled=true;
    gamestart=true;
    box[90].innerHTML=user;
}

