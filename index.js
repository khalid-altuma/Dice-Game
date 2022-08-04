var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Won";
    document.querySelector("#player1").style.color = "green";
    document.querySelector("#player2").style.color = "red";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw";
    document.querySelector("#player1").style.color = "yellow";
    document.querySelector("#player2").style.color = "yellow";
} else {
    document.querySelector("h1").textContent = "Player 2 Won 🚩";
    document.querySelector("#player2").style.color = "green";
    document.querySelector("#player1").style.color = "red";
}