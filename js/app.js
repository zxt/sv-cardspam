"use strict";

var snd1 = new Howl({
  src: ['audio/wwroach_play.mp3']
});

var snd2 = new Howl({
  src: ['audio/wwroach_evo.mp3']
});

function spamCard(e) {
  var imgWidth = 268;
  var imgHeight = 349;
  var img = document.createElement("img");
  var evo = Math.random() > 0.85 ? true : false;
  img.src = evo ? "img/card/wwroach_evo.png" : "img/card/wwroach.png";
  img.style.left = e.clientX - imgWidth/2 + "px";
  img.style.top = e.clientY - imgHeight/2 + "px";
  img.style.position = "absolute";
  document.getElementById("skreeee").appendChild(img);
  evo ? snd2.play() : snd1.play();
}

document.addEventListener("click", spamCard);
