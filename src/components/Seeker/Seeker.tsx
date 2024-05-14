import * as React from 'react'
import { SeekerTypes } from '../../utils/types';

const Seeker = ({setseeker,duration,appTime}:SeekerTypes) => {
  const getTime = (time:any) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;
  return (
    <div style={{gap:'1rem',justifyContent:'center',display:'flex',alignItems:'center',width:'100%'}}>
        <p className='scaling-animation' style={{fontWeight:500,fontSize:'0.8rem',margin:0}}>{getTime(appTime)}</p>
        <input value={appTime} min={0} max={duration} step="any" onChange={(e)=>{setseeker((e.target.value))}} type="range" style={{width:'100%'}}></input>
        <p className='scaling-animation' style={{fontWeight:500,fontSize:'0.8rem',margin:0}}>{getTime(duration)}</p>
    </div>
  )
}

export default Seeker