import * as React from 'react'
import { IoClose, IoMusicalNotes } from 'react-icons/io5';
import { TrackTypes } from '../../utils/types';

const Track = ({isPlaying,image='',title='',subtitle=''}:TrackTypes) => {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
        <div className={` ${isPlaying?'rotate-div':''} cover-div`} style={{display:'flex',width:'3rem',height:'3rem',alignItems:'center',justifyContent:'center',borderRadius:'50%'}}>
          {
            image?
            <img src={image} alt="icon" style={{borderRadius:'50%',objectFit:'cover',width:'3rem',height:'3rem'}} />:
            <IoMusicalNotes fontSize={'1.5rem'} />
          }
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
            <p style={{maxWidth:'8rem',fontWeight:600,fontSize:'1rem',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',margin:0}}>{title}</p>
            <p style={{maxWidth:'8rem',fontWeight:400,fontSize:'0.7rem',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',opacity:'0.5',margin:0}}>{subtitle}</p>
        </div>
        <div style={{display:'none',marginLeft:'auto',cursor:'pointer',height:'2rem',width:'2rem',borderRadius:'50%',border:'1px solid white',alignItems:'center',justifyContent:'center'}}>
        <IoClose fontSize={'1.1rem'} />
        </div>
    </div>
  )
}

export default Track