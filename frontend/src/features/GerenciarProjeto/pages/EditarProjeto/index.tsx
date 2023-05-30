import { useState, useEffect } from 'react';
import { carregarProjeto, atualizarProjeto } from '../../services/projetoService';
import { Footer, Header } from "../../../../components";
import { Typography, Card, CardContent, Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import api from '../../../../services/api';


const EditarProjeto = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const userId = "95cfb5d3-106a-46bc-87ea-13083d67a175";


  useEffect(() => {
    carregarProjeto(userId).then((res) => setTitle(res.data.nome))
  }, []);

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