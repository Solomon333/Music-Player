import React from 'react'

function Information(props) {
  return (
    <div className='info-player'>
        <div className='info-img'>
            <img src={props.tracks.img_src} alt='' ></img>
        </div>
        <h3 className='info-title'>{props.tracks.title}</h3>
        <h3 className='info-artist'>{props.tracks.artist}</h3>
        <h2 className='info-time'>{props.tracks.time}</h2>
    </div>
  )
}

export default Information;