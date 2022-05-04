var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);

var imageSource1="images/dice"+randomNumber1+".png";
var imageSource2="images/dice"+randomNumber2+".png";

document.getElementsByClassName("img1")[0].setAttribute("src",imageSource1);
document.getElementsByClassName("img2")[0].setAttribute("src",imageSource2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won! 🥇";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won! 🥇";
}
else{
    document.querySelector("h1").innerHTML="Draw, Play Again!";
}