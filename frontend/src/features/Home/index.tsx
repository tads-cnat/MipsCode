import Button from '@mui/material/Button';
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Repositorio from '../GerenciarProjeto/pages/ListarProjetos';
import Footer from '../../components/Footer';




export default function Home(){
  const navigate = useNavigate();

  function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/criar-projeto/');
  }

  function handleClickVer(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/ver-projetos/');
  }
  
  return (
    <>
    <Header/>
    <Box sx={{textAlign: 'center', alignItems: 'center', height: 260, mx: 'auto', my: { xs: 5, sm: 10 }, '& button': { m: 1 } }}>
      
      <Repositorio/> 
      <Button size="small" variant="contained" type="submit" onClick={handleClickCriar}>Criar Novo Projeto</Button>
      <Button size="small" variant="contained" type="submit" onClick={handleClickVer}>Ver todos os projetos</Button>

    </Box>
    <Footer/>
    </>
  )
}


