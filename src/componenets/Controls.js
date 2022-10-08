import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay, faBackward, faForward, faPause} from '@fortawesome/free-solid-svg-icons'

function Controls(props) {
  return (
    <div className='controls'>
        <button className='skip-btn' onClick={() => props.SkipSong(false)} >
            <FontAwesomeIcon icon={faBackward}/>
            </button>
        <button className='play-btn' onClick={() => props.setSongPlaying(!props.songPlaying)}>
            <FontAwesomeIcon icon ={props.songPlaying ? faPause : faPlay }/>
            </button>
        <button className='skip-btn' onClick={() => props.SkipSong()}>
            <FontAwesomeIcon icon={faForward}/>
            </button>
    </div>
  )
}

export default Controls