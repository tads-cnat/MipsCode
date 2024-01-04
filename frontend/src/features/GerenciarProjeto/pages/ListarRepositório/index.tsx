import React from "react";
import { useEffect, useState } from "react";
import { Breadcrumbs, Link, Typography, Card, CardContent, Box, Button, CardActions } from '@mui/material';
import { iProjeto } from "../../../../types/iProjetos";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../../components";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { listarProjetos, excluirProjeto } from "../../services/projetoService";
import api from "../../../../services/api";

const ListarProjetos = () => {
  const [projetos, setProjetos] = useState<iProjeto[]>([]);
  const navigate = useNavigate();

  async function getProjects() {
    const userId = sessionStorage.getItem("userId");
    if (!userId) {
      return "User Not Found";
    }
    try {
      const res = await api.get(`/users/${userId}`);
      if (res) {
        setProjetos(res.data.project);
      }
    } catch (error) {
      if (error) {
        return error;
      }
    }
  }

  useEffect(() => {
    getProjects();
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
    const projeto: iProjeto = {
      id: '',
      title: '',
      description: '',
      content: '',
      userId: sessionStorage.getItem("userId") || '',
    };
    navigate('/criar-projeto/', { state: { projeto } });
  }

  function handleClickImportar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/criar-projeto/');
  }

  function handleClickEditar(projetoId: string) {
    navigate(`/editar-projeto?id=${projetoId}`, { state: { projetoId: projetoId } });
  }

  async function handleExcluirProjeto(userId: string) {
    getProjects();
    try {
      await excluirProjeto(userId);
      await carregarProjetos();
      window.location.reload();
    } catch (error) {
      console.error('Erro ao excluir programa:', error);
    }
  }

  return (
    <>
      <Header />

      <Box>
        <Typography component="div" variant="h4" color="white" gutterBottom>
          Meus Projetos
        </Typography>

        <div><br /></div>

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="#fff" href="/dashboard">
        <HomeIcon fontSize="small" style={{ marginRight: '4px' }} /> 
           Dashboard
        </Link>
        <Typography color="inherit">Meus Projetos</Typography>
      </Breadcrumbs>

        <div><br /></div>

        <nav className="project-buttons">
          <Button variant="contained" color="secondary" onClick={handleClickCriar}><AddBoxOutlinedIcon /><span>Criar novo Projeto</span></Button>
          <Button variant="contained" onClick={handleClickImportar}><FolderOutlinedIcon /><span>Importar Projeto</span></Button>
        </nav>

        {projetos.map((projeto, index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <div className="col">
                <div className="row">
                  <Typography component={'span'} variant="h5">{projeto.title}</Typography>
                </div>
                <div className="row">
                  <br />
                </div>
                <div className="row">
                  <Typography component={'span'} variant="body1">{projeto.description}</Typography>
                </div>
                <div className="row">
                  <Typography component={'span'} variant="body2" color="secondary">
                    {projeto.content}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button color="secondary" variant="outlined" onClick={() => handleClickEditar(projeto.id || '')}>Editar</Button>

              <Button
                type="submit"
                color="error"
                variant="outlined"
                onClick={() =>
                  window.confirm("Tem certeza que deseja excluir este projeto?") &&
                  handleExcluirProjeto(projeto.id || '')
                }
              >Excluir</Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* <Footer/> */}
    </>
  );
}

export default ListarProjetos;
