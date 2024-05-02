import * as React from 'react'

const Track = () => {
  return (
    <div style={{display:'flex',alignItems:'center',gap:'1rem',width:'auto'}}>
        <div style={{display:'flex',width:'3rem',alignItems:'center',justifyContent:'center'}}>
            <img src='https://www.ciplamed.com/-/media/ciplamed/conference-higlights/ada-2023.jpg?updated=20240102100122' alt="icon" style={{borderRadius:'50%'}} />
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
            <p style={{maxWidth:'8rem',color:'white',fontWeight:500,fontSize:'1rem',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>Text1</p>
            <p style={{maxWidth:'8rem',color:'white',fontWeight:400,fontSize:'0.7rem',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',opacity:'0.5'}}>Text2</p>
        </div>
        <div style={{display:'flex',marginLeft:'auto',cursor:'pointer',color:'white',height:'2rem',width:'2rem',borderRadius:'50%',border:'1px solid white',alignItems:'center',justifyContent:'center'}}>
            
        </div>
    </div>
  )
}

export default Track