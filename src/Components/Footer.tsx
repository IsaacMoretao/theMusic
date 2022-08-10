import { CaretCircleDoubleLeft, CaretCircleDoubleRight, Disc } from "phosphor-react";
import { useState } from "react";

interface dataMusic {
  Name: any;

}



export function Nav(props:dataMusic){

  function MusicInFooter() {
    const [select, setSelect] = useState<any>();

    console.log(`${props.Name}`)
  }
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
        </div>

        <figure>
          <CaretCircleDoubleRight size={35} />
        </figure>
        
      </nav>
      <Disc size={32} />
    </footer>
  )
}