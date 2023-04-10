let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomSrc1 = "images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomSrc1);
let randomSrc2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSrc2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML= "player 1 won🎉!"
} else if( randomNum1<randomNum2){
    document.querySelector("h1").innerHTML= "player 2 win🎉!"
} else {
    document.querySelector("h1").innerHTML= "Draw Game!"
} 