import * as React from 'react'
import Track from '../Track/Track'
import Control from '../Controls/Control'
import Seeker from '../Seeker/Seeker'
import VolumeBar from '../VolumeBar/VolumeBar'
import { IoClose } from 'react-icons/io5'
import './Player.css'
const Player = () => {
  return (
    <div className='music-player'>
    <div style={{display:'flex',gap:'0.5rem',padding:'1rem',flexDirection:'row',position:'relative',width:'100%',alignItems:'center'}}>
        <Track />
        <div style={{alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center',margin:'auto'}}>
          <Control />
          <Seeker />
          <audio src={'https://cdn.freesound.org/previews/728/728436_9034501-lq.mp3'} />
        </div>
        <div style={{gap:'2rem',alignItems:'center',display:'flex'}}>
            {/* <div style={{display:'flex'}}></div> */}
            <VolumeBar />
            <div style={{display:'flex',marginLeft:'auto',cursor:'pointer',color:'white',height:'2rem',width:'2rem',borderRadius:'50%',border:'1px solid white',alignItems:'center',justifyContent:'center'}}>
        <IoClose fontSize={'1.1rem'} />
        </div>
        </div>
    </div>
  </div>
  )
}

export {Player}