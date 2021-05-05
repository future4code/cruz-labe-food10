import styled from 'styled-components'

export const All = styled.aside`
  width: 360px;
  height: 118px;
  background-color: #e86e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Img = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 24px;
`

export const DivText = styled.div`
  margin: 24px 0;
  >p{
    :nth-child(1){
      color:  white;
    }
  }
`