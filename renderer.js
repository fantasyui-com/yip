const musicEvents = require('music-events');
const oneof = require('oneof');

const minutes = 30; // song duration
// - - - - - - - - - - - - - - - //
const seconds = 60*minutes;
const bps = 120;
const beats = bps*seconds;
const bar = 60;

let song = musicEvents({ bps, beats, bar});

const sound0 = new Howl({ src: ['audio/test/voice.ogg'] });

const sounda = new Howl({ src: ['node_modules/ultrasonic/ambi_piano.flac'] });
const soundb = new Howl({ src: ['node_modules/ultrasonic/ambi_choir.flac'] });
const soundc = new Howl({ src: ['node_modules/ultrasonic/ambi_drone.flac'] });

const sound1 = new Howl({ src: ['node_modules/ultrasonic/bd_fat.flac'] });
const sound2 = new Howl({ src: ['node_modules/ultrasonic/bd_boom.flac'] });
const sound3 = new Howl({ src: ['node_modules/ultrasonic/bd_tec.flac'] });


song.on('beat', function({count}){
  if (count % 16 === 0) oneof([sound1,sound2,sound3]).play();
  //if (count % 128 === 0) oneof([sound3]).play();

  //if (count % 16 === 0) sound3.play();
  //if (beat % 16 === 0) sound1.play();
});

// song.on('bar', function({count}){
//   if (count % 16 === 0) sound1.play();
// });
song.on('bar', function({count}){
  if (count % 8 === 0) oneof([sounda,soundb,soundc]).play();
});
// song.on('bar', function({count}){
//   if (!count % 2 === 0) sound3.play();
// });

song.on('start', function(){
  console.log('song started')
  //sound0.play();
});

song.on('stop', function(){
  console.log('song ended')
  //sound0.play();
});


song.emit('start')







//sound2.play();
