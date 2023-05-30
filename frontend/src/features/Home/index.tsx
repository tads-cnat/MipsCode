import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import {Header, Footer} from '../../components/';
import React from 'react';
import banner from '../../assets/imgs/banner.png';
import { AuthContext } from '../../services/authcontext';
import { Paper } from '@mui/material';

export default function Home(){
  const navigate = useNavigate();

  const { User } : any = AuthContext();

  function handleClickCadastro(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/cadastro/');
  }
  

  // function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   navigate('/criar-projeto/');
  // }

  // function handleClickVer(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   navigate('/ver-projetos/');
  // }

  function handleClickLogin(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/login/');
  }
  console.log(User)
  return (

    <>
    <Header/>
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Paper >
        <img src = { banner } alt = "BannerMC" width='800vw' height='400vh' />
      </Paper>
    </Box>
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Button color='secondary' size='small' variant='outlined' type='submit' onClick={handleClickCadastro}>Cadastro</Button>
      {/* <Button color='secondary' size="small" variant="contained" type="submit" onClick={handleClickCriar}>Criar Novo Projeto</Button>
      <Button color='secondary' size="small" variant="outlined" type="submit" onClick={handleClickVer}>Ver todos os projetos</Button> */}
      <Button color='secondary' size='small' variant='outlined' type='submit' onClick={handleClickLogin}>Login</Button>
    </Box>


    <Footer/>
    </>
  )
}


