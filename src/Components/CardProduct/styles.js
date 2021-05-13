import styled from 'styled-components'

export const Card = styled.div`
  width:100%;
  display:flex;
  border:1px solid #E5E5EA;
  border-radius:8px;
  height: 112px;
  margin-bottom: 8px;
`;

export const DivImg = styled.div`
  width: 97px;
  height: 112px;
  display: flex;
  align-items: center;
`

export const Img = styled.img`
  width: 97px;
`;

export const Description = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  padding-left: 16px;
  box-sizing: border-box;
`

export const TopText = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  >p{
    padding: 0;
    margin: 0;
    color: #e86e5a;
    :nth-child(2){
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e86e5a;
      box-sizing: border-box;
      border-top-right-radius: 8px;
      border-bottom-left-radius: 8px;
      margin-bottom: 1px;
    }
  }
`

export const MiddleText = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #b8b8b8;
  overflow-y: auto;
`

export const BottomText = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  >p{
    margin: 0;
    height: 40px;
    box-sizing: border-box;
    padding-top: 6px;
  }
  margin-top: 1px;
`

export const DivAlert = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`