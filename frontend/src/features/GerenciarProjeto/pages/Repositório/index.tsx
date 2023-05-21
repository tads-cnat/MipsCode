import { useEffect, useState } from "react";
import { iProjeto } from "../../../../types/iProjetos";
import { listarProjetos } from "../../services/projetoService";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Footer, Header } from "../../../../components";


const Repositorio = () => {
  const [projetos, setProjetos] = useState<iProjeto[]>([]);

  useEffect(() => {
    listarProjetos()
        .then(() =>
            setProjetos(projetos)
        )            
        .catch((erro) =>
            console.log(erro)
        )
  },);


  return (
    <>
      <Header/>
      <Typography variant="subtitle1" display="block" gutterBottom color="text.primary">
        MEU REPOSITÓRIO
      </Typography>
    
      <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {projetos.map(projeto => (
          <Card key={projeto.userId} sx={{ minWidth: 275, maxWidth: 345 }}>
            <Typography variant="h5" component="h2">
              {projeto.title}
            </Typography>
            <Typography variant="body2" component="p">
              {projeto.description}
            </Typography>
          </Card>
        ))}
      </Box>
      <Footer/>
    </>
  );
}

export default Repositorio;


