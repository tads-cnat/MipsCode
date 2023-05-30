import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarProjetos } from '../../services/projetoService';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { iProjeto } from '../../../../types/iProjetos';
import Footer from '../../../../components/Footer';

const CriarProjeto = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const userId = "95cfb5d3-106a-46bc-87ea-13083d67a175";

  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
      const projeto: iProjeto = {title, description, content, userId};

      try {

        const res = await criarProjetos( projeto )
        if(res){
          () => navigate('/')
        }
//      criarProjetos( projeto ).then();
        console.log('O botão foi clicado!');
      } catch (error) {
        console.log(error)
      }

  }

  return (
    <>
    <Header/>
    <Box 
      width='100vw' 
      height='100vh' 
      display='flex' 
      alignItems='center' 
      justifyContent='center' 
      sx={{textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' }} }
    >
      <Card>
        <CardContent>
        <Box display='flex' flexDirection='column' gap={2} width={550} alignContent={'center'}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Typography  color='text.primary' variant='h6' align='center'>CRIAR NOVO PROJETO</Typography>

            {/* Título */}
            <div className="row" color='secondary'>
            <TextField 
            
              id="outlined-helperText"
              label="Título"
              type="text"
              variant="outlined" 
              name="title"
              onChange={(event) => setTitle(event.target.value)}
              required 
              color="secondary"
      
            /></div>

            {/* Descrição */}
            <div className="row">
            <TextField 
              id="outlined-helperText"
              label="Descrição"
              type="text"
              variant="outlined" 
              name="description"
              onChange={(event) => setDescription(event.target.value)}
              color="secondary"
            />  </div>

            {/* Conteúdo */}
            <div className="row">
            <TextField 
              id="outlined-helperText"
              label=""
              type="file"
              variant="outlined" 
              name="content"
              onChange={(event) => setContent(event.target.value)}
              inputProps={{
                accept: '.txt'
              }}
            /></div>
            
            <CardActions>
              <Box width='100%' display='flex' justifyContent='center'>
              <Button color="secondary" variant="contained" type="submit">Confirmar</Button>     
              </Box>       
            </CardActions>

          </form>
        </Box>
        </CardContent>
      </Card>
    </Box>
    <Footer/>
    </>
  );
}
export default CriarProjeto;