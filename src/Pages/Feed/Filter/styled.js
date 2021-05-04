import styled from 'styled-components'

export const All = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  box-sizing: border-box;
`

export const Button = styled.button`
  border: none;
  color: ${props=>props.active? '#E86E5A' : 'black'};
  background-color: white;
`