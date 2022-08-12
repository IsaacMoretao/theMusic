import { useState } from 'react';

type Name= {
  nome: string,
  subNome: String
}

export function Musics(props:Name){

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
    border-b-[1px] border-white-100"
     style={{background: `${select}`, cursor: 'pointer'}}>

   

      <p className='text-[15px] min-w-[120px]'>
        <b>{props.nome}</b><br />
        {props.subNome}
      </p>
    </article>
  )
}