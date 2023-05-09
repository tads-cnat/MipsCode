import { useEffect, useState } from "react";
import { iProjeto } from "../../../../types/iProjetos";
import { listarProjetos } from "../../services/projetoService";
import Typography from '@mui/material/Typography';


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
      <Typography variant="subtitle1" display="block" gutterBottom color="text.primary">
        MEU REPOSITÓRIO
      </Typography>
    
      <table>
      </table>
      <ul>
        {projetos.map(projeto => (
          <li key={projeto.userId}>{projeto.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Repositorio;


