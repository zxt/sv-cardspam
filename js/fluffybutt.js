"use strict";

var snd1 = new Howl({
  src: ['audio/fluffybutt_play.mp3']
});

var snd2 = new Howl({
  src: ['audio/fluffybutt_evo.mp3']
});

var imgWidth = 268;
var imgHeight = 349;
var img1 = "img/card/fluffybutt.png";
var img2 = "img/card/fluffybutt_evo.png";

document.addEventListener("click", event => { spamCard(event, imgWidth, imgHeight, img1, img2, snd1, snd2); } );
