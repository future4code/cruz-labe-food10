import React, {useState, useEffect} from 'react'
import {ImgSearch, DivInput, Input, All, DivBack, ImgBack, P, Content, ContentRestaurant} from "./styled";
import iconSearch from '../../../Assets/Img/search.svg'
import {useInput} from "../../../Hooks/useInput";
import iconBack from '../../../Assets/Img/back.svg'
import CardRestaurant from "../../../Components/CardRestaurant/CardRestaurant";

export default function Search({restaurants}){
  const [focus, setFocus] = useState(false);
  const [input, setInput] = useInput()
  const [render, setRender] = useState([])

  useEffect(()=>{
    setTimeout(()=>{
      const newRender = []
      if(input.length>0) {
        for(const restaurant of restaurants){
          if(restaurant.name.toLowerCase().includes(input.toLowerCase())){
            newRender.push(
              <CardRestaurant page={'Feed'} id={restaurant.id} key={restaurant.id}/>
            )
          }
        }
        if(newRender.length===0)newRender.push(<div key={1}>Não encontramos o restaurante :(</div>)
        setRender(newRender)
      }
      else{
        newRender.push(
          <></>
        )
        setRender(newRender)
      }
    }, 500)
    console.log('input', input)
  },[input])

  const clickBack = ()=>{
    setFocus(false)
    setInput('')
  }

  return(
    <All focus={focus}>
      <Content focus={focus}>
        {focus &&
          <DivBack>
            <ImgBack src={iconBack} onClick={clickBack}/>
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
          <ContentRestaurant>
            {render}
          </ContentRestaurant>
        }
      </Content>
    </All>
  )
}