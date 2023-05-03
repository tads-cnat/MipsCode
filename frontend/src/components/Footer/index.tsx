import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoMips from '../../assets/imgs/logo-mips.png';
import './styles.css';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <img src={LogoMips} className="logo-style" />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" textAlign="center">
              © 2023 MipsCode. Todos os direitos reservados.
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" textAlign="right">
              Desenvolvido por OpenAI.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;