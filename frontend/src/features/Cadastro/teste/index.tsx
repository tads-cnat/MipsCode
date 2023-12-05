import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";


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
                  name="name"
                  type="name"
                  id="outlined-helperText-name"
                  placeholder="Nome"
                  color="info" focused 
                />
              </Grid>

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

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="Senha"
                  id="password"
                  color="info" focused 
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="new-password"
                  required
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="Confirme a Senha"
                  id="password"
                  color="info" focused 
                />
              </Grid>

              <Grid item xs={12} >
                <Button 
                type="submit"
                variant="outlined"
                color="secondary"
                size="large"
                sx={{ mb:4,  maxWidth:'100%'}}>
                Cadastrar-se            
              </Button>
              </Grid>
              </Grid>

              <Grid item xs={12} >
              <Link href="#" variant="body2" color="secondary" sx={{ mt: 4, mb: 4}}>
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
              sx={{ mt: 4, mb: 4,  maxWidth:'100%', bgcolor:'background.default'}}>
              Cadastrar com o SUAP          
            </Button>
              </Grid>


      

        </Box>

      </Box>

    </Container>
    
    
  );
}