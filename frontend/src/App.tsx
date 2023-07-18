import './App.css'
import Rotas from './routes';
import { DarkTheme } from './assets/themes/dark';
import { useContext } from 'react';
import { AuthContext } from './services/authcontext';
import { ThemeProvider } from '@mui/material';

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {


  return (
    
    <div className='App'>
      <ThemeProvider theme={DarkTheme}>
      <Rotas/>
      </ThemeProvider>
    </div>
  )
}


