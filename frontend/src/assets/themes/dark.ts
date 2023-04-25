import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#141417',
      dark: '#141417',
      light: yellow[500],
      contrastText: '#2EF2AA',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  }
});

















// import { createTheme } from '@mui/material';

// export const DarkTheme = createTheme({
//   palette: {
//     primary: {
//       main: '#141417',
//       contrastText: '#2EF2AA',
//     },
//   }
// });