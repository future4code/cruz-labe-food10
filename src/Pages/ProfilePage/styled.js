import styled from 'styled-components'


export const EditImg = styled.img`
    padding: 2vw;
    float: right;
`

export const TitleContainer = styled.div`
    margin: 4vw 0 2vw 0;
`

export const Body = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 2vw 4vw;
`

export const Title = styled.p`
  text-align: center;
  margin: 0;
  padding-bottom: 4vw;
  border-bottom: 1px solid lightgray;
`

export const ProfileContainer = styled.div`
  text-align: left;
  margin: 0 4vw;
`

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
export const OrderTitle = styled.p`
  text-align: left;
  margin: 4vw;
  padding-bottom: 2vw;
  border-bottom: 1px solid black;
`

export const FooterContainer = styled.div`
  position: fixed;
  //left: 0;
  bottom: 0;
  width: min(415px, 100%);
  height: 15vw;
  color: white;
  text-align: center;
  background-color: white;
  border-top: 1px solid #b8b8b8;
`

export const HistoryOrderTitle = styled.p`
  text-align: center;
  margin: 4vw 4vw;
  padding-top: 4vw;
`

export const FooterImgContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 2vw;
    background-color: white;
`

export const FooterImg = styled.img`
    padding-top: 2vw;
`

export const OrderHistoryCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ffffff;
    border-radius: 4px;
`

export const OrderHistoryContainer = styled.div`
    margin: 4vw 0 2vw 0;
    background-color: white;
`

export const HistoryContainer = styled.div`
  text-align: left;
  padding: 2vw 8vw;
  padding-bottom: 1vw;
  background-color: white;
`

export const All = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  >div{
    width: min(415px, 100%);
    height: min(800px, 100%);
    @media (min-width: 416px) {
      border: 1px solid #787878;
    }
  }
`