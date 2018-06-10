const musicEvents = require('music-events');

const minutes = 1; // song duration
// - - - - - - - - - - - - - - - //
const seconds = 60*minutes;
const bps = 16;
const beats = 16*seconds;

let song = musicEvents({ bps, beats, bar: 8});

const sound0 = new Howl({ src: ['audio/test/voice.ogg'] });
const sound1 = new Howl({ src: ['node_modules/ultrasonic/ambi_choir.flac'] });
const sound2 = new Howl({ src: ['node_modules/ultrasonic/bd_ada.flac'] });
const sound3 = new Howl({ src: ['node_modules/ultrasonic/bd_boom.flac'] });

// song.on('beat', function({count}){
//   console.log('beat',beat)
//   if (beat % 2 === 0) sound2.play();
//   if (beat % 16 === 0) sound1.play();
// });

song.on('bar', function({count}){
  if (count % 4 === 0) sound1.play();
});
song.on('bar', function({count}){
  if (count % 2 === 0) sound2.play();
});
song.on('bar', function({count}){
  if (!count % 2 === 0) sound3.play();
});

song.on('start', function(){
  console.log('song started')
  sound0.play();
});

song.on('stop', function(){
  console.log('song ended')
  sound0.play();
});


song.emit('start')







//sound2.play();
