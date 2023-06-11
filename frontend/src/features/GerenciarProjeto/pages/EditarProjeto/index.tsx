import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { carregarProjeto, atualizarProjeto } from '../../services/projetoService';
import { iProjeto } from '../../../../types/iProjetos';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import Footer from '../../../../components/Footer';

const EditarProjeto = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [projeto, setProjeto] = useState<iProjeto>({
    id: '',
    title: '',
    description: '',
    content: '',
    userId: '',
  });

  useEffect(() => {
    const projetoId = location.state?.projetoId;
    if (projetoId) {
      carregarProjeto(projetoId).then((res) => {
        if (res) {
          setProjeto(res);
        }
      });
    }
  }, [location.state]);


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const projetoId = location.state?.projetoId;
      atualizarProjeto(projetoId, projeto).then((res) => {
        if (res === "Success") { // Check for the correct success response
          navigate('/ver-projetos');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCancelar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/ver-projetos');
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
              <Typography color='text.primary' variant='h6' align='center'>EDITAR PROJETO</Typography>
                
                {/* Título */}
                <TextField 
              
                  id="outlined-helperText-t"
                  label="Título"
                  type="text"
                  variant="outlined" 
                  name="title"
                  value={projeto.title} // Definir o valor do campo como o estado 'title'
                  onChange={(event) => setProjeto({ ...projeto, title: event.target.value })}
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
                  value={projeto.description}
                  onChange={(event) => setProjeto({ ...projeto, description: event.target.value })}
                  color="secondary"
                /> 
                {/* Conteúdo */}
                <TextField 
                  id="outlined-helperText-c"
                  label=""
                  type="file"
                  variant="outlined" 
                  name="content"
                  value={projeto.content}
                  onChange={(event) => setProjeto({ ...projeto, content: event.target.value })}
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


export default EditarProjeto;