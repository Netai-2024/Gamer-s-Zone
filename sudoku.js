let t;
t="<table cellspacing='0' cellpadding='0'>";
for(let i=0;i<9;i++){
    t+="<tr>";
    for(let j=0;j<9;j++){
        if((j==2 || j==5)&&(i==2 || i==5))
            t+='<td style="border-right: 2px solid black; border-bottom: 2px solid black"> <input type="number" min="1" max="9"> </td>';
        else if(j==2 || j==5)
            t+='<td style="border-right: 2px solid black"> <input type="number" min="1" max="9"> </td>';
        else if(i==2 || i==5)
            t+='<td style="border-bottom: 2px solid black"> <input type="number" min="1" max="9"> </td>';
        else
            t+='<td> <input type="number" min="1" max="9"> </td>';
    }
    t+="</tr>";
}

t+="</table>";
document.getElementById("sudoku").innerHTML=t;
var arr=[];
var lvl="";
function newgame(){
    let g0=[
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
    ];
    let g1=[
        [3,0,0,8,0,1,0,0,2],
        [2,0,1,0,3,0,6,0,4],
        [0,0,0,2,0,4,0,0,0],
        [8,0,9,0,0,0,1,0,6],
        [0,6,0,0,0,0,0,5,0],
        [7,0,2,0,0,0,4,0,9],
        [0,0,0,5,0,9,0,0,0],
        [9,0,4,0,8,0,7,0,5],
        [6,0,0,1,0,7,0,0,3]
    ];
    let g2=[
        [0,0,1,7,0,2,9,0,0],
        [8,7,0,0,0,0,0,4,2],
        [0,0,0,0,4,0,0,0,0],
        [6,0,0,0,5,0,7,0,9],
        [7,0,0,0,1,0,0,0,3],
        [4,0,2,0,8,0,0,0,1],
        [0,0,0,0,6,0,0,0,0],
        [2,3,0,0,0,0,0,1,6],
        [0,0,4,5,0,3,8,0,0]
    ];
    let g3=[
        [9,0,6,3,4,0,8,1,0],
        [0,5,1,7,0,0,3,0,0],
        [4,7,0,0,9,1,0,0,5],
        [0,0,0,9,0,3,0,0,2],
        [0,0,2,0,8,7,0,0,0],
        [1,0,7,2,0,0,6,0,0],
        [0,8,5,0,0,9,1,0,0],
        [0,3,4,0,6,0,0,0,9],
        [0,1,0,5,0,8,7,0,6]
    ];
    let g4=[
        [0,6,0,0,0,0,5,0,2],
        [0,3,0,0,0,7,0,0,0],
        [0,2,0,3,0,6,0,0,7],
        [8,7,3,0,2,1,4,5,0],
        [9,4,0,5,0,0,0,0,0],
        [0,1,0,0,0,4,0,0,0],
        [0,0,0,0,9,5,0,0,4],
        [3,9,4,8,1,0,0,7,5],
        [0,5,1,0,6,3,0,9,8]
    ];
    let g5=[
        [4,0,6,7,0,0,0,5,0],
        [0,0,0,0,0,8,0,6,0],
        [0,0,8,0,5,0,1,0,2],
        [9,0,0,1,0,5,0,8,0],
        [0,0,7,0,9,0,5,0,0],
        [0,5,0,8,0,4,0,0,3],
        [7,0,4,0,1,0,8,0,0],
        [0,8,0,9,0,0,0,0,0],
        [0,6,0,0,0,7,2,0,5]
    ];
    let g6=[
        [0,8,0,0,3,0,0,0,2],
        [0,6,2,8,0,0,9,0,0],
        [0,0,9,7,6,2,0,0,8],
        [0,0,0,6,0,0,5,8,0],
        [0,5,0,0,0,0,0,4,0],
        [0,7,4,0,0,3,0,0,0],
        [3,0,0,1,4,6,7,0,0],
        [0,0,7,0,9,0,0,0,3],
        [1,0,0,0,7,0,0,9,0]
    ];
    let g7=[
        [0,0,0,7,9,0,0,5,0],
        [3,5,2,0,0,8,0,4,0],
        [0,0,0,0,0,0,0,8,0],
        [0,1,0,0,7,0,0,0,4],
        [6,0,0,3,0,1,0,0,8],
        [9,0,0,0,8,0,0,1,0],
        [0,2,0,0,0,0,0,0,0],
        [0,4,0,5,0,0,8,9,1],
        [0,8,0,0,3,7,0,0,0]
    ];
    let g8=[
        [0,0,8,5,0,4,6,0,0],
        [0,4,0,0,8,0,0,2,0],
        [2,0,0,0,0,0,0,0,9],
        [9,0,0,0,0,0,0,0,1],
        [4,0,0,0,5,0,0,0,6],
        [0,6,0,0,0,0,0,7,0],
        [0,0,7,0,0,0,8,0,0],
        [0,0,0,9,0,1,0,0,0],
        [0,0,0,0,3,0,0,0,0]
    ];
    let g9=[
        [9,1,3,0,0,0,5,0,0],
        [6,0,7,0,0,0,0,2,4],
        [0,5,0,0,8,0,0,7,0],
        [0,7,9,0,0,0,0,0,0],
        [0,0,2,0,9,0,0,4,3],
        [0,0,0,0,0,4,0,9,0],
        [0,4,0,0,0,1,9,0,0],
        [7,0,6,0,0,9,0,0,5],
        [0,0,1,0,0,6,4,0,7]
    ];
    let ran=[g0,g1,g2,g3,g4,g5,g6,g7,g8,g9];
    let index=Math.floor(Math.random()*10);
    for(let row=0;row<9;row++){
        arr[row]=[];
        for(let col=0;col<9;col++){
            let k=(row*9)+col;
            arr[row][col]=(ran[index])[row][col];
            document.getElementsByTagName("input")[k].disabled=false;
            if((ran[index])[row][col]==0)
                document.getElementsByTagName("input")[k].value="";
            else{
                document.getElementsByTagName("input")[k].value=(ran[index])[row][col];
                document.getElementsByTagName("input")[k].disabled=true;
            }
            document.getElementsByTagName("input")[k].addEventListener("input",match);
            document.getElementsByTagName("input")[k].classList.remove("wrong");
        }
    }
    solve();
    mm=0;
    sc=0;
    msc=0;
    clearInterval(interval);
    document.getElementById("m").innerHTML="00";
    document.getElementById("s").innerHTML="00";
    document.getElementById("ms").innerHTML="00";
    startbtn();
    for(let i=0;i<3;i++){
        if(document.getElementsByClassName("level")[i].checked)
            lvl=document.getElementsByClassName("level")[i].value;
    }
    document.getElementById("result").innerHTML="";
}

function solution(){
    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            let k=(row*9)+col;
            document.getElementsByTagName("input")[k].value=arr[row][col];
        }
    }
    clearInterval(interval);
}

function check(row,col,val){
    for(let i=0;i<9;i++){
        if(arr[row][i]==val)
        return false;
    if(arr[i][col]==val)
            return false;
    }
    let r = row - row%3;
    let c = col - col%3;
    for(let i=r;i<r+3;i++){
        for(let j=c;j<c+3;j++){
            if(arr[i][j]==val)
                return false;
        }
    }
    return true;
}

function solve(){
    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            if(arr[row][col]==0){
                for(let val=1;val<=9;val++){
                    if(check(row,col,val)){
                        arr[row][col]=val;
                        if(solve())
                        return 1;
                    else
                    arr[row][col]=0;
            }
        }
        return false;
    }
}
}
return true;
}

function match(){
    let ans=0;
    let fault=0;
    for(let row=0;row<9;row++){
        for(let col=0;col<9;col++){
            let k=(row*9)+col;
            if(document.getElementsByTagName("input")[k].value==arr[row][col]){
                ans+=1;
            }
            if(document.getElementsByTagName("input")[k].value!=""&&document.getElementsByTagName("input")[k].value!=arr[row][col]){
                document.getElementsByTagName("input")[k].classList.add("wrong");
                fault+=1;
            }
            else{
                document.getElementsByTagName("input")[k].classList.remove("wrong");
            }
        }
    }
    if(ans==81){
        clearInterval(interval);
        document.getElementById("result").innerHTML="You Won";
    }
    if(lvl=="hard" && fault==3)
        document.getElementById("result").innerHTML="You Loose";
    else if(lvl=="medium" && fault==5)
        document.getElementById("result").innerHTML="You Loose";
    else if(lvl=="easy" && fault==7)
        document.getElementById("result").innerHTML="You Loose";
}

function clear(){
    document.location.reload();
}

var sc = 0;
var mm = 0;
var msc = 0;
var interval = 0;
function startbtn() {
        interval = setInterval(() => {
        if(mm<10)
            document.getElementById("m").innerHTML ="0"+ mm;
        else
            document.getElementById("m").innerHTML = mm;
        if(sc<10)
            document.getElementById("s").innerHTML ="0"+ sc;
        else
            document.getElementById("s").innerHTML = sc;
        if(msc<10)
            document.getElementById("ms").innerHTML ="0"+ msc;
        else
            document.getElementById("ms").innerHTML = msc;
        msc = msc + 1;
        if (msc == 60){
            msc = 0;
            sc += 1;
        }
        if (sc == 60) {
            sc = 0;
            mm += 1;
        }
    }, 1000);
}

document.getElementById("new").addEventListener("click",newgame);
document.getElementById("sol").addEventListener("click",solution);
document.getElementById("clear").addEventListener("click",clear);