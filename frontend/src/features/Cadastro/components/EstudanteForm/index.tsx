import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Snackbar } from '@mui/material';
import { Button, Container, Grid, Link, Typography } from "@mui/material";
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
			<Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>      
				
          <Typography sx={{ mt: 4}} color='text.primary' component="h1" variant="h5">
          CRIE UMA NOVA CONTA
          </Typography>

          <Box component="form" onSubmit={handleSubmitEstudante} encType="multipart/form-data" sx={{ mt: 3, textAlign: 'center'}}>

						<Grid container spacing={4} >
           
							{/* Nome */}
	            <Grid item xs={12}>
		            <TextField 
									autoComplete="given-name"
                  required
                  fullWidth
                  name="name"
                  type="name"
                  id="outlined-helperText-name"
                  placeholder="Nome"
                  color="info" focused
		              onChange={(event) => setName(event.target.value)}
		            /> 
							</Grid>
     
							{/* Email */}
	            <Grid item xs={12}>
		            <TextField 
									autoComplete="email"
                  required
                  fullWidth
                  name="email"
                  type="email"
                  id="email"
	                placeholder="Email"
                  color="info" focused
		              onChange={(event) => setEmail(event.target.value)}
		            /> 
							</Grid>

							{/* Senha */}
	            <Grid item xs={12}>
		            <TextField 
									autoComplete="new-password"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
	                placeholder="Senha"
                  color="info" focused
		              onChange={(event) => setPassword(event.target.value)}
		            /> 
							</Grid>

							{/* Confirmar Senha */}
	            <Grid item xs={12}>
		            <TextField 
									autoComplete="new-password"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  id="password"
	                placeholder="Confirme a Senha"
                  color="info" focused
		              onChange={(event) => setPassword(event.target.value)}
		            /> 
							</Grid>

							{/* Botão Cadastrar */}
							<Grid item xs={12} >
                <Button 
	                type="submit"
	                variant="outlined"
	                color="secondary"
	                size="large"
	                sx={{  mb: 4, maxWidth:'100%'}}>
	                Cadastrar-se            
	              </Button>
              </Grid>

						</Grid>

              <Grid item xs={12} >
                <Link href="http://localhost:3003/login" variant="body2" color="secondary" sx={{ mt: 4, mb: 4}}>
                  Já possui uma conta?
                </Link>
              </Grid>

              <Grid item xs={12} >
                <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 4, mb: 6,  maxWidth:'100%', bgcolor:'background.default'}}>
                  Cadastrar com o SUAP          
                </Button>
              </Grid>


        <Snackbar
        open={showSuccessMessage}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="Cadastro realizado com sucesso!"
      />


          </Box>

        </Box>

      </Container>


  );  
}
export default EstudanteCadastroForm;