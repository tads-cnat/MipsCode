import Button from '@mui/material/Button';
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';




export default function Home(){
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate('/criar-projeto/');
  }
  
  return (
    <>
    <Header/>
    <Box sx={{textAlign: 'center', alignItems: 'center', height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}>
      <Button variant="contained" type="submit" onClick={handleClick}>Criar Projeto</Button>
    </Box>
    </>
  )
}


