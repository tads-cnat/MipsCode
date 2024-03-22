import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { criarProjetos } from '../../services/projetoService';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { iProjeto } from '../../../../types/iProjetos';
import api from '../../../../services/api';
import { Container, Grid } from '@mui/material';

const CriarProjeto = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserid] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  async function getData() {
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      return "User Not Found";
    }

    try {
      const res = await api.get(`/users/${userId}`);
      if (res) {
        setUserid(res.data.id);
      }
    } catch (error) {
      if (error) {
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
    getData();
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const projeto: iProjeto = { title, description, content, userId };

    try {
      await criarProjetos(projeto);
      setFeedbackMessage("Projeto criado com sucesso!");
      setShowFeedback(true);

      setTimeout(() => {
        setShowFeedback(false);
        navigate('/ver-projetos');
      }, 3000);
    } catch (error) {
      console.error(error);
      setFeedbackMessage("Erro ao criar o projeto. Tente novamente.");
      setShowFeedback(true);
    }
  }

//  const handleCloseFeedback = () => {
//    setShowFeedback(false);
//  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="xs">
        <Box sx={{ mt: 6, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

          <Typography sx={{ mb: 4, mt: 4 }} color='text.primary' component="h1" variant="h5">
            CRIAR NOVO PROJETO
          </Typography>

          <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data" sx={{ mt: 3, textAlign: 'center' }}>

            <Grid container spacing={4} >
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-helperText-title"
                  label="Título"
                  type="text"
                  variant="outlined"
                  name="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  color="info" focused
                  placeholder="Dê um título ao seu projeto."
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-helperText-description"
                  label="Descrição"
                  type="text"
                  variant="outlined"
                  name="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  color="info" focused
                  placeholder="Forneça uma breve descrição do seu projeto."
                />
              </Grid>

              <Grid item xs={12}> 
                <TextField
                  fullWidth
                  id="outlined-helperText-content"
                  label=""
                  type="file"
                  variant="outlined"
                  name="content"
                  color="info" focused
                  onChange={(event) => setContent(event.target.value)}
                  inputProps={{
                    accept: '.txt'
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  onClick={() => navigate('/ver-projetos')}
                  variant="outlined"
                  color="secondary"
                  size="large"
                  sx={{ mr:3.5, mb: 4  }}>
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{  ml:3.5, mb: 4  }}>
                  Confirmar
                </Button>
              </Grid>
              

                {showFeedback && (
                  <Typography color={feedbackMessage.includes("sucesso") ? 'green' : 'red'} variant='body1' align='center'>
                    {feedbackMessage}
                  </Typography>
                )}
            </Grid>
        </Box>

        </Box>

      </Container>

    </>
  );
};

export default CriarProjeto;
