import * as React from 'react'
import styled from 'styled-components'
import { R } from '../resources'
import { window } from 'browser-monads'
import sound from '../data/fun_sound_mock.mp3'

const Audio = window.Audio


const Container = styled.div`
  position: fixed;
  background: white;
  background-image: url(${R.image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  cursor: default;
  background-size: cover;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
`

const useAudio = (url: string) => {
  const [audio] = React.useState(new Audio(url));
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  React.useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, audio];
};


type HappyFinalProps = {
  
}

const HappyFinal = (props: HappyFinalProps, ref: any) => {
  const [playing, audio] = useAudio(sound);
  const [show, setShow] = React.useState(false)

  const handlePlay = () => {
    if(!playing) {
      audio.play()
      setShow(true)
    } 
  }

  const handleStop = () => {
    audio.pause()
    audio.currentTime = 0
    setShow(false)
  }

  React.useImperativeHandle(ref, () => ({
    play: handlePlay,
    stop: handleStop
  }))

  if(!show) return null

  return (
    <Container onClick={handleStop}>
    </Container>
  )
}

export default React.forwardRef(HappyFinal)
