import styled from 'styled-components'
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export const All = styled.aside`
  width: 100%;
  height: 118px;
  background-color: #e86e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 56px;
  cursor: pointer;
`

export const Img = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 24px;
`

export const DivText = styled.div`
  margin: 24px 0;
  >p{
    :nth-child(1){
      color:  white;
    }
  }
`

export const AllOpen = styled.div`
  position: fixed;
  bottom: 56px;
  right: 0px;
`

export const MyMenuOpen = styled(MenuOpenIcon)`
  width: 30px;
  color: #e86e5a;
  transform: scale(1.5);
  cursor: pointer;
`