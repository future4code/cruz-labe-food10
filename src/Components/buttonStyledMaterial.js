import Button from "@material-ui/core/Button";
import {styled} from '@material-ui/core/styles'

const MyButton = styled(Button)({
  width: '90px',
  height: '32px',
  borderRadius: '0',
  borderBottomRightRadius: '8px',
  borderTopLeftRadius: '8px',
  fontSize: '12px',
  color: (props=>props.add? 'black':''),
  border: (props=>props.add? '1px solid black':''),
  textTransform: 'lowercase',
})


export default MyButton