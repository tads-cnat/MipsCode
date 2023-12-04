import { Box, Button, Container, Grid, Link, Snackbar, TextField, Typography } from "@mui/material";


export default function FormularioCadastro() {
  return (

    <Container component="main" maxWidth="xs">
      
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>      
        
        <Typography color='text.primary' component="h1" variant="h5">
        CRIE UMA NOVA CONTA
        </Typography>

        <Box component="form" sx={{ mt: 3, textAlign: 'center'}}>

          <Grid container spacing={4} >
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  required
                  fullWidth
                  label="Nome"
                  name="name"
                  type="name"
                  id="outlined-helperText-name"
                  color="secondary" focused 
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  id="email"
                  color="secondary" focused 

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  required
                  fullWidth
                  label="Senha"
                  name="password"
                  type="password"
                  id="password"
                  color="secondary" focused 
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              size="large"
              fullWidth
              sx={{ mt: 3, mb: 2}}>
              Cadastrar-se            
            </Button>
            
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2" color="secondary">
                  Já possui uma conta?
                </Link>
              </Grid>
            </Grid>

            <Button 
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 3, mb: 2, bgcolor:'background.default'}}>
              Cadastrar com o SUAP          
            </Button>

        </Box>

      </Box>

    </Container>
    
    
  );
}