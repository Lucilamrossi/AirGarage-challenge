import { createTheme } from '@material-ui/core/styles';
import LuisGeorgeCafe from './fonts/Louis-George-Cafe.woff'

const louisGeorgeCafe = {
  fontFamily: 'Louis George Cafe',
  fontSize: 'inherit',
  src: `
    local('Louis-George-Cafe'),
    url(${LuisGeorgeCafe}) format('woff')
    url("//db.onlinewebfonts.com/t/a617b62cd8089465865a37c676da00e2.woff") format("woff")
  `,
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#fa824c',
      dark: '#333',
      light: '#fec',
      contrastText: '#fec',
    },
  },
  typography: {
    fontFamily: 'Louis George Cafe',
    
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [louisGeorgeCafe],
      },
    },
    // MuiButton: {
    //   containedPrimary: {
    //     '&:hover': {
    //       backgroundColor: 'black',
    //       color: '#FFFF01',
    //       fontWeight: 800,
    //     },
    //   },
    //   containedSecondary: {
    //     backgroundColor: 'black',
    //     color: 'white',
    //     '&:hover': {
    //       backgroundColor: '#FFFF01',
    //       color: 'black',
    //       fontWeight: 800,
    //     },
    //   },
    // },
  },
});

export default theme;