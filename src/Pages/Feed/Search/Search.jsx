import React, {useState, useEffect} from 'react'
import {ImgSearch, DivInput, Input, All, DivBack, ImgBack, P} from "./styled";
import iconSearch from '../../../Assets/Img/search.svg'
import {useInput} from "../../../Hooks/useInput";
import iconBack from '../../../Assets/Img/back.svg'

export default function Search({restaurants}){
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useInput()
  const [render, setRender] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      if(input.length>0) {
        const newRender = []
        for(const restaurant of restaurants){
          if(restaurant.name.toLowerCase().includes(input.toLowerCase())){
            newRender.push(<div key={restaurant.id}>{restaurant.name}</div>)
          }
        }
        if(newRender.length===0)newRender.push(<div key={1}>Não encontramos o restaurante :(</div>)
        setRender(newRender)
      }
    }, 500)
  },[input])

  return(
    <All focus={focus}>
      {focus &&
        <DivBack>
          <ImgBack src={iconBack} onClick={()=>setFocus(false)}/>
          <P>Busca</P>
          <div></div>
        </DivBack>
      }
      <DivInput>
        <ImgSearch src={iconSearch} />
        <Input
          placeholder={'Restaurante'}
          onFocus={()=>setFocus(true)}
          // onBlur={()=>setFocus(false)}
          value={input}
          onChange={setInput}
        />
      </DivInput>
      {focus &&
        <>
          {render}
        </>
      }
    </All>
  )
}