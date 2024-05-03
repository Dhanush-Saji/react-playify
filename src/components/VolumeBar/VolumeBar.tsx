import * as React from 'react'

const VolumeBar = () => {
  return (
    <div style={{minWidth:'5rem',alignItems:'center',gap:'0.5rem'}}>
        <input type="range"></input>
    </div>
  )
}

export default VolumeBar