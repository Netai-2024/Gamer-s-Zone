var mole=document.getElementById("mole");
const Left=[130,110,250,373,424,664,738,698];
const Top=[20,220,430,95,273,58,183,373];

function start(){
    mole.style.display="block";
}
const inter=setInterval(() => {
    var index=Math.floor(Math.random()*8);
    mole.style.top=Top[index]+'px';
    mole.style.left=Left[index]+'px'; 
},500);

function stop(){
    clearInterval(inter);
    document.getElementsByTagName("p")[0].innerHTML="&#127881;&#127881; YOU WON &#127881;&#127881;";
}

function reset(){
    window.location.reload();
}

function quit(){
    window.close();
}
