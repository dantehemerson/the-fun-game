import * as React from 'react'
import styled from 'styled-components'
import { R } from '../resources'
import { window } from 'browser-monads'
import sound from '../data/sound.mp3'

const Audio = window.Audio


const Container = styled.div`
  position: fixed;
  background: red;
  background-image: url(${R.image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
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
  show: boolean
}

const HappyFinal = ({ show}: HappyFinalProps) => {
  const [playing, audio] = useAudio(sound);
  if(!show) return null

  

  React.useEffect(() => {
    audio.play()
  }, [])
  return (
    <Container>

    </Container>
  )
}

export default HappyFinal
