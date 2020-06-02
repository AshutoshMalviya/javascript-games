var player1 = null;
var player2 = null;
function setNames() {
     player1=prompt("player 1 name:");
    player2= prompt("player 2 name");
    document.getElementsByClassName("playerName")[0].innerText = player1;
    document.getElementsByClassName("playerName")[1].innerText = player2;
    
    }
    setNames();
function getRandomNum() {
    var randomNum = Math.random();
randomNum = Math.floor(randomNum*6) + 1;
return randomNum;
}

function rollTheDice() {
    var player_num = [];
    for(var i=0;i<2;i++) {
   var num= getRandomNum();
   player_num.push(num);
    document.getElementsByClassName("img"+(i+1))[0].setAttribute("src", "images/dice"+num+".png");
    }
   
    if(player_num[0] > player_num[1]) {
        document.querySelector("h1").innerText =  player1+ " wins";
    }
    else if(player_num[0] === player_num[1]) {
        document.querySelector("h1").innerText =   "draw!";
    }
   else {
    document.querySelector("h1").innerText =   player2 +" wins";
   }
}
