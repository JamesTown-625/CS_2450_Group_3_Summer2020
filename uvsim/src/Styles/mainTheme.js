import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
    palette: {
        primary: {
            main: '#263238'
        },
        secondary: {
            main: '#EEEEEE'
        },
        action: {
            main: '#263238'
        }
    },
    overrides: {
        MuiTextField: {
            root: {
                color: ''
            }
        },
        MuiInputBase: {
            root: {
                color: ''
            }
        },
        MuiSvgIcon: {
            root: {
                color: '#263238',

            },
            fontSizeLarge: {
                fontSize: '3rem'
            }
        }

    }
});