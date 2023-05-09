import { createTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export const DarkTheme: ThemeOptions = createTheme({
  palette: {
    primary: {
      light: '#57F4BB',
      main: '#2EF2AA',
      dark: '#20A976',
      contrastText: '#000000',
    },
    secondary: {
      light: '#E04653',
      main: '#D91828',
      dark: '#97101C',
      contrastText: '#ffffff',
    },
    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
      contrastText: '#ffffff',
    },
    warning: {
      light: '#FFB74D',
      main: '#FFA726',
      dark: '#F57C00',
      contrastText: '#000000',
    },
    info: {
      light: '#4FC3F7',
      main: '#29B6F6',
      dark: '#0288D1',
      contrastText: '#000000',
    },
    success: {
      light: '#81C784',
      main: '#66BB6A',
      dark: '#388E3C',
      contrastText: '#000000',
    },
    background: {
      paper: '#333333',
      default: '#1A1B1F',
    }
  }
});