import styled from 'styled-components'

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Container = styled.div`
  width: min(415px, 100%);
  height: min(800px, 100%);
  overflow: hidden;
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
  flex-direction: column;
  justify-content: center;
  >p{
    margin: 0;
    padding: 0;
    :nth-child(1){
      color: #b8b8b8;
      margin-bottom: 8px;
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

export const ContentRestaurant = styled.div`
  width: 100%;
  height: 102px;
  padding: 16px 0;
  box-sizing: border-box;
`

export const DivPrice = styled.div`
  width: 100%;
  height: 52px;
  margin: 16px 0 12px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  >p{
    margin: 0;
  }
  >div{
    display: flex;
    justify-content: space-between;
    width: 100%;
    >p{
      margin: 0;
      :nth-child(2){
        color: #e86e5a;
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
`

export const DivPagamento = styled.div`
  width: 100%;
  margin: 12px 0 9px 0;
  display: flex;
  flex-direction: column;
  >div{
    :nth-child(1){
    box-sizing: border-box;
    width: 100%;
    height: 26px;
    border-bottom: 1px solid black;
  }
`

export const DivRadio = styled.div`
  margin-top: 11px;
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 300px);
  overflow-y: auto;
  margin: 0;
  padding: 0 16px;
  box-sizing: border-box;
`

export const Button = styled.button`
  height: 42px;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: #e86e5a;
  font-size: 16px;
  letter-spacing: -0.39px;
  cursor: pointer;
  border-radius: 2px;
  color: black;
`;