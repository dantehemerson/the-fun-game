import * as React from 'react'
import styled from 'styled-components'
import { useAudio } from '../hooks/useAudio'
import { initializeResources } from '../resources'

const Container = styled.div`
  position: fixed;
  background: white;
  background-image: url(${(props: { image: string}) => props && props.image});
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

type HappyFinalProps = {
  happy: boolean 
}

const HappyFinal = ({ happy }: HappyFinalProps, ref: any) => {
  const [R] = React.useState(initializeResources(happy))
  const [playing, audio] = useAudio(R.sound)
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
    <Container onClick={handleStop} image={R.image}>
    </Container>
  )
}

export default React.forwardRef(HappyFinal)
