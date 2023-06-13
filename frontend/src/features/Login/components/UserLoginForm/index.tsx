import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Box,  Card,  CardContent,  CardActions,  TextField,  Button,} from "@mui/material";
import { LoginType } from "../../../../types/iLogintype";
import { loginUser } from "../../services/loginservice";

const UserLoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmitUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userForm: LoginType = { email, password };
    try {
      const res: any = await loginUser(userForm);
      if (res.msg === "Sucess") {
        if (res.userData.role === "student") {
          navigate("/dashboard-estudante");
        } else if (res.userData.role === "professor") {
          navigate("/dashboard-professor");
        }
      }
    } catch (error) {
      return error;
    }
  }
  

  return (
    <>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmitUser} encType="multipart/form-data">
            {/* Email */}
            <div className="row">
              <TextField
                id="outlined-helperText-email"
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                required
                sx={{ bgcolor: "background.default" }}
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
                onChange={(event) => setPassword(event.target.value)}
                required
                sx={{ bgcolor: "background.default" }}
              />
            </div>

            <CardActions>
              <Box width="100%" display="flex" justifyContent="center">
                <Button color="secondary" variant="outlined" type="submit">
                  Entrar
                </Button>
              </Box>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export default UserLoginForm;
