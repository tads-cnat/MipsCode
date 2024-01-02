import React, { useState, useEffect } from 'react';
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
import api from '../../../../services/api';

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

  const handleCloseFeedback = () => {
    setShowFeedback(false);
  };

  return (
    <>
      <Header />
      <Box
        width='100vw'
        height='100vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' } }}
      >
        <Card>
          <CardContent>
            <Box display='flex' flexDirection='column' gap={2} width={550} alignContent={'center'}>
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Typography color='text.primary' variant='h6' align='center'>CRIAR NOVO PROJETO</Typography>

                <TextField
                  id="outlined-helperText-title"
                  label="Título"
                  type="text"
                  variant="outlined"
                  name="title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  required
                  color="secondary"
                  helperText="Dê um título ao seu projeto."
                />

                <TextField
                  id="outlined-helperText-description"
                  label="Descrição"
                  type="text"
                  variant="outlined"
                  name="description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  color="secondary"
                  helperText="Forneça uma breve descrição do seu projeto."
                />

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
                      <Button
                        style={{ background: 'white', color: 'red' }}
                        onClick={() => navigate('/ver-projetos')}
                      >
                        Cancelar
                      </Button>
                      <Box width='40%' display='flex' justifyContent='center'>
                    <Button color="secondary" variant="contained" type="submit">
                      Confirmar
                    </Button>
                    </Box>
                  </Box>
                </CardActions>

                {showFeedback && (
                  <Typography color={feedbackMessage.includes("sucesso") ? 'green' : 'red'} variant='body1' align='center'>
                    {feedbackMessage}
                  </Typography>
                )}
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CriarProjeto;
