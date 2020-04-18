import * as React from 'react'
import { window } from 'browser-monads'

const Audio = window.Audio

export function useAudio(url: string) {
  const [audio] = React.useState(new Audio(url))
  const [playing, setPlaying] = React.useState(false)

  React.useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  React.useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, audio]
}
