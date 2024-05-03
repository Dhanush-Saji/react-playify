import * as React from 'react'

const Seeker = () => {
  return (
    <div style={{minWidth:'20rem',gap:'1rem',justifyContent:'center',display:'flex'}}>
        <p style={{color:'white',fontWeight:500,fontSize:'0.8rem'}}>0:00</p>
        <input type="range"></input>
        <p style={{color:'white',fontWeight:500,fontSize:'0.8rem'}}>05:00</p>
    </div>
  )
}

export default Seeker