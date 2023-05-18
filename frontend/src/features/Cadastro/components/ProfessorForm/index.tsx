import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iProfessor } from "../../../../types/iProfessores";
import { Box, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { cadastrarProfessor } from "../../services/cadastroService";

const ProfessorForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const role = "professor";


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
      <Card>
        <CardContent>
          <form onSubmit={handleSubmitProfessor} encType="multipart/form-data">

            {/* Email */}
            <div className="row">
            <TextField 
              id="outlined-helperText"
              label="Email"
              type="email"
              variant="outlined" 
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required 
              sx={{bgcolor:'background.default'}}
            /> </div>


            {/* Senha */}
            <div className="row">
            <TextField 
              id="outlined-helperText"
              label="Senha"
              type="password"
              variant="outlined" 
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required 
              sx={{bgcolor:'background.default'}}
            /> </div>

            {/* Nome */}
            <div className="row">
            <TextField 
              id="outlined-helperText"
              label="Nome"
              type="name"
              variant="outlined" 
              name="name"
              onChange={(event) => setName(event.target.value)}
              required 
              sx={{bgcolor:'background.default'}}
            /> </div>

            <CardActions>
              <Box width='100%' display='flex' justifyContent='center'>
              <Button color="secondary" variant="outlined" type="submit">Confirmar</Button>     
              </Box>       
            </CardActions>

            </form>
          </CardContent>
        </Card>
    </>
  );  
}
export default ProfessorForm;