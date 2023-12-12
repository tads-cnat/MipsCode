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
//import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './styles.css'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';


//const paginas = ['Dashboard', 'Documentação', 'IDE', 'Projetos', 'Tutoriais'];

const paginasEstudante = [
  {
    label: "Dashboard",
    url: "/dashboard-estudante"
  },
  {
    label: "Documentação",
    url: "#"
  },
  {
    label: "IDE",
    url: "http://localhost:3002/ide"
  },
  {
    label: "Projetos",
    url: "/ver-projetos"
  },
  {
    label: "Tutoriais",
    url: "#"
  },
]

const paginasProfessor = [
  {
    label: "Dashboard",
    url: "/dashboard-professor"
  },
  {
    label: "Documentação",
    url: "#"
  },
  {
    label: "IDE",
    url: "http://localhost:3002/ide"
  },
  {
    label: "Projetos",
    url: "/ver-projetos"
  },
  {
    label: "Tutoriais",
    url: "#"
  },
]


const perfil = ['Meu Perfil', 'Conta', 'Sair'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  //const [anchorElSettings, setAnchorElSettings] = React.useState<null | HTMLElement>(null);
  const [userRole, setUserRole] = useState<string>("")
  const [isloged, setIsloged] = useState<boolean>()


  const navigate = useNavigate();


  async function getClasses() {
    const cod = sessionStorage.getItem("userId");
    if (!cod) {
      return "User Not Found";
    }
    setIsloged(false)
    try {
      const res = await api.get(`/users/${cod}`);

      if (res.data.role) {
        setUserRole(res.data.role)
      }

    } catch (error) {
      if (error) {
        return error;
      }
    }
  }


  useEffect(() => {
    getClasses()
  }, [])



  // Open
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserProfile = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };



  // Close
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserProfile = () => {
    setAnchorElUser(null);
  };

  // const handleCloseUserSettings = () => {
  //   setAnchorElSettings(null);
  // };

  const handleClickURL = (url: string) => {
    window.location.replace(url)
  }

  // Return
  return (
    <AppBar position="relative" color="inherit">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo MipsCode*/}
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <a href="/">
                <img src={LogoMips} className="logo-style" alt='logo' />
              </a>
            </Box>
          </Box>

          {/* Botão Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, marginLeft: { xs: '-180px', md: 'unset' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="secondary">
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
              {
                userRole && userRole == "PROFESSOR" ?
                  <>
                    {paginasProfessor.map((page, index) => (
                      <MenuItem key={index} onClick={() => { handleClickURL(page.url) }} >
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    ))}
                  </>
                  :
                  <>
                    {paginasEstudante.map((page, index) => (
                      <MenuItem key={index} onClick={() => { handleClickURL(page.url) }} >
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    ))}
                  </>

              }

            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {
              userRole && userRole == "PROFESSOR" ?
                <>
                  {paginasProfessor.map((page, index) => (
                    <Button
                      key={index}
                      onClick={() => { handleClickURL(page.url) }}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </>
                :
                <>
                  {paginasEstudante.map((page, index) => (
                    <Button
                      key={index}
                      onClick={() => { handleClickURL(page.url) }}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page.label}
                    </Button>
                  ))}
                </>

            }
          </Box>

          {/* Logo MipsCode*/}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, textAlign: 'center' }}>
            <a href="/">
              <img src={LogoMips} className="logo-style" alt='logo' />
            </a>
          </Box>

          {/* Botão Configurações*/}
          {/* <Box sx={{ display: { xs: 'flex'},  color:'secondary.light'}}>
            <Menu open={Boolean(anchorElSettings)} onClose={handleCloseUserSettings}/>  
            <IconButton color="inherit">                
              <SettingsSharpIcon  />
            </IconButton> 

          </Box> */}

          {/* Botão Perfil */}
          <div>


            {
              isloged && isloged == true ?
                (
                  <Box sx={{ flexGrow: 0, color: 'secondary.light' }}>
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
                )

                :

                (
                  <Box>
                    <Button variant='text' color='secondary' className='login-button' onClick={() => { navigate('/') }}>Sair</Button>
                  </Box>
                )
            }
          </div>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
