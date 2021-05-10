import styled from 'styled-components'

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
  background-color: white;
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

export const Category = styled.div`
  width: 100%;
  height: 26px;
  border-bottom: 1px solid black;
  margin-bottom: 7px;
`

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AllContent = styled.div`
  width: min(415px, 100%);
  height: min(800px, 100%);
  overflow: hidden;
  @media (min-width: 416px){
    border: 1px solid #787878;
  }
`

export const Content = styled.main`
  width: 100%;
  height: calc(100% - 130px);
  padding: 0 16px;
  box-sizing: border-box;
  overflow-y: auto;
`