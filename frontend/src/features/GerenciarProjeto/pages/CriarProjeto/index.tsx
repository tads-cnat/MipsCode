import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarProjetos } from "../../services/projetoService";
import Header from "../../../../components/Header";

import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';








const CriarProjeto = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    criarProjetos (title, description, content).then((response) => navigate('/projeto'));
  }


  return (
    <>
    <Header/>
    <Card>
        <CardContent>
            <Stack component="form" spacing={3} alignItems="center" justifyContent="space-between" onSubmit={handleSubmit}>
            <FormLabel htmlFor="nome">Cadastrar Projeto</FormLabel>

            {/* Título */}
            <TextField 
                id="outlined-helperText"
                label="Título"
                type="text"
                variant="outlined" 
                name="title"
                onChange={(event) => setTitle(event.target.value)}
                required
                
            />

            {/* Descrição */}
            <TextField 
                id="outlined-helperText"
                label="Descrição"
                type="text"
                variant="outlined" 
                name="description"
                onChange={(event) => setDescription(event.target.value)}
                required
            />  

            {/* Conteúdo */}
            <TextField 
                id="outlined-helperText"
                label="Conteúdo"
                type="text"
                variant="outlined" 
                name="content"
                onChange={(event) => setContent(event.target.value)}
                required
            />

            <Button variant="contained">Confirmar</Button>            
            </Stack>
        </CardContent>

    </Card>
    </>
  );
}
export default CriarProjeto;


