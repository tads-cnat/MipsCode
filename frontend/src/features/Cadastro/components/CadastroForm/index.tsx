import * as React from 'react';
import { Box, Button, Container } from '@mui/material';
import EstudanteCadastroForm from '../EstudanteForm';
import ProfessorCadastroForm from '../ProfessorForm';

export default function CadastroForm() {
  const [showEstudante, setShowEstudante] = React.useState(true);
  const [showProfessor, setShowProfessor] = React.useState(false);

  const handleClickEstudante = () => {
    setShowEstudante(true);
    setShowProfessor(false);
  };

  const handleClickProfessor = () => {
    setShowEstudante(false);
    setShowProfessor(true);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ mt: 8, mb: 8, justifyContent: 'center'}}>
            <Button
              sx={{ maxWidth:'50%', mt: 4}}
              onClick={handleClickEstudante}
              variant={showEstudante ? 'outlined' : 'text'}
              color='secondary'
              size="large"
              fullWidth
            >
              Estudante
            </Button>

            <Button
              sx={{ maxWidth:'50%', mt: 4}}
              onClick={handleClickProfessor}
              variant={showProfessor ? 'outlined' : 'text'}
              color='secondary'
            >
              Professor
            </Button>

              {showEstudante && <EstudanteCadastroForm />}
              {showProfessor && <ProfessorCadastroForm />}

      </Box>
    </Container>
  );
}
