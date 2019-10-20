"use strict";

function spamCard(e, imgWidth, imgHeight, img1, img2, snd1, snd2) {
  var img = document.createElement("img");
  var art = Math.random() < 0.85;
  img.src = art ? img1 : img2;
  img.style.left = e.clientX - imgWidth/2 + "px";
  img.style.top = e.clientY - imgHeight/2 + "px";
  img.style.position = "absolute";
  document.body.appendChild(img);
  art ? snd1.play() : snd2.play();
}
