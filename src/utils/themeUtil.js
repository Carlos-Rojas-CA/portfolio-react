import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#456e82',
      light: '#9bbaca',
      dark: '#1a2a32',
      contrastText: '#eef4f6',
    },
    secondary: {
        main: '#00A0C6',
        contrastText: '#eeeeee',
    },
    // background: {
    //     paper: '#e0e0e0',
    //     default: '#e0e0e0',
    // }
    /*
    success: {
        main: '#ccff90',
        contrastText: '#eeeeee'
    }
    */
  },
});


export default theme;