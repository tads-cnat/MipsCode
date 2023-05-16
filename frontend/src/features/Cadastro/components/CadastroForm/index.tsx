import * as React from 'react';
import { Box, CardContent, Card } from '@mui/material';
import EstudanteForm from '../EstudanteForm';
import ProfessorForm from '../ProfessorForm';

export default function CadastroForm() {
  const [showEstudante, setShowEstudante] = React.useState(false);
  const [showProfessor, setShowProfessor] = React.useState(false);
  const container = React.useRef(null);

  const handleClickEstudante = () => {
    setShowEstudante(!showEstudante);
  };

  const handleClickProfessor = () => {
    setShowProfessor(!showProfessor);
  };

  return (
    <div>
    <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center' sx={{textAlign: 'center', alignItems: 'center', '& .MuiTextField-root': { m: 1.5, width: '55ch' }} }>
      <Card>
        <CardContent>

          <button type="button" onClick={handleClickEstudante}>
            {showEstudante ? 'Estudante' : 'Estudante' }
          </button>
          <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
            {showEstudante ? (
              <EstudanteForm/>
            ) : null}
          </Box>


          <button type="button" onClick={handleClickProfessor}>
            {showProfessor ? 'Professor'  :'Professor' }
          </button>          
          <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
            {showProfessor ? (
              <ProfessorForm/>
            ) : null}
          </Box>


          <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />
        </CardContent>
      </Card>
    </Box>
    </div>
  );
}
