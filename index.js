var random1 = Math.floor(Math.random()*6+1) ;
img1 = "images/dice" + random1 + ".png";
document.querySelector(".img1").setAttribute("src" , img1);

var random2 = Math.floor(Math.random()*6+1) ;
img2 = "images/dice" + random2 + ".png";
document.querySelector(".img2").setAttribute("src" , img2);

if (random1 > random2){
    document.querySelector("h1").innerHTML = "🚩 Player1 wins";
}
else if (random1 < random2){
    document.querySelector("h1").innerHTML = "player2 wins 🚩";
}
else {
    document.querySelector("h1").innerHTML = " Match drawn ";
}