import { useState, useEffect } from 'react';
import { carregarProjeto, atualizarProjeto } from '../../services/projetoService';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../../components/Header';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Footer from '../../../../components/Footer';

const EditarProjeto = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [projetoId, setProjetoId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projetoId = params.get("id");
    if (projetoId) {
      carregarProjeto(projetoId).then((projeto) => {
        if (projeto && projeto.data) {
          setTitle(projeto.data.title);
          setDescription(projeto.data.description);
          setContent(projeto.data.content);
          setProjetoId(projetoId);
        }
      });
    }
  }, [location.search]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const res = await atualizarProjeto(title, description, content, projetoId);
      if (res) {
        navigate('/ver-projetos');
      }
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <>
      <Header />
      
      <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Card>
          <CardContent>
            <Box display='flex' flexDirection='column' gap={2} width={550} alignContent={'center'}>
            <form onSubmit={handleSubmit}>
              <Typography color='text.primary' variant='h6' align='center'>EDITAR PROJETO</Typography>



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
              <Button color="secondary" variant="contained" type="submit">Salvar</Button>     
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


export default EditarProjeto;