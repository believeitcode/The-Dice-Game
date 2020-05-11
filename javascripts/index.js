function roll(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ; // Generate 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
//var diceRoll = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+randomNumber1+".png"); // showing dice1.png to dice6.png
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+randomNumber2+".png");
selectWinner(randomNumber1, randomNumber2); // Display the winner
}

function selectWinner(randomNumber1, randomNumber2){
    if(randomNumber1 > randomNumber2)
      document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    else if(randomNumber1 < randomNumber2)
      document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    else
      document.querySelector("h1").innerHTML = "🎌Draw!🎌";
}
