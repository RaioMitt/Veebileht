// Autor: Osvald
// Mängi lugu kui hiir on plaadi peal
document.addEventListener('DOMContentLoaded', function() {  // veendu, et leht on laetud
    let discs = document.querySelectorAll(".disc-img");
    let tracks = [ // lugude list vastavas järjekorras
        "assets/audio/pigstep-short.mp3",
        "assets/audio/relic-short.mp3",
        "assets/audio/stal-short.mp3",
        "assets/audio/strad-short.mp3",
        "assets/audio/cat-short.mp3",
        "assets/audio/far-short.mp3",
        "assets/audio/ward-short.mp3",
        "assets/audio/wait-short.mp3",
        "assets/audio/blocks-short.mp3",
        "assets/audio/otherside-short.mp3",
        "assets/audio/chirp-short.mp3",
        "assets/audio/mall-short.mp3",
        "assets/audio/mellohi-short.mp3",
        "assets/audio/5-short.mp3",
        "assets/audio/13-short.mp3",
        "assets/audio/11-short.mp3"
      ];
    discs.forEach((disc, index) => {
      // mängi lugu kui hiir tuleb plaadile ja peata kui lahkub
      let track = new Audio(tracks[index]);
      disc.addEventListener('mouseover', () => {
        track.play();
      });
      disc.addEventListener('mouseout', () => {
        track.pause();
        //audio.currentTime = 0;  // alusta iga kord algusest
      });
    });
  });