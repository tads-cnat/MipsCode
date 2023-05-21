import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import {Header, Footer} from '../../components/';
import React from 'react';

export default function Home(){
  const navigate = useNavigate();

  function handleClickCadastro(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/cadastro/');
  }
  

  function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/criar-projeto/');
  }

  function handleClickVer(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/ver-projetos/');
  }

  function handleClickLogin(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/login/');
  }
  
  return (
    <>
    <Header/>
    <Button color='secondary' size='small' variant='text' type='submit' onClick={handleClickCadastro}>Cadastro</Button>
    <Button color='secondary' size='small' variant='text' type='submit' onClick={handleClickLogin}>Login</Button>
    <Box sx={{textAlign: 'center', alignItems: 'center', height: 260, mx: 'auto', my: { xs: 5, sm: 10 }, '& button': { m: 1 } }}>
      
      <Button color='secondary' size="small" variant="contained" type="submit" onClick={handleClickCriar}>Criar Novo Projeto</Button>
      <Button color='secondary' size="small" variant="outlined" type="submit" onClick={handleClickVer}>Ver todos os projetos</Button>

    </Box>
    <Footer/>
    </>
  )
}


