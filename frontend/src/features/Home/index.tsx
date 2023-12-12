import Button from '@mui/material/Button';
//import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { Footer } from '../../components/';
import React from 'react';
//import banner from '../../assets/imgs/banner.png';
import { AuthContext } from '../../services/authcontext';
//import { Paper } from '@mui/material';

import "./page.css";
import HeaderOut from '../../components/Header Out';

export default function Home() {
  //const navigate = useNavigate();

  const { User }: any = AuthContext();

  // function handleClickCadastro(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   navigate('/cadastro/');
  // }

  function handleEnviar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }


  // function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   navigate('/criar-projeto/');
  // }

  // function handleClickVer(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   navigate('/ver-projetos/');
  // }

  // function handleClickLogin(event: React.MouseEvent<HTMLButtonElement>) {
  //   event.preventDefault();
  //   navigate('/login/');
  // }
  console.log(User)
  return (

    <>
      <HeaderOut />
      <section id="Início" className="inicio">
        <img src="/imgs/cover.jpg" alt="" />
      </section>

      <section className="feito">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-6">
              <h2>FEITO PARA VOCÊ</h2>
              <p>
                O MipsCode possui uma IDE voltada para assembly mips, ideal para
                quem precisa de um ambiente de desenvolvimento completo e
                integrado para a linguagem.
              </p>
              <a href="" className="demonstracao">
                Faça uma demonstração
              </a>
            </div>
            <img src="./imgs/feito.png" className="col-md-5" />
          </div>
        </div>
      </section>

      <section className="explorador">
        <div className="container">
          <h2 className="text-center mb-5">SEJA UM EXPLORADOR</h2>
          <div className="row pt-3">
            <img
              src="./imgs/explorador.png"
              className="col-4 object-fit-contain p-0"
            />

            <div className="col-8 p-0">
              <div className="card">
                <img src="./imgs/icon1.png" />
                <h3>Guarde seus projetos</h3>
                <p>
                  Você pode salvar seus projetos e acessá-los a qualquer
                  momento.
                </p>
              </div>
              <div className="d-flex">
                <div className="card">
                  <img src="./imgs/icon2.png" />
                  <h3>Está iniciando agora?</h3>
                  <p>
                    Podemos te ajudar a programar em assembly de forma fácil e
                    intuitiva.
                  </p>
                </div>
                <div className="card mt-5 pt-5">
                  <img src="./imgs/icon3.png" />
                  <h3>Compartilhe experiência</h3>
                  <p>
                    Uma comunidade para compartilhar conhecimento sobre
                    programação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container depoimentos">
          <h2 className="text-center mb-5">DEPOIMENTOS</h2>
          <div className="row pt-5">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="d-flex">
                    <div>
                      <p>
                        O site MipsCode é um ótimo recurso para aprender e
                        praticar mips. O site fornece uma variedade de exemplos
                        e tutoriais para ajudar os usuários a se familiarizarem
                        com a linguagem. Eu recomendaria este site para qualquer
                        pessoa que esteja procurando um bom recurso para
                        aprender assembly mips.
                      </p>
                      <span>John Doe</span>
                      <small>Professor de Arquitetura de Computadores</small>
                    </div>
                    <img src="./imgs/perfil.png" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <div>
                      <p>
                        O site MipsCode é um ótimo recurso para aprender e
                        praticar mips. O site fornece uma variedade de exemplos
                        e tutoriais para ajudar os usuários a se familiarizarem
                        com a linguagem. Eu recomendaria este site para qualquer
                        pessoa que esteja procurando um bom recurso para
                        aprender assembly mips.
                      </p>
                      <span>John Doe</span>
                      <small>Professor de Arquitetura de Computadores</small>
                    </div>
                    <img src="./imgs/perfil.png" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="d-flex">
                    <div>
                      <p>
                        O site MipsCode é um ótimo recurso para aprender e
                        praticar mips. O site fornece uma variedade de exemplos
                        e tutoriais para ajudar os usuários a se familiarizarem
                        com a linguagem. Eu recomendaria este site para qualquer
                        pessoa que esteja procurando um bom recurso para
                        aprender assembly mips.
                      </p>
                      <span>John Doe</span>
                      <small>Professor de Arquitetura de Computadores</small>
                    </div>
                    <img src="./imgs/perfil.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container contato mt-5">
          <div className="row align-items-end">
            <img
              src="./imgs/explorador.png"
              className="col-3 object-fit-contain p-0"
            />
            <div className="col-6">
              <h2>CONTATO</h2>
              <p>Alguma dúvida? Fale com a gente.</p>
              <form>
                <input placeholder="Nome *" />
                <input placeholder="Email *" />
                <textarea placeholder="Mensagem *"></textarea>
                {/* <Box display='flex' alignItems='center' justifyContent='center'>
                  <Paper >
                  <img src = { banner } alt = "BannerMC" width='800vw' height='400vh' />
                  </Paper>
                </Box> */}
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <Button color='secondary' size='small' variant='outlined' type='submit' onClick={handleEnviar}>Enviar</Button>
                  {/* <Button color='secondary' size='small' variant='outlined' type='submit' onClick={handleClickCadastro}>Cadastro</Button>
                  <Button color='secondary' size="small" variant="contained" type="submit" onClick={handleClickCriar}>Criar Novo Projeto</Button>
                  <Button color='secondary' size="small" variant="outlined" type="submit" onClick={handleClickVer}>Ver todos os projetos</Button> 
                  <Button color='secondary' size='small' variant='outlined' type='submit' onClick={handleClickLogin}>Login</Button> */}
                </Box>
              </form>
            </div>
          </div>
        </div>
      </section>




      <Footer />
    </>
  )
}


