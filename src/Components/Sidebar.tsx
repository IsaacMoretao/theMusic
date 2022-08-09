import { FolderSimplePlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { Musics } from "./SubComponents/Musics";
import { Audio, Controls, PlaybackControl, Player } from '@vime/react';
import Music from "../Assets/Music/BedroomPop.mp3";
import MusicUm from "../Assets/Music/TypeBeat2022-SLEPTON.mp3";
import MusicDois from "../Assets/Music/Moon-DoNotLookBack.mp3";
import MusicTres from "../Assets/Music/playback.mp3";
import MusicQuatro from "../Assets/Music/RapFreestyleBattleHipHop.mp3";
import MusicCinco from "../Assets/Music/TrapsoulTypeBeat-LastCall.mp3";


export function Sidebar(){

  return(
    <div className="
    w-[25%] h-[100vh]
    bg-black-100 border-r-[1px]
    border-white-200 overflow-y-hidden
    flex-col flex
    items-center px-[15px]">

      <strong
        className="
        size-[25px]
        text-xl mt-[10px]
        text-center ">

        THE MUSIC
      </strong>
      <section className='w-full'>

        <article
        className='
        flex items-center
        justify-around mt-[50px]
        p-[10px] border-b-[1px]
        border-white-200'>

          <FolderSimplePlus size={32} color="#f5f5f5" weight="bold" />
          <span className="font-bold">ADD MÚSIC</span>

        </article>
        

      </section>
      <section className="p-[10px] overflow-y-scroll w-full overflow-x-hidden">

      <article className='flex justify-between items-center '>
          <Player loop className='Player' style={{width: '10px', height: '20px'}}>
            <Audio >
              <source data-src={Music} type="audio/mp3" />
            </Audio>
            <Controls pin="center"  >
              <PlaybackControl hideTooltip
              style={{
                fontSize: '20px',
                color: 'White'
              }}/>
            </Controls>
          </Player>
          <Musics />
        </article>

        <article className='flex justify-between items-center '>
          <Player loop className='Player' style={{width: '10px', height: '20px'}}>
            <Audio >
              <source data-src={MusicUm} type="audio/mp3" />
            </Audio>
            <Controls pin="center"  >
              <PlaybackControl hideTooltip
              style={{
                fontSize: '20px',
                color: 'White'
              }}/>
            </Controls>
          </Player>
          <Musics />
        </article>
        <article className='flex justify-between items-center '>
          <Player loop className='Player' style={{width: '10px', height: '20px'}}>
            <Audio >
              <source data-src={MusicDois} type="audio/mp3" />
            </Audio>
            <Controls pin="center"  >
              <PlaybackControl hideTooltip
              style={{
                fontSize: '20px',
                color: 'White'
              }}/>
            </Controls>
          </Player>
          <Musics />
        </article>
        <article className='flex justify-between items-center '>
          <Player loop className='Player' style={{width: '10px', height: '20px'}}>
            <Audio >
              <source data-src={MusicTres} type="audio/mp3" />
            </Audio>
            <Controls pin="center"  >
              <PlaybackControl hideTooltip
              style={{
                fontSize: '20px',
                color: 'White'
              }}/>
            </Controls>
          </Player>
          <Musics />
        </article>
        <article className='flex justify-between items-center '>
          <Player loop className='Player' style={{width: '10px', height: '20px'}}>
            <Audio >
              <source data-src={MusicQuatro} type="audio/mp3" />
            </Audio>
            <Controls pin="center"  >
              <PlaybackControl hideTooltip
              style={{
                fontSize: '20px',
                color: 'White'
              }}/>
            </Controls>
          </Player>
          <Musics />
        </article>
        <article className='flex justify-between items-center '>
          <Player loop className='Player' style={{width: '10px', height: '20px'}}>
            <Audio >
              <source data-src={MusicCinco} type="audio/mp3" />
            </Audio>
            <Controls pin="center"  >
              <PlaybackControl hideTooltip
              style={{
                fontSize: '20px',
                color: 'White'
              }}/>
            </Controls>
          </Player>
          <Musics />
        </article>

        


      </section>
      <a href="https://github.com/IsaacMoretao" className="mt-auto font-bold">&copy; Isaac Moretão</a>
    </div>
  )
}


