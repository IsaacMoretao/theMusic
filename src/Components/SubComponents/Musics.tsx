import { Player, Audio, Controls, PlaybackControl, Youtube } from '@vime/react';
import { useState } from 'react';
import Music from "../../Assets/Music/Moon-DoNotLookBack.mp3";
import MusicUm from "../../Assets/Music/Bedroom Pop.mp3";
import MusicDois from "../../Assets/Music/Juice WRLD.mp3";
import MusicTres from "../../Assets/Music/playback.mp3";
import MusicQuatro from "../../Assets/Music/Juice WRLD.mp3";
import MusicCinco from "../../Assets/Music/Juice WRLD.mp3";


export function Musics(){

  const [select, setSelect] = useState<any>();

  function Sumir(){
    if(select != '#5656568c'){
      setSelect('#5656568c')
    }else if(select == '#5656568c'){
      setSelect('')
    } else{
      console.log('Algo deu errado')
    }
  }

  return(
    <article 
    onClick={Sumir}
    className="
    flex w-[100%]
    overflow-x-hidden overflow-y-hidden
    items-center justify-around p-[10px] 
    border-b-[1px] border-white-100
    hover:bg-stone-700 transition ease-in-out"
     style={{background: `${select}`, cursor: 'pointer'}}>

   

      <p className='text-[15px] max-w-[120px]'>
        <b>Nome da música</b><br />
        dsoifjpsaodijf
      </p>
    </article>
  )
}