import styled from 'styled-components'

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width: 360px;
  height: 640px;
  border: 1px solid black;
`

export const Header = styled.header`
  width: 360px;
  height: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 360px;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  border-bottom: 1px solid #b8b8b8;
  >p{
    width: 175px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`