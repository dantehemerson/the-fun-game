import * as React from 'react'
import styled from 'styled-components'
import { R } from '../resources'
import sound from '../data/sound.mp3'


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
  const [audio] = React.useState(Audio ? new Audio(url) : null);
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => setPlaying(!playing);

  React.useEffect(() => {
      playing ? audio && audio.play() : audio && audio.pause();
    },
    [playing]
  );

  React.useEffect(() => {
    audio && audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio && audio.removeEventListener('ended', () => setPlaying(false));
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
    audio && audio.play()
  }, [])
  return (
    <Container>

    </Container>
  )
}

export default HappyFinal
