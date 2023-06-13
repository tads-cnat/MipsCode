import { useEffect, useState } from "react";
import { Header } from "../../../../components";
import { Typography, Box, Button } from '@mui/material';
import { Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { iTurma } from "../../../../types/iTurmas";
import { listarTurmas } from "../../services/turmasService";
import { excluirTurma } from "../../services/turmasService";


const VerTurmas = () => {
  const [turmas, setTurmas] = useState<iTurma[]>([]);
  const navigate = useNavigate();

  async function getClasses(){
    const userId = sessionStorage.getItem("userId");
    if(!userId){
      return "User Not Found";
    }
    try {
      const res = await api.get(`/users/${userId}`)
      if (res && res.data && res.data.class) {
        setTurmas(res.data.class) 
      }
    } catch (error) {
      if(error){
        return error;
      }
    }
  }

  useEffect(() => {
    getClasses();
    console.log()
  }, []);
  
  async function carregarTurmas() {
    try {
      const response = await listarTurmas();
      if (response && response.data) {
        setTurmas(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const turma: iTurma = {
      id: '', // Adicione um ID vazio, que será preenchido posteriormente
      title: '',
      description: '',
      content: '',
      userId: sessionStorage.getItem("userId") || '', // Adicione o userId correspondente ao usuário atual
    };
    navigate('/criar-turma/', { state: { turma } });
  }


  function handleClickEditar(turmaId: string) {
    navigate(`/editar-turma?id=${turmaId}`, { state: { turmaId: turmaId } });
  }
    
  async function handleExcluirTurma(userId: string) {
    getClasses()
    try {
      await excluirTurma(userId);
      await carregarTurmas ();
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
            Minhas Turmas
        </Typography>
        <div><br></br></div>

        <nav className="classes-buttons">
          <Button variant="contained" color="secondary" onClick={handleClickCriar}><AddBoxOutlinedIcon/><span>Criar nova Turma</span></Button>
        </nav>

        {turmas.map((turma,index) => (
          <Card key={index} variant="outlined">
            <CardContent>
              <div className="col">
                <div className="row">
                  <Typography component={'span'} variant="h5">{turma.title}</Typography>
                </div>
                <div className="row">
                  <br></br>
                </div>
                <div className="row">
                  <Typography component={'span'} variant="body1">{turma.description}</Typography>
                </div>
                <div className="row">
                  <Typography component={'span'} variant="body2" color="secondary">
                    {turma.content}
                  </Typography>
                </div>
              </div>
            </CardContent>
            <CardActions>
              <Button color="secondary" variant="outlined" onClick={() => handleClickEditar(turma.id || '')}>Editar</Button>

              <Button 
                type="submit"
                color="error" 
                variant="outlined"
                onClick={() => 
                window.confirm("Tem certeza que deseja excluir esta turma?") &&
                handleExcluirTurma(turma.id || '')
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

export default VerTurmas;
