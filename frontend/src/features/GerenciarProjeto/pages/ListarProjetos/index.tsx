import { useEffect, useState } from "react";
import { iProjeto } from "../../../../types/iProjetos";
import { listarProjetos } from "../../services/projetoService";
import Typography from '@mui/material/Typography';


const Repositorio = () => {
  const [projetos, setProjetos] = useState<iProjeto[]>([]);

  useEffect(() => {
    listarProjetos();
        setProjetos(projetos);
  }, []);

  return (
    <>
        <Typography variant="overline" display="block" gutterBottom>
        Meu Repositório
        </Typography>
        
      <ul>
        {projetos.map(projeto => (
          <li key={projeto.userId}>{projeto.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Repositorio;

