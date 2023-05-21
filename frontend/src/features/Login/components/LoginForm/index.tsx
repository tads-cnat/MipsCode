import { useState } from 'react';
import { Box, CardContent, Card, Typography, Button } from '@mui/material';
import EstudanteLoginForm from '../../../Login/components/EstudanteForm';
import ProfessorLoginForm from '../../../Login/components/ProfessorForm';



const LoginForm = () => {
  const [showEstudante, setShowEstudante] = useState(true);
  const [showProfessor, setShowProfessor] = useState(false);

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
      <Typography color="text.primary" variant="h6" align="center" sx={{ textAlign: 'center', alignItems: 'center', my: { sm: 5 } }}>
        FAÇA O LOGIN NA SUA CONTA!
      </Typography>

      <Box width="100vw" height="70vh" display="flex" alignItems="center" justifyContent="center" sx={{ textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' } }}>
        <Card>
          <CardContent>
            <Box sx={{ p: 1, my: 1 }}>
              <Button onClick={handleClickEstudante} variant={showEstudante ? 'contained' : 'text'} color="secondary">
                Estudante
              </Button>
              <Button onClick={handleClickProfessor} variant={showProfessor ? 'contained' : 'text'} color="secondary">
                Professor
              </Button>

              {showEstudante && <EstudanteLoginForm/>}
              {showProfessor && <ProfessorLoginForm />}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default LoginForm;
