import * as React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarProjetos } from "../../services/projetoService";
import Header from "../../../../components/Header";
import Box from '@mui/material/Box';


import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { iProjeto } from '../../../../types/iProjetos';
import Footer from '../../../../components/Footer';

const CriarProjeto = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
      const projeto: iProjeto = {title, description, content, userId:""};
      criarProjetos( projeto ).then(() => navigate('/'));
      console.log('O botão foi clicado!');
  }

  return (
    <>
    <Header/>
    <Box sx={{textAlign: 'center', alignItems: 'center', mx: 'auto', my: { xs: 5, sm: 10 }, '& .MuiTextField-root': { m: 1, width: '25ch' }}}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormLabel htmlFor="nome">Criar Projeto</FormLabel>

        {/* Título */}
        <div className="row">
        <TextField 
          id="outlined-helperText"
          label="Título"
          type="text"
          variant="outlined" 
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          required 
  
        /></div>

        {/* Descrição */}
        <div className="row">
        <TextField 
          id="outlined-helperText"
          label="Descrição"
          type="text"
          variant="outlined" 
          name="description"
          onChange={(event) => setDescription(event.target.value)}
          color="secondary"
        />  </div>

        {/* Conteúdo */}
        <div className="row">
        <TextField 
          id="outlined-helperText"
          label=""
          type="file"
          variant="outlined" 
          name="content"
          onChange={(event) => setContent(event.target.value)}
        /></div>

        <div className="row">
            <Button variant="contained" type="submit" >Confirmar</Button>            
        </div>

      </form>
    </Box>
    <Footer/>
    </>
  );
}
export default CriarProjeto;


