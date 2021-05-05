import styled from 'styled-components'

export const All = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`

export const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  border-radius: 8px;
  border: ${props=>props.page==='Feed'? '1px solid #b8b8b8' : '0'};
  overflow: hidden;
  margin-bottom: 8px;
`

export const Img = styled.img`
  width: 100%;
  height: 120px;
  margin: 0;
  margin-bottom: 12px;
`

export const Name = styled.p`
  width: 100%;
  height: 18px;
  color: #e86e5a;
  margin: 0;
  margin-bottom: 8px;
  box-sizing: border-box;
  padding: ${props=>props.page==='Feed'?'0 16px':'0'};
`

export const Text = styled.p`
  width: 100%;
  height: 18px;
  color: #b8b8b8;
  margin: 0;
  margin-bottom: 8px;
  box-sizing: border-box;
  padding: ${props=>props.page==='Feed'?'0 16px':'0'};
`