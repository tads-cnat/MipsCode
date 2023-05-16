import { Footer, Header } from "../../components";
import EstudanteForm from "./components/EstudanteForm";
import ProfessorForm from "./components/ProfessorForm";

const CadastroPage = () => {
  return (
    <div>
      <Header/>
      <EstudanteForm />
      <ProfessorForm />      
      <Footer/>
    </div>
  );
};

export default CadastroPage;
