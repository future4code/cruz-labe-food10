import styled from 'styled-components'


export const Container = styled.div`
width:80%;
display:flex;
margin:10px;
border:1px solid #E5E5EA;
border-radius:5px;
`;
export const DivBack = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid #b8b8b8;
  box-sizing: border-box;
  padding: 0px 16px;
  margin-bottom: 8px;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:white;
  >div{
    width: 23px;
    height: 24px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`

export const ImgBack = styled.img`
  width: 23px;
  height: 24px;
  cursor: pointer;
`

export const P = styled.p`
  width: 175px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`

export const Card = styled.div`
width:80%;
display:flex;
margin:10px;
border:1px solid #E5E5EA;
border-radius:5px;
`;


export const Img = styled.img`
width:100px;
`;

export const AddressContainer = styled.div`
  text-align: left;
  padding: 4vw 8vw;
  padding-bottom: 1vw;
  background-color: #eeeeee;
`

export const AddressTitle = styled.p`
  text-align: left;
  margin: 0;
  color: #b8b8b8;
  `