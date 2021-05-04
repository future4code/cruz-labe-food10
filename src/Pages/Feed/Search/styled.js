import styled from 'styled-components'

export const All = styled.div`
  width: ${props=>props.focus? '360px' : '328px'};
  height: ${props=>props.focus? '640px' : '56px'};
  position: ${props=>props.focus? 'fixed' : 'relative'};
  top:0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivInput = styled.div`
  width: 328px;
  height: 56px;
  position: relative;
`

export const Img = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  left: 17px;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 19px 8px 19px 56px;
  border-radius: 2px;
  border: 1px solid #E5E5EA;
  outline: 0;
  :focus,:hover{
    border: 1px solid #C7C7CC;
  }
`