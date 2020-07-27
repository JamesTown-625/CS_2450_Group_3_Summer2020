import { createMuiTheme } from '@material-ui/core/styles';


export default createMuiTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#FFFFFF'
        }
    },
    overrides: {
        MuiTextField: {
            root: {
                color: '#FFFFFF'
            }
        },
        MuiInputBase: {
            root: {
                color: '#FFFFFF'
            }
        },

    }
});