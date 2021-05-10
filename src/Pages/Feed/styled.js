import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress';

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(415px, 100%);
  height: min(800px, 100%);
  @media (min-width: 416px) {
    border: 1px solid #787878;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 178px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  width: 100%;
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

export const MyCircularProgress = styled(CircularProgress)`
  color:#ec3d47;
`

export const ContentRestaurant = styled.div`
  width: 100%;
  height: calc(100% - 230px);
  overflow-y: auto;
  overflow-x: hidden;
`