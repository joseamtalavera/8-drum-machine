import React from 'react';

const Pad = ({ id, src, letter, handleDisplay}) => {

    const playAudio =()=> {
        
    const audio = document.getElementById(letter);
    audio.currentTime = 0;
    audio.play();
    handleDisplay(id);
}






    return (
        
        <div className='drum-pad' id={id} onClick={playAudio}>
        {letter}
        <audio className='clip' id={letter} src={src}></audio>
        </div>
    );


};

export default Pad;