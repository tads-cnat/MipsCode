import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LogoMips from '../../assets/imgs/logo-mips.png'
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './styles.css'


const paginas = ['Dashboard', 'Documentação', 'IDE', 'Repositório', 'Tutoriais'];
const perfil = ['Meu Perfil', 'Conta', 'Sair'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElSettings, setAnchorElSettings] = React.useState<null | HTMLElement>(null);

// Open
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenUserSettings = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const target = event.target as HTMLElement;
    setAnchorElSettings(target);
  };
 
// Close
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserProfile = () => {
    setAnchorElUser(null);
  };

  const handleCloseUserSettings= () => {
    setAnchorElSettings(null);
  };
 
// Return
  return (
    <AppBar position="relative" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>

          {/* Logo MipsCode*/}
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <a href="/">
                <img src={LogoMips} className="logo-style" />
              </a>
            </Box>
          </Box>

           {/* Botão Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },  marginLeft: { xs: '-180px', md: 'unset' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {paginas.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
       
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {paginas.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Logo MipsCode*/}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, textAlign: 'center' }}>
            <a href="/">
              <img src={LogoMips} className="logo-style" />
            </a>
          </Box>

          {/* Botão Configurações*/}         
          <Box sx={{ display: { xs: 'flex'}}}>
            <Menu open={Boolean(anchorElSettings)} onClose={handleCloseUserSettings}/>           
            <IconButton color="inherit">                
              <SettingsSharpIcon onClick={handleOpenUserSettings} />
            </IconButton>   
          </Box>

          {/* Botão Perfil */}
          <Box sx={{ flexGrow: 0 }}>            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserProfile}
            >
              {perfil.map((perfil) => (
                <MenuItem key={perfil} onClick={handleCloseUserProfile}>
                  <Typography textAlign="center">{perfil}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleOpenUserProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>    
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
