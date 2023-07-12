import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardActions, TextField, Button, Snackbar } from '@mui/material';
import { cadastrarUsuario } from "../../services/cadastroService";
import { iUser } from "../../../../types/iUser";

const EstudanteCadastroForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const role = "STUDENT";
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSnackbarClose = () => {
    setShowSuccessMessage(false);
  };

  async function handleSubmitEstudante(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
      const estudanteForm: iUser = {email, password, name, role};
      
      try {
        const res = await cadastrarUsuario( estudanteForm )
        if(res){
          setShowSuccessMessage(true);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
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
        <div className="col">

          <form 
            onSubmit={handleSubmitEstudante} 
            encType="multipart/form-data"               
          >

            {/* Email */}
            <div className="row">
            <TextField 
              id="outlined-helperText-email"
              label="Email"
              type="email"
              variant="outlined" 
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required 
              color="primary"
              sx={{bgcolor:'background.default'}}
            /> 
            </div>


            {/* Senha */}
            <div className="row">
            <TextField 
              id="outlined-helperText-password"
              label="Senha"
              type="password"
              variant="outlined" 
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required 
              color="primary"
              sx={{bgcolor:'background.default'}}
            /> 
            </div>

            {/* Nome */}
            <div className="row">
            <TextField 
              id="outlined-helperText-name"
              label="Nome"
              type="name"
              variant="outlined" 
              name="name"
              onChange={(event) => setName(event.target.value)}
              required 
              color="primary"
              sx={{bgcolor:'background.default'}}
            /> 
            </div>

            <CardActions>
              <Box width='100%' display='flex' justifyContent='center'>
              <Button color="secondary" variant="outlined" type="submit">Confirmar</Button>     
              </Box>       
            </CardActions>

            </form>
          </div>
          </CardContent>
        </Card>

        <Snackbar
        open={showSuccessMessage}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="Cadastro realizado com sucesso!"
      />
    </>
  );  
}
export default EstudanteCadastroForm;