import { useEffect, useState } from "react";
import { listarProjetos, excluirProjeto } from "../../services/projetoService";
import { Header } from "../../../../components";
import { Typography, Card, CardContent, Box, Button, CardActions } from '@mui/material';
import { iProjeto } from "../../../../types/iProjetos";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const Repositorio = () => {
  const [projetos, setProjetos] = useState<iProjeto[]>([]);
  const navigate = useNavigate();

  async function getProjects(){
    const userId = sessionStorage.getItem("userId");
    if(!userId){
      return "User Not Found";
    }
    try {
      const res = await api.get(`/users/${userId}`)
      if(res){
        setProjetos(res.data.project) 
      }
    } catch (error) {
      if(error){
        return error;
      }
    }
  }

  useEffect(() => {
    getProjects();
    console.log()
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
      id: '', // Adicione um ID vazio, que será preenchido posteriormente
      title: '',
      description: '',
      content: '',
      userId: sessionStorage.getItem("userId") || '', // Adicione o userId correspondente ao usuário atual
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
    getProjects()
    try {
      await excluirProjeto(userId);
      await carregarProjetos ();
      window.location.reload(); // Recarrega a página
    } catch (error) {
      console.error('Erro ao excluir programa:', error);
    }
  }

  return (
    <>
      <Header/>

      <Box>
      <div><br></br></div>

        <Typography component={'span'} variant="h5" align="left" padding={5} gutterBottom color="primary.contrastText">
          Meus Projetos
        </Typography>
        <div><br></br></div>

        <nav className="project-buttons">
          <Button variant="contained" color="secondary" onClick={handleClickCriar}><AddBoxOutlinedIcon/><span>Criar novo Projeto</span></Button>
          <Button variant="contained" onClick={handleClickImportar}><FolderOutlinedIcon/><span>Importar Projeto</span></Button>        
        </nav>

        {projetos.map((projeto,index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <div className="col">
                <div className="row">
                  <Typography component={'span'} variant="h5">{projeto.title}</Typography>
                </div>
                <div className="row">
                  <br></br>
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

export default Repositorio;
