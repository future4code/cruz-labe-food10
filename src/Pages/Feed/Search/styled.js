import styled from 'styled-components'

export const All = styled.div`
  width: ${props=>props.focus? '100vw' : '100%'};
  height: ${props=>props.focus? '100vh' : 'auto'};
  position: ${props=>props.focus? 'fixed' : 'static'};
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`

export const Content = styled.div`
  width: min(415px, 100%);
  height: ${props=>props.focus? 'min(800px, 100%)' : '56px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`

export const DivInput = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 16px;
  height: 56px;
  position: relative;
`

export const ImgSearch = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  left: 33px;
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

export const ContentRestaurant = styled.div`
  width: 100%;
  height: calc(100% - 190px);
  margin-top: 8px;
  overflow-y: auto;
  overflow-x: hidden;
`