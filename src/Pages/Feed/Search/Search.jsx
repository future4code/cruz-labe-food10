import React, {useState} from 'react'
import {ImgSearch, DivInput, Input, All, DivBack, ImgBack, P} from "./styled";
import iconSearch from '../../../Assets/Img/search.svg'
import {useInput} from "../../../Hooks/useInput";
import iconBack from '../../../Assets/Img/back.svg'

export default function Search({restaurants}){
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useInput()

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
          value={input}
          onChange={setInput}
        />
      </DivInput>
      {focus &&
        <div>oi</div>
      }
    </All>
  )
}