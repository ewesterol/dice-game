let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;
let randomSrc1 = "images/dice" + randomNum1 + ".png";
let randomSrc2 = "images/dice" + randomNum2 + ".png";
$(".img1").attr("src", randomSrc1);

$(".img2").attr("src", randomSrc2);

if (randomNum1 > randomNum2) {
  $("h1").innerHTML = "player 1 won🎉!";
} else if (randomNum1 < randomNum2) {
  $("h1").innerHTML = "player 2 win🎉!";
} else {
  $("h1").innerHTML = "Draw Game!";
}
