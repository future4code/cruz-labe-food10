import styled from 'styled-components'


export const Container = styled.div`
  width: min(415px, 100%);
  height: min(800px, 100%);
  overflow-x: hidden;
  overflow-y: auto;
`;
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
  width: 100%;
  box-sizing: border-box;
  padding-left: 16px;
  background-color: #eeeeee;
  height: 76px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  >p{
    :nth-child(1){
      color: #b8b8b8;
      height: 10px;
      width: 100%;
    }
    :nth-child(2){
      width: 100%;
      position: absolute;
      bottom:0;
    }
  }
`

export const Header = styled.header`
  width: min(415px, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  font-size: 16px;
`

export const CartEmpty = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`