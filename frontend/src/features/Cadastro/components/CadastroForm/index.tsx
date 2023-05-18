import * as React from 'react';
import { Box, CardContent, Card, Typography, Button } from '@mui/material';
import EstudanteForm from '../EstudanteForm';
import ProfessorForm from '../ProfessorForm';

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
    <div>
    <Typography  color='text.primary' variant='h6' align='center' sx={{textAlign: 'center', alignItems: 'center', my: { sm: 5 } }}>CRIE UMA NOVA CONTA!</Typography>

    <Box width='100vw' height='70vh' display='flex' alignItems='center' justifyContent='center' sx={{textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' }} }>
      <Card>
        <CardContent>

          <Box  sx={{ p: 1, my: 1 }}>
          <Button
            onClick={handleClickEstudante}
            variant={showEstudante ? 'contained' : 'text'}
            color='secondary'
          >
            Estudante
          </Button>
          <Button
            onClick={handleClickProfessor}
            variant={showProfessor ? 'contained' : 'text'}
            color='secondary'
          >
            Professor
          </Button>

            {showEstudante && <EstudanteForm />}
            {showProfessor && <ProfessorForm />}
          </Box>

        </CardContent>
      </Card>
    </Box>
    </div>
  );
}
