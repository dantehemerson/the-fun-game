import sound from './data/fun_sound_mock.mp3'
import rory from './data/rory.mp3'

type RType = {
  image: string,
  sound: any
}

export function initializeResources(happy: boolean): RType {
  return happy ? 
    {
      image: 'https://www.screengeek.net/wp-content/uploads/2019/06/the-bells-horror-short-movie.jpg',
      sound: rory
    } : {
      image: 'https://wallpaperscute.com/wp-content/uploads/2019/08/Jennie-Blackpink-Wallpaper.jpg',
      sound
    }
}