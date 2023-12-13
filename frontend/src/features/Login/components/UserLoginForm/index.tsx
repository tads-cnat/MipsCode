import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Container, Grid, Typography, Link, } from "@mui/material";
import { LoginType } from "../../../../types/iLogintype";
import { loginUser } from "../../services/loginservice";

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userForm: LoginType = { email, password };
    try {
      const res: any = await loginUser(userForm);
      if (res.msg === "Sucess") {
        if (res.userData.role === "STUDENT") {
          navigate("/dashboard-estudante");
        } else if (res.userData.role === "PROFESSOR") {
          navigate("/dashboard-professor");
        }
      }
    } catch (error) {
      return error;
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 6, mb: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

        <Typography sx={{ mb: 4, mt: 4 }} color='text.primary' component="h1" variant="h5">
          ENTRE NA SUA CONTA
        </Typography>

        <Box component="form" onSubmit={handleSubmitUser} encType="multipart/form-data" sx={{ mt: 3, textAlign: 'center' }}>

          <Grid container spacing={4} >

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

            {/* Botão Entrar */}
            <Grid item xs={12} >
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                size="large"
                sx={{ mb: 4, maxWidth: '100%' }}>
                Conecte-se
              </Button>
            </Grid>

          </Grid>

          <Grid item xs={12} >
            <Link href="/cadastro" variant="body2" color="secondary" sx={{ mt: 4, mb: 4 }}>
              Crie sua conta
            </Link>
          </Grid>

          <Grid item xs={12} >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 4, mb: 6, maxWidth: '100%', bgcolor: 'background.default' }}>
              Continuar com o SUAP
            </Button>
          </Grid>

        </Box>

      </Box>

    </Container>


  );
};
export default UserLoginForm;
