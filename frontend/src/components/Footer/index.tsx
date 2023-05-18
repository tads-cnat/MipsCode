import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import LogoMips from '../../assets/imgs/logo-mips.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import './styles.css';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'background.paper', color: 'primary.contrastText' }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 3 }}>
          <Box>
            <img src={LogoMips} className="logo-style" alt='logo' />
          </Box>
          <Box>
            <Typography variant="body1">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Tutorial</Link>
                </Typography>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Comunidade</Link>
                </Typography>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Documentação</Link>
                </Typography>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Artigos</Link>
                </Typography>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Fórum</Link>
                </Typography>
              </Box>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Quem somos</Link>
                </Typography>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Fale conosco</Link>
                </Typography>
                <Typography variant="body1" component="span">
                  <Link href="#" color="inherit">Termos de serviço</Link>
                </Typography>
              </Box>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <GitHubIcon fontSize="small" sx={{ ml: 1 }} />
            <InstagramIcon fontSize="small" sx={{ ml: 1 }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 3 }}>
          <Typography variant="body1" textAlign="center">
            © 2023 MipsCode. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
