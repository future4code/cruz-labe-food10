import { createMuiTheme } from '@material-ui/core/styles'
import { primaryColor, neutralColor, secondaryColor } from '../constants/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'black',
        },
        // secondary: {
        //     main: secondaryColor,

        // },         
        text: {
            primary: neutralColor
        }
    }
})

export default theme