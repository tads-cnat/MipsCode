import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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
// import Footer from '../../../../components/Footer';
import api from '../../../../services/api';

const CriarProjeto = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [userId,setUserid] = useState("");


  async function getData(){
    const userId = sessionStorage.getItem("userId");

    if(!userId){
      return "User Not Found";
    }
  
    try {
      const res = await api.get(`/users/${userId}`)
      if(res){
        setUserid(res.data.id) 
      }
      
    } catch (error) {
      if(error){
        return error;
      }
    }
  }

  useEffect(() => {
    const projeto: iProjeto = location.state?.projeto;
    if (projeto) {
      setTitle(projeto.title);
      setDescription(projeto.description);
      setContent(projeto.content);
      setUserid(projeto.userId);
    }
  }, [location.state]);


  useEffect(() => {
    getData()
    console.log("teste",userId)
  }, [])

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const projeto: iProjeto = {title, description, content, userId};

      try {
        await criarProjetos(projeto);
        navigate('/ver-projetos');
      } catch (error) {
        console.error(error);
      }
  }


  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //     const projeto: iProjeto = {title, description, content, userId};
  //     try {
  //       const res = await criarProjetos( projeto )
  //       if(res){
  //         () => navigate('/ver-projetos')
  //       }
  //     } catch (error) {
  //       console.log(error)
  //     }

  // }

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
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
              <Typography  color='text.primary' variant='h6' align='center'>CRIAR NOVO PROJETO</Typography>

              {/* Título */}
              <TextField 
              
                id="outlined-helperText-title"
                label="Título"
                type="text"
                variant="outlined" 
                name="title"
                onChange={(event) => setTitle(event.target.value)}
                required 
                color="secondary"
        
              />

              {/* Descrição */}
              <TextField 
                id="outlined-helperText-description"
                label="Descrição"
                type="text"
                variant="outlined" 
                name="description"
                onChange={(event) => setDescription(event.target.value)}
                color="secondary"
              />  

              {/* Conteúdo */}
              <TextField 
                id="outlined-helperText-content"
                label=""
                type="file"
                variant="outlined" 
                name="content"
                onChange={(event) => setContent(event.target.value)}
                inputProps={{
                  accept: '.txt'
                }}
              />
              
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
    {/* <Footer/> */}
    </>
  );
}
export default CriarProjeto;