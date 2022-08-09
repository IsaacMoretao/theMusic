import { FolderSimplePlus } from "phosphor-react";
import { useEffect, useState } from "react";
import { MusicaGet } from '../Assets/Music/Musica'
import axios from 'axios'
import { Musics } from "./SubComponents/Musics";

type Repository = {
  Título: string;
  description?: string;
  clone_url?: string;
}

export function Sidebar(){
   const [movieList, setMovieList] = useState([{}]);
   
   /*
  useEffect(() =>{
    const loadAll = async () => {
      let list: Array<String> = await Musics.getHomeList();
      setMovieList(list);
    
    }
    loadAll();
  }, []);*/


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
      <section className="p-[10px] overflow-y-scroll w-full">

        <Musics/>

      </section>
      <a href="https://github.com/IsaacMoretao" className="mt-auto font-bold">&copy; Isaac Moretão</a>
    </div>
  )
}


