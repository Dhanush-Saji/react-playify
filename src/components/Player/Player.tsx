import * as React from 'react'
import Track from '../Track/Track'
import Control from '../Controls/Control'
import Seeker from '../Seeker/Seeker'
import VolumeBar from '../VolumeBar/VolumeBar'
import { IoClose } from 'react-icons/io5'
import { PlayerTypes } from '../../utils/types'


const Player = ({theme='whiteTheme',isPlaying,setisPlaying,audio=[]}:PlayerTypes) => {
  const customTheme:string = theme == 'glass'?'glassTheme':
  theme == 'black'?'blackTheme':
  theme == 'blue'?'blueTheme':
  theme == 'purple'?'purpleTheme':
  'whiteTheme'
  const [appTime, setAppTime] = React.useState<number>(0);
  const [volume, setvolume] = React.useState<number | string>(0.3)
  const [seeker, setseeker] = React.useState<number>(0)
  const [duration, setduration] = React.useState<number>(0)
  const [index, setindex] = React.useState<number>(0)
  const [openPlayer, setopenPlayer] = React.useState<string>('')
  const ref = React.useRef(null) as any
  const handlePlay = () => {
    setisPlaying(true)
  };
  const handlePause = () => {
    setisPlaying(false)
  };
  React.useEffect(()=>{
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
        setopenPlayer('up')
      } else {
        ref.current.pause();
      }
    }
  },[isPlaying])
  React.useEffect(()=>{
    if (ref.current) {
      if (isPlaying) {
        ref.current.src = audio[index].audio;
        ref.current.play();
        setopenPlayer('up')
      } else {
        ref.current.pause();
      }
    }
  },[index])
  React.useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
    
  }, [volume]);
  React.useEffect(() => {
    ref.current.currentTime = seeker;
  }, [seeker]);

  const onEndedFn = () => {
       
  };
  const goToPrevSong = () => {
    setindex((prev)=>prev-1)
    setisPlaying(true);
  };
  const goToNextSong = () => {
    setindex((prev)=>prev+1)
    setisPlaying(true);
  };
  return (
    <div style={{display:'flex',flexDirection:'column'}} className={`music-player ${openPlayer == 'up'?'bottomToTopAnimation':openPlayer == 'down'?'toptoBottomAnimation':''} ${customTheme}`}>
    <div style={{display:'flex',gap:'0.5rem',flexDirection:'row',position:'relative',width:'100%',alignItems:'center',margin:'auto'}}>
        {audio?.length>0 && <Track title={audio[index].title} subtitle={audio[index].subtitle} isPlaying={isPlaying} image={audio[index].image} />}
        <div style={{alignItems:'center',display:'flex',flexDirection:'column',justifyContent:'center',margin:'auto',gap:'0.5rem'}}>
          {audio?.length>0 ?<>
          <Control goToPrevSong={goToPrevSong} goToNextSong={goToNextSong} arrayLength={audio.length} index={index} play={isPlaying} setisPlaying={setisPlaying} />
          <div className="webSeekerDiv">
          <Seeker appTime={appTime} duration={duration} setseeker={setseeker} />
          </div>
          </>:
          <h3 style={{color:'#fa2828'}}>No audio found!</h3>
        }
        <audio onEnded={onEndedFn} onPlay={handlePlay} onPause={handlePause} onTimeUpdate={(event) => setAppTime(event.target.currentTime)} ref={ref} src={audio[index].audio} onLoadedData={(e)=>setduration(e.target.duration)} />
        </div>
        <div style={{gap:'1rem',alignItems:'center',display:'flex'}}>
           {audio?.length>0 && <VolumeBar volume={volume} setvolume={setvolume} />}
            <div onClick={()=>{
              setopenPlayer('down')
              setindex(0)
              setisPlaying(false)
              setAppTime(0)
              setseeker(0)
              ref.current.currentTime = 0
            }} className='closeBtn' style={{display:'flex',marginLeft:'auto',cursor:'pointer',height:'2rem',width:'2rem',borderRadius:'50%',alignItems:'center',justifyContent:'center'}}>
        <IoClose fontSize={'1.1rem'} />
        </div>
        </div>
    </div>
    {audio?.length>0 && <div className="mobSeekerDiv">
    <Seeker appTime={appTime} duration={duration} setseeker={setseeker} />
    </div>}
  </div>
  )
}

export {Player}