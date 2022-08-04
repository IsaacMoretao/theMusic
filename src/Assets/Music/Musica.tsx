import MusicUm from './Trapsoul Type Beat - Last Call.mp3'
import MusicDois from './Juice WRLD.mp3'
import MusicTres from './Moon-DoNotLookBack.mp3'
import MusicQuatro from './playback.mp3'
import MusicCinco from './Rap Freestyle Battle Hip Hop.mp3'
import MusicSeis from './Trapsoul Type Beat - Last Call.mp3'
import MusicSete from './Type Beat 2022 - SLEPT ON.mp3'

 type InfoMusic = {
  Títle: string;
 }

export function MusicaGet() {
  return(
    <>
      <MusicUm/>
      <MusicDois/>
      <MusicTres/>
      <MusicQuatro/>
      <MusicCinco/>
      <MusicSeis/>
      <MusicSete/>
    </>
  )
}