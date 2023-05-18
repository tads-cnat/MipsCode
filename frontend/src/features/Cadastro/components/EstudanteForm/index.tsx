import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { iEstudante } from "../../../../types/iEstudantes";
import { Box, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { logarEstudante } from "../../../Login/services/loginservice";


const EstudanteForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const role = "estudante";

  async function handleSubmitEstudante(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const estudanteForm: iEstudante = { email, password, name, role };

    try {
      const res = await logarEstudante(estudanteForm);
      if (res === "Success") {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmitEstudante} encType="multipart/form-data">
            {/* Email */}
            <div className="row">
              <TextField
                id="outlined-helperText"
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                color="secondary"
              />
            </div>

            {/* Senha */}
            <div className="row">
              <TextField
                id="outlined-helperText"
                label="Senha"
                type="password"
                variant="outlined"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                required
                color="secondary"
              />
            </div>

            {/* Nome */}
            <div className="row">
              <TextField
                id="outlined-helperText"
                label="Nome"
                type="name"
                variant="outlined"
                name="name"
                onChange={(event) => setName(event.target.value)}
                required
                color="secondary"
              />
            </div>

            <CardActions>
              <Box width='100%' display='flex' justifyContent='center'>
                <Button color="secondary" variant="outlined" type="submit">Confirmar</Button>
              </Box>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default EstudanteForm;