import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iEstudante } from "../../../../types/iEstudantes";
import { Box, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { cadastrarEstudante } from "../../services/cadastroService";


const EstudanteForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const role = "student";


  async function handleSubmitEstudante(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
      const estudanteForm: iEstudante = {email, password, name, role};
      
      try {
        
        const res = await cadastrarEstudante( estudanteForm )
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
    {/* <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' }} }> */}
      <Card>
        <CardContent>
          <form onSubmit={handleSubmitEstudante} encType="multipart/form-data"               sx={{borderColor: 'divider'}} >

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
              color="secondary"
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
              color="secondary"
              sx={{bgcolor:'background.default'}}
            /> </div>

            {/* Nome */}
            <div className="row" >
            <TextField 
              id="outlined-helperText"
              label="Nome"
              type="name"
              variant="outlined" 
              name="name"
              onChange={(event) => setName(event.target.value)}
              required 
              color="secondary"
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
      {/* </Box> */}
    </>
  );  
}
export default EstudanteForm;