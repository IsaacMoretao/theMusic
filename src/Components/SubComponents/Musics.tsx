import { Player, Audio, Controls, PlaybackControl } from '@vime/react';
import { useState } from 'react';
import Moon from "../../Assets/Music/Moon-DoNotLookBack.mp3";

export function Musics(){

  const [select, setSelect] = useState<any>('#ffffff00');

  function Sumir(){
    if(select == '#000000'){
      setSelect('#ffffff00')
    }else if(select == '#ffffff00'){
      setSelect('#000000')
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
     focus:bg-sky-700"
     style={{background: `${select}`, cursor: 'pointer'}}>

      <Player loop style={{width: '20px', height: '20px'}}>
        <Audio >
          <source data-src={Moon} type="audio/mp3" />
        </Audio>
        
        <Controls pin="center"  >
          <PlaybackControl hideTooltip
          style={{
            fontSize: '20px',
            color: 'White'
          }}/>
        </Controls>
      </Player>

      <p className='text-[15px] max-w-[120px]'>
        <b>Nome da música</b><br />
        dsoifjpsaodijf
      </p>
    </article>
  )
}