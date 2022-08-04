import { CaretCircleDoubleLeft, CaretCircleDoubleRight, Disc } from "phosphor-react";
import { Play } from "./SubComponents/Musics";

export function Nav(){
  return(
    <footer className='
    flex justify-around
    items-center mt-auto
    w-full border-t h-[50px]
    bg-black-100'>
      <p>Nome da Musica</p>
      <nav className="flex justify-between items-center w-[150px] ">
        <figure >
          <CaretCircleDoubleLeft size={35} />
        </figure>
        
        <div className='
        p-[18px] rounded-full
        border border-white-500
        bg-white-100 h-[8px] w-[8px]
        flex justify-end items-center '>
          <Play />
        </div>

        <figure>
          <CaretCircleDoubleRight size={35} />
        </figure>
        
      </nav>
      <Disc size={32} />
    </footer>
  )
}