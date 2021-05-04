import React, {useState} from 'react'
import {Img, DivInput, Input, All} from "./styled";
import icon from '../../../Assets/Img/search.svg'

export default function Search({restaurants}){
  const [focus, setFocus] = useState(false);
  return(
    <All focus={focus}>
      <DivInput>
        <Img src={icon} />
        <Input placeholder={'Restaurante'} onFocus={()=>setFocus(true)}/>
      </DivInput>
      {focus &&
        <div>oi</div>
      }
    </All>
  )
}