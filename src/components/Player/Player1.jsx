import React from 'react'
import Track from '../Track/Track'

const Player1 = () => {
  return (
    <div className='music-player'>
    <div style={{display:'flex',gap:'0.5rem',padding:'1rem',flexDirection:'row',position:'relative',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
        <Track />
    </div>
  </div>
  )
}

export default Player1