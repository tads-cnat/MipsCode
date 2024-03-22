import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import api from '../../../../services/api';
import { iTurma } from '../../../../types/iTurmas';
import { criarTurmas } from '../../services/turmasService';
import { Footer } from '../../../../components';
import { Container, Grid } from '@mui/material';

const CriarTurma = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [professorId, setProfessorId] = useState("");
  const [className, setClassName] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [cod, setCod] = useState("");

  async function getData() {
    const professorId = sessionStorage.getItem("userId");

    if (!professorId) {
      return "User Not Found";
    }

    try {
      const res = await api.get(`/users/${professorId}`);
      if (res) {
        setProfessorId(res.data.id);
      }
    } catch (error) {
      if (error) {
        return error;
      }
    }
  }

  useEffect(() => {
    const turma: iTurma = location.state?.turma;
    if (turma) {
      setProfessorId(turma.professorId);
      setClassName(turma.className);
      setClassDescription(turma.classDescription);
      setCod(turma.cod);
    }
  }, [location.state]);

  useEffect(() => {
    getData();
    console.log("teste", professorId);
  }, [professorId]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const turma: iTurma = { professorId, className, classDescription, cod};

    try {
      await criarTurmas(turma);
      navigate("/ver-turmas");
    } catch (error) {
      console.error(error);
    }
  }

  function handleClickCancelar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/ver-turmas');
  }

  return (
    <>
    <Header/>
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 6, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

        <Typography sx={{ mb: 4, mt: 4 }} color='text.primary' component="h1" variant="h6">
          CRIAR TURMA
        </Typography>

        <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data" sx={{ mt: 3, textAlign: 'center' }}>

          <Grid container spacing={4} >

            <Grid item xs={12}>
              {/* Nome */}
              <TextField
                required
                fullWidth
                name="title"
                type="text"
                id="outlined-helperText-title"
                placeholder="Nome da Turma"
                color="info" focused
                onChange={(event) => setClassName(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              {/* Descrição */}
              <TextField
                required
                fullWidth
                name="description"
                type="text"
                id="outlined-helperText-title"
                placeholder="Matéria"
                color="info" focused
                onChange={(event) => setClassDescription(event.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                onClick={handleClickCancelar}
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


          </Grid>
        </Box>
      </Box>
    </Container>
    <Footer/> 
    </>
  );
};
export default CriarTurma;
