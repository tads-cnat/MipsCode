import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { iTurma } from "../../../../types/iTurmas";
import Header from "../../../../components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { atualizarTurma, carregarTurma } from "../../services/turmasService";

// import Footer from '../../../../components/Footer';

const EditarTurma = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [turma, setTurma] = useState<iTurma>({
    professorId: "",
    className: "",
    classDescription: "",
    cod: "",
  });

  useEffect(() => {
    const turmaId = location.state?.turmaId;
    if (turmaId) {
      carregarTurma(turmaId).then((res) => {
        if (res) {
          setTurma(res);
        }
      });
    }
  }, [location.state]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const turmaId = location.state?.turmaId;
      atualizarTurma(turmaId, turma).then((res) => {
        if (res === "Success") {
          // Check for the correct success response
          navigate("/ver-turmas");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCancelar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate("/ver-turmas");
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
              <form onSubmit={handleSubmit}>
                <Typography color="text.primary" variant="h6" align="center">
                  EDITAR TURMA
                </Typography>

                {/* Título */}
                <TextField
                  id="outlined-helperText-t"
                  label="Título"
                  type="text"
                  variant="outlined"
                  name="className"
                  value={turma.className} // Definir o valor do campo como o estado 'className'
                  onChange={(event) =>
                    setTurma({ ...turma, className: event.target.value })
                  }
                  required
                  color="secondary"
                />

                {/* Descrição */}
                <TextField
                  id="outlined-helperText-d"
                  label="Descrição"
                  type="text"
                  variant="outlined"
                  name="classDescription"
                  value={turma.classDescription}
                  onChange={(event) =>
                    setTurma({ ...turma, classDescription: event.target.value })
                  }
                  color="secondary"
                />

                {/* Botoes */}
                <CardActions>
                  <Box width="100%" display="flex" justifyContent="center">
                    <Button
                      color="warning"
                      variant="outlined"
                      onClick={handleClickCancelar}
                    >
                      Cancelar
                    </Button>
                    <Button color="secondary" variant="outlined" type="submit">
                      Salvar
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

export default EditarTurma;
