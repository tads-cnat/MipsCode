import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import api from '../../../../services/api';
import { iTurma } from '../../../../types/iTurmas';
import { criarTurmas } from '../../services/turmasService';
import { Footer } from '../../../../components';

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
    <Box 
      width='100vw' 
      height='100vh' 
      display='flex' 
      alignItems='center' 
      justifyContent='center' 
      sx={{textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' }} }
    >
      <Card>
        <CardContent >
        <Box  display='flex' flexDirection='column' gap={2} width={550} alignContent={'center'}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <Typography  color='text.primary' variant='h6' align='center'>Criar Turma</Typography>

              {/* Nome */}
              <TextField 
                id="outlined-helperText-title"
                label="Nome da Turma"
                type="text"
                name="title"
                onChange={(event) => setClassName(event.target.value)}
                color="secondary"
                required
        
              />

              {/* Descrição */}
              <TextField 
                id="outlined-helperText-description"
                label="Matéria"
                type="text"
                name="description"
                onChange={(event) => setClassDescription(event.target.value)}
                color="secondary"
                required
              />  
              
              <CardActions>
                <Box width='100%' display='flex' justifyContent='center' gap={2}>
                  <Button color="secondary" variant="outlined" onClick={handleClickCancelar}>Cancelar</Button>     
                  <Button color="secondary" variant="contained" type="submit">Criar</Button>     
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
};
export default CriarTurma;