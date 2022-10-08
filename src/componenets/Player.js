import React, {useState, useEffect, useRef}  from 'react';
import Information from './Information';
import Controls from './Controls';



function Player(props) {

    const audioEl = useRef(null);

    const [songPlaying, setSongPlaying] = useState(false);

    useEffect(() => {
        if(songPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++ ;

                if(temp > props.tracks.length -1) {
                    temp = 0;
                }
                return temp
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.tracks.length -1;
                }
                return temp;
            });
        }
    }
  return (
    <div className='com-player'>
        <audio src={props.tracks[props.currentSongIndex].src} ref={audioEl}></audio>
        <h3>now playing</h3>
        <Information  tracks={props.tracks[props.currentSongIndex]}/>
        <Controls 
        songPlaying={songPlaying} 
        setSongPlaying={setSongPlaying}
        SkipSong={SkipSong}
         />
        <p><strong>Next up:</strong> 
        {props.tracks[ props.nextSongIndex ].title}  by   <span>   
            { props.tracks[ props.nextSongIndex ].artist}</span>
         </p>
    </div>
  )
}

export default Player;