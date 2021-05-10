import styled from 'styled-components'

export const Card = styled.div`
  width:360px;
  display:flex;
  border:1px solid #E5E5EA;
  border-radius:5px;
  height: 112px;
  margin-bottom: 8px;
  position: relative;
`;

export const DivImg = styled.div`
  width: 97px;
  height: 112px;
  display: flex;
  align-items: center;
  position: relative;
`

export const BlurImg = styled.div`
  background-image: url(${props=>props.photoUrl});
  background-size: 97px 112px;
  position: absolute;
  width: 97px;
  height: 112px;
  top: 0;
  filter: blur(2px);
  left: 0;
`

export const Img = styled.img`
  width: 97px;
  position: absolute;
  left: 0;
`;

export const Description = styled.div`
  height: 112px;
  padding: 0 16px;
  position: absolute;
  left: 97px;
  >p{
    :nth-child(1){
      color: #e86e5a;
      font-size: 16px;
    }
    :nth-child(2){
      color: #b8b8b8;
      font-size: 14px;
    }
  }
`

export const DivAlert = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`