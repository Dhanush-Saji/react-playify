import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from 'react-icons/bs'
import { VolumeBarTypes } from '../../utils/types'

const VolumeBar = ({volume,setvolume}:VolumeBarTypes) => {
  return (
    <div className='volumeControlDiv' style={{minWidth:'5rem',alignItems:'center',gap:'0.5rem',display:'none'}}>
        {volume != 0?<BsFillVolumeUpFill style={{cursor:'pointer'}} size={25} onClick={() => setvolume(0)} />:
        <BsFillVolumeMuteFill style={{cursor:'pointer'}} size={25} onClick={() => setvolume(0.5)} />}
        <input style={{cursor:'pointer'}} step={'any'} value={volume} min={0} max={1} onChange={(e)=>{setvolume((e.target.value))}} type="range"></input>
    </div>
  )
}

export default VolumeBar