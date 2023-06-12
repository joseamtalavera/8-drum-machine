import React, {useState, useEffect} from 'react';
import Pad from './Pad';
import './App.css';

const audioClips = [
  { id: "Heater-1", letter: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { id: "Heater-2", letter: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { id: "Heater-3", letter: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { id: "Heater-4", letter: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { id: "Clap", letter: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { id: "Open-HH", letter: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { id: "Kick-n-Hat", letter: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { id: "Kick", letter: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { id: "Closed-HH", letter: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];

const App = () => {
  const [display, setDisplay] = useState('Display');


  const handleDisplay = (display) => setDisplay(display);



  const handleKeyDown = (e) => {
    const key = e.key.toUpperCase();
    const clip = audioClips.find(c => c.letter === key);
    if (clip) {
      const audio = document.getElementById(key);
      audio.currentTime = 0;
      audio.play();
      handleDisplay(clip.id);
    }
  };


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);

  }, []);





  return (
    <div id="drum-machine" className="App">
      <h1 className= 'title'>Drum Machine</h1>
      <div id="display">{display}</div>
      <div className='pads'>
      {audioClips.map (clip => (
      <Pad 
      key={clip.id} 
      id={clip.id} 
      letter={clip.letter}
      src={clip.src} 
      handleDisplay={handleDisplay} 
      />
      ))}
      </div>
    </div>
  );
};

export default App;