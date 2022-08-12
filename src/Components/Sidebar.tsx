import { Copyright, FolderSimplePlus } from "phosphor-react";
import { Musics } from "./SubComponents/Musics";
import { Audio, Controls, PlaybackControl, Player, ScrubberControl } from '@vime/react';
import Music from "../Assets/Music/BedroomPop.mp3";
import MusicUm from "../Assets/Music/TypeBeat2022-SLEPTON.mp3";
import MusicDois from "../Assets/Music/Moon-DoNotLookBack.mp3";
import MusicTres from "../Assets/Music/playback.mp3";
import MusicQuatro from "../Assets/Music/RapFreestyleBattleHipHop.mp3";
import MusicCinco from "../Assets/Music/TrapsoulTypeBeat-LastCall.mp3";


export function Sidebar(){


  return(
    <>
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

          <Copyright size={32} color="#ffffff" weight="bold" />
          <span className="font-bold">IsaacMoretão</span>

        </article>
        
      </section>
      <section className="p-[10px] overflow-y-scroll w-full overflow-x-hidden">

        <FMusic />
        <FMusicUm/>
        <FMusicDois/>
        <FMusicTres/>
        <FMusicQuatro/>
        <FMusicCinco/>

      </section>
      <a href="https://github.com/IsaacMoretao" className="mt-auto font-bold">&copy; Isaac Moretão</a>
      
    </div>
   
    </>
  )
}


export function FMusic(){

  return(
    <article className='flex justify-between items-center hover:bg-stone-700 transition ease-in-out'>
      <Player className='Player'
      style={{
        width: '10px',
        position: 'absolute',
        height: '20px'
      }}>
        <Audio >
          <source data-src={Music} type="audio/mp3"/>
        </Audio>
        <div>

          <Controls  pin="center"> 
           <PlaybackControl hideTooltip
            style={{
              fontSize: '20px',
              color: 'White'
            }}/>
          <ScrubberControl />
          
            
          </Controls>
        </div>

        
      </Player>

      <Musics nome={"BedroomPop"} subNome={"Music..."} />
    </article>
  )
}
export function FMusicUm(){
  return(
    <article className='flex justify-between items-center hover:bg-stone-700 transition ease-in-out'>
      <Player className='Player'
      style={{
        width: '10px',
        position: 'absolute',
        height: '20px'
      }}>

        <Audio >
          <source data-src={MusicUm} type="audio/mp3" />
        </Audio>
        <Controls pin="center">
          <PlaybackControl hideTooltip
          style={{
            fontSize: '20px',
            color: 'White'
          }}/>
        </Controls>
      </Player>
      <Musics nome={"SLEPTON"} subNome={"Type Beat 2022"} />
  </article>
  )
}

export function FMusicDois(){
  return(
    <article className='flex justify-between items-center hover:bg-stone-700 transition ease-in-out'>
      <Player className='Player'
        style={{
          width: '10px',
          position: 'absolute',
          height: '20px'
        }}>
        <Audio>
          <source data-src={MusicDois} type="audio/mp3"/>
        </Audio>
        <Controls pin="center">
          <PlaybackControl hideTooltip
          style={{
            fontSize: '20px',
            color: 'White'
          }}/>
        </Controls>
      </Player>
      <Musics nome={"Moon"} subNome={"Do Not Look Back"} />
    </article>
  )
}

export function FMusicTres(){
  return(
    <article className='flex justify-between items-center hover:bg-stone-700 transition ease-in-out'>
      <Player className='Player'
        style={{
          width: '10px',
          position: 'absolute',
          height: '20px'
        }}>

        <Audio >
          <source data-src={MusicTres} type="audio/mp3" />
        </Audio>
        <Controls pin="center">
          <PlaybackControl hideTooltip
          style={{
            fontSize: '20px',
            color: 'White'
          }}/>
        </Controls>
      </Player>
      <Musics nome={"playback"} subNome={"Music..."} />
    </article>
  )
}

export function FMusicQuatro(){
  return(
    <article className='flex justify-between items-center hover:bg-stone-700 transition ease-in-out'>
      <Player className='Player'
        style={{
          width: '10px',
          position: 'absolute',
          height: '20px'
        }}>

        <Audio >
          <source data-src={MusicQuatro} type="audio/mp3" />
        </Audio>
        <Controls pin="center">
          <PlaybackControl hideTooltip
          style={{
            fontSize: '20px',
            color: 'White'
          }}/>
        </Controls>
      </Player>
      <Musics nome={"Rap Freestyle"} subNome={"Battle HipHop"} />
    </article>
  )
}
export function FMusicCinco(){
  return(
    <article className='flex justify-between items-center hover:bg-stone-700 transition ease-in-out'>
      <Player className='Player'
        style={{
          width: '10px',
          position: 'absolute',
          height: '20px'
        }}>

        <Audio >
          <source data-src={MusicCinco} type="audio/mp3" />
        </Audio>
        <Controls pin="center">
          <PlaybackControl hideTooltip
          style={{
            fontSize: '20px',
            color: 'White'
          }}/>
        </Controls>
      </Player>
      <Musics nome={"Trapsoul"} subNome={"LastCall"} />
    </article>
  )
}



