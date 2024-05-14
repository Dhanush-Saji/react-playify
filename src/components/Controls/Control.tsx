import * as React from 'react'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { ControlTypes } from '../../utils/types'

const Control = ({play,setisPlaying,arrayLength,index,goToNextSong,goToPrevSong}:ControlTypes) => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',gap:'0.5rem'}}>
        <button style={{border:'none',background:'none',opacity:index == 0?'0.5':'1'}} disabled={index == 0} onClick={goToPrevSong}>
          <div className='nextPrevBtn'>
        <MdSkipPrevious className='scaling-animation' size={20} style={{cursor:'pointer'}} />
          </div>
        </button>
        <div className='playpauseBtn scaling-animation' style={{display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'9999px'}}>
        {
          play?
          <BsFillPauseFill onClick={()=>setisPlaying(false)} cursor={'pointer'} size={35} />:
        <BsFillPlayFill style={{marginLeft:'1px'}} onClick={()=>setisPlaying(true)} cursor={'pointer'} size={35} />
        }
        </div>
        <button style={{border:'none',background:'none',opacity:index+1 == arrayLength?'0.5':'1'}} disabled={index+1 == arrayLength} onClick={goToNextSong}>
        <div className='nextPrevBtn'>
        <MdSkipNext className='scaling-animation' size={20} style={{cursor:'pointer'}} />
        </div>
        </button>
    </div>
  )
}

export default Control