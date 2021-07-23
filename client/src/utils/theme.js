import { createTheme } from '@material-ui/core/styles';
import LuisGeorgeCafe from './fonts/Louis-George-Cafe.woff';

const louisGeorgeCafe = {
  fontFamily: 'Louis George Cafe',
  fontSize: 'inherit',
  src: `
    local('Louis-George-Cafe'),
    url(${LuisGeorgeCafe}) format('woff')
  `,
};

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(250, 130, 76)',
      dark: 'rgb(68, 66, 66)',
      light: 'rgb(255, 238, 204)',
      contrastText: 'rgba(251, 246, 235, 0.664)',
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
  },
});

export default theme;
