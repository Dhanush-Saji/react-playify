import * as React from 'react'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

const Control = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
        <MdSkipPrevious size={20} color="#FFF" />
        <BsFillPauseFill cursor={'pointer'} size={35} color="#FFF" />
        {/* <BsFillPlayFill cursor={'pointer'} size={35} color="#FFF" /> */}
        <MdSkipNext size={20} color="#FFF" />
    </div>
  )
}

export default Control