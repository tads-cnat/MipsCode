import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iProfessor } from "../../../../types/iProfessores";
import { Box, Typography, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { cadastrarProfessor } from "../../services/cadastroService";


const ProfessorForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");


  async function handleSubmitProfessor(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
      const professorForm: iProfessor = {email, password, name, role};
      
      try {
        
        const res = await cadastrarProfessor( professorForm )
        if(res){
          () => navigate('/login')
        }

        console.log('O botão foi clicado!');
      } 
      
      catch (error) {
        console.log(error)
      }
  }

  return (
    <>
    <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' }} }>
      <Card>
        <CardContent>
        <Box display='flex' flexDirection='column' gap={2} width={550} alignContent={'center'}>
          <form onSubmit={handleSubmitProfessor} encType="multipart/form-data">
          <Typography  color='text.primary' variant='h6' align='center'>Sou Professor</Typography>

            {/* Email */}
            <div className="row" color='secondary'>
            <TextField 
              id="outlined-helperText"
              label="Email"
              type="email"
              variant="outlined" 
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required 
              color="secondary"
            /> </div>


            {/* Senha */}
            <div className="row" color='secondary'>
            <TextField 
              id="outlined-helperText"
              label="Senha"
              type="password"
              variant="outlined" 
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required 
              color="secondary"
            /> </div>

            {/* Nome */}
            <div className="row" color='secondary'>
            <TextField 
              id="outlined-helperText"
              label="Nome"
              type="name"
              variant="outlined" 
              name="name"
              onChange={(event) => setName(event.target.value)}
              required 
              color="secondary"
            /> </div>

            {/* Role */}
            <div className="row" color='secondary'>
            <TextField 
              id="outlined-helperText"
              label="Papel"
              type="role"
              variant="outlined" 
              name="role"
              onChange={(event) => setRole(event.target.value)}
              required 
              color="secondary"
            /> </div>

            <CardActions>
              <Box width='100%' display='flex' justifyContent='center'>
              <Button color="secondary" variant="contained" type="submit">Confirmar</Button>     
              </Box>       
            </CardActions>

            </form>
          </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );  
}
export default ProfessorForm;