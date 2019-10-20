"use strict";

var snd1 = new Howl({
  src: ['audio/tondekei.mp3']
});

var snd2 = new Howl({
  src: ['audio/tondekei.mp3']
});

var imgWidth = 268;
var imgHeight = 349;
var img1 = "img/card/kel.png"
var img2 = "img/card/kel_evo.png"

document.addEventListener("click", event => { spamCard(event, imgWidth, imgHeight, img1, img2, snd1, snd2); } );
