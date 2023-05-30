import { useState, useEffect } from 'react';
import { carregarProjeto, atualizarProjeto } from '../../services/projetoService';
import { Footer, Header } from "../../../../components";
import { useParams } from 'react-router-dom';
import { headers } from '../../../../data';
import { Typography, Card, CardContent, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';


const EditarProjeto = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [projectId,setProjectId] = useState("")
  const userId = projectId;
  const [data,setData] = useState()





  async function getProjectData(id: string){
    console.log("teste",id)
    if(!id){
      return "Project Not Found";
    }
  
    try {
      const resApi = await api.get(`projects/${id}`, {
        headers: headers(),
      });
      if(resApi){
        setData(resApi.data) 
      }
      
    } catch (error) {
      if(error){
        return error;
      }
    }
}

  useEffect(() => {
    const id = (new URLSearchParams(window.location.search)).get("id")
    if(id){
      console.log("project id",id)
      setProjectId(id)
    }
  }, [projectId]);

  useEffect(() => {
    if(projectId){
      getProjectData(projectId)
    }

    if(data){
      console.log("conteudo",data)
    }
  }, [data])
  
  

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    atualizarProjeto(title, description, content, userId)
    .then(() => navigate('/ver-projetos'));
  }

  return (
    <>
      <Header />
      <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Card>
          <CardContent>
            <Box display='flex' flexDirection='column' gap={2} width={550} alignContent={'center'}>
              <Typography color='text.primary' variant='h6' align='center'>EDITAR PROJETO</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  id='title'
                  label='Título'
                  variant='outlined'
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                  id='description'
                  label='Descrição'
                  variant='outlined'
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
                <TextField
                  id='content'
                  label='Conteúdo'
                  variant='outlined'
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                />
                <Button color='secondary' variant='contained' type='submit'>Salvar</Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Footer />
    </>
  );
};

export default EditarProjeto;