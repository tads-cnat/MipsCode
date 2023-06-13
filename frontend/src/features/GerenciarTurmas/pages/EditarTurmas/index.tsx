import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { iTurma } from '../../../../types/iTurmas';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { atualizarTurma, carregarTurma } from '../../services/turmasService';

// import Footer from '../../../../components/Footer';

const EditarTurma = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [turma, setTurma] = useState<iTurma>({
    id: '',
    title: '',
    description: '',
    content: '',
    userId: '',
  });

  useEffect(() => {
    const turmaId = location.state?.turmaId;
    if (turmaId) {
      carregarTurma(turmaId).then((res) => {
        if (res) {
          setTurma(res);
        }
      });
    }
  }, [location.state]);


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const turmaId = location.state?.turmaId;
      atualizarTurma(turmaId, turma).then((res) => {
        if (res === "Success") { // Check for the correct success response
          navigate('/ver-turmas');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCancelar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/ver-turmas');
  }
 
  return (
    <>
    <Header />
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
            <form onSubmit={handleSubmit}>
              <Typography color='text.primary' variant='h6' align='center'>EDITAR TURMA</Typography>
                
                {/* Título */}
                <TextField 
              
                  id="outlined-helperText-t"
                  label="Título"
                  type="text"
                  variant="outlined" 
                  name="title"
                  value={turma.title} // Definir o valor do campo como o estado 'title'
                  onChange={(event) => setTurma({ ...turma, title: event.target.value })}
                  required 
                  color="secondary"
          
                />

                {/* Descrição */}
                <TextField 
                  id="outlined-helperText-d"
                  label="Descrição"
                  type="text"
                  variant="outlined" 
                  name="description"
                  value={turma.description}
                  onChange={(event) => setTurma({ ...turma, description: event.target.value })}
                  color="secondary"
                /> 
                {/* Conteúdo */}
                <TextField 
                  id="outlined-helperText-c"
                  label=""
                  type="file"
                  variant="outlined" 
                  name="content"
                  value={turma.content}
                  onChange={(event) => setTurma({ ...turma, content: event.target.value })}
                  inputProps={{
                    accept: '.txt'
                  }}
                />

                {/* Botoes */}
                <CardActions>
                    <Box width='100%' display='flex' justifyContent='center'>
                      <Button color="warning" variant="outlined"  onClick={handleClickCancelar}>Cancelar</Button>     
                      <Button color="secondary" variant="outlined" type="submit">Salvar</Button>   
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
};


export default EditarTurma;