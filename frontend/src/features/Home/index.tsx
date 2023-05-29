import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Box from '@mui/material/Box';
import {Header, Footer} from '../../components/';
import React from 'react';
import banner from '../../assets/imgs/banner.png';
import { AuthContext } from '../../services/authcontext';

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

    <Grid container spacing={2} columns={16}  rowSpacing={1}>

      <Grid item xs={8}>
        <Box >
          <img src = { banner } alt = "BannerMC" width='800px' height='400px' />
        </Box>
      </Grid>

      <Grid item xs={8}>
        <Box width='800px' height='400px' display='flex' alignItems='center' justifyContent='center'>
        <Card>
          <CardContent>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Button color='secondary' size='small' variant='contained' type='submit' onClick={handleClickCadastro}>Cadastro</Button>
              {/* <Button color='secondary' size="small" variant="contained" type="submit" onClick={handleClickCriar}>Criar Novo Projeto</Button>
              <Button color='secondary' size="small" variant="outlined" type="submit" onClick={handleClickVer}>Ver todos os projetos</Button> */}
            </Box>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Button color='secondary' size='small' variant='contained' type='submit' onClick={handleClickLogin}>Login</Button>
            </Box>
          </CardContent>
        </Card>
        </Box>
      </Grid>

    </Grid>

    <Footer/>
    </>
  )
}


