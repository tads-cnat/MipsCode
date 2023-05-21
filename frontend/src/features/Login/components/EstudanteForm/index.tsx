import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardContent, CardActions, TextField, Button } from '@mui/material';
import { logarEstudante } from "../../services/loginService";

const EstudanteLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitEstudante(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const res = await logarEstudante({ email, password, name: '', role: '' }); // Adicione as propriedades necessárias ao objeto
      if (res) {
        setTimeout(() => {
          navigate('/dashboard');
        }, 2000);
      }
    } catch (error) {
      console.log(error); // Lide com o erro adequadamente, por exemplo, exibindo uma mensagem de erro na tela.
    }
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmitEstudante} encType="multipart/form-data">
          {/* Email */}
          <div className="row">
            <TextField
              id="outlined-helperText-email"
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              color="secondary"
            />
          </div>

          {/* Senha */}
          <div className="row">
            <TextField
              id="outlined-helperText-password"
              label="Senha"
              type="password"
              variant="outlined"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              color="secondary"
            />
          </div>

          <CardActions>
            <Box style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button color="secondary" variant="outlined" type="submit">Entrar</Button>
            </Box>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}

export default EstudanteLoginForm;
