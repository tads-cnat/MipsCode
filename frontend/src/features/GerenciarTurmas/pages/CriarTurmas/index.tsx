import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../../../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import Footer from '../../../../components/Footer';
import api from "../../../../services/api";
import { iTurma } from "../../../../types/iTurmas";
import { criarTurmas } from "../../services/turmasService";

const CriarTurma = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [professorId, setProfessorId] = useState("");
  const [className, setClassName] = useState("");
  const [classDescription, setClassDescription] = useState("");
  const [cod, setCod] = useState("");

  async function getData() {
    const cod = sessionStorage.getItem("cod");

    if (!cod) {
      return "User Not Found";
    }

    try {
      const res = await api.get(`/users/${cod}`);
      if (res) {
        setCod(res.data.id);
      }
    } catch (error) {
      if (error) {
        return error;
      }
    }
  }

  useEffect(() => {
    const turma: iTurma = location.state?.turma;
    if (turma) {
      setProfessorId(turma.professorId);
      setClassName(turma.className);
      setClassDescription(turma.classDescription);
      setCod(turma.cod);
    }
  }, [location.state]);

  useEffect(() => {
    getData();
    console.log("teste", cod);
  }, [cod]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const turma: iTurma = { professorId, className, classDescription, cod };

    try {
      await criarTurmas(turma);
      navigate("/ver-turmas");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          textAlign: "center",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1.5, width: "55ch" },
        }}
      >
        <Card>
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              width={550}
              alignContent={"center"}
            >
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Typography color="text.primary" variant="h6" align="center">
                  CRIAR NOVA TURMA
                </Typography>

                {/* Título */}
                <TextField
                  id="outlined-helperText-title"
                  label="Profesor ID"
                  type="text"
                  variant="outlined"
                  name="professorId"
                  onChange={(event) => setProfessorId(event.target.value)}
                  required
                  color="secondary"
                />

                {/* Descrição */}
                <TextField
                  id="outlined-helperText-description"
                  label="Título"
                  type="text"
                  variant="outlined"
                  name="className"
                  onChange={(event) => setClassName(event.target.value)}
                  color="secondary"
                />

                {/* Conteúdo */}
                <TextField
                  id="outlined-helperText-content"
                  label="Descrição"
                  type="text"
                  variant="outlined"
                  name="classDescription"
                  onChange={(event) => setClassDescription(event.target.value)}
                  color="secondary"
                />

                <CardActions>
                  <Box width="100%" display="flex" justifyContent="center">
                    <Button color="secondary" variant="contained" type="submit">
                      Confirmar
                    </Button>
                  </Box>
                </CardActions>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {/* <Footer/> */}
    </>
  );
};
export default CriarTurma;
