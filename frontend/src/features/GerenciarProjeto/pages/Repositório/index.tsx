import { useEffect, useState } from "react";
import { listarProjetos } from "../../services/projetoService";
import { Footer, Header } from "../../../../components";
import { Typography, Card, CardContent, Box, Button } from '@mui/material';
import { iProjeto } from "../../../../types/iProjetos";
import { useNavigate } from "react-router-dom";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';


const Repositorio = () => {
  const [projetos, setProjetos] = useState<iProjeto[]>([]);
  const navigate = useNavigate();


  useEffect(() => {
    carregarProjetos();
  }, []);

  async function carregarProjetos() {
    try {
      const response = await listarProjetos();
      if (response && response.data) {
        setProjetos(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/criar-projeto/');
  }

  function handleClickImportar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/criar-projeto/');
  }


  return (
    <>
      <Header/>

      <Box>
        <Typography variant="h6" align="left" padding={5} gutterBottom color="primary.contrastText">
          Meus Projetos
        </Typography>

        <nav className="project-buttons">
          <Button variant="outlined" color="secondary" onClick={handleClickCriar}><AddBoxOutlinedIcon/><span>Criar novo Projeto</span></Button>
          <Button variant="contained" onClick={handleClickImportar}><FolderOutlinedIcon/><span>Importar Projeto</span></Button>        
        </nav>

        {projetos.map((projeto) => (
          <Card key={projeto.userId} variant="outlined">
            <CardContent>
              <Typography variant="h5">{projeto.title}</Typography>

              <Typography variant="body1">{projeto.description}</Typography>

              <Typography variant="body2" color="secondary">
                {projeto.content}
              </Typography>

              <Typography variant="body2" color="secondary">
                Criado por: {projeto.userId}
              </Typography>

            </CardContent>
          </Card>
        ))}
      </Box>

      <Footer/>
    </>
  );
}

export default Repositorio;
