"use strict";

var snd1 = new Howl({
  src: ['audio/tartman_evo.mp3']
});

var snd2 = new Howl({
  src: ['audio/tartman_atk.mp3']
});

var imgWidth = 268;
var imgHeight = 349;
var img1 = "img/card/tartman.png"
var img2 = "img/card/tartman_evo.png"

document.addEventListener("click", event => { spamCard(event, imgWidth, imgHeight, img1, img2, snd1, snd2); } );
