import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastroPage from "./features/Cadastro/pages";
import DashboardEstudante from "./features/Dashboard/pages/DashboardEstudante";
import DashboardProfessor from "./features/Dashboard/pages/DashboardProfessor";
import CriarProjeto from "./features/GerenciarProjeto/pages/CriarProjeto";
import EditarProjeto from "./features/GerenciarProjeto/pages/EditarProjeto";
import CriarTurma from "./features/GerenciarTurmas/pages/CriarTurmas";
import EditarTurma from "./features/GerenciarTurmas/pages/EditarTurmas";
import VerTurmas from "./features/GerenciarTurmas/pages/ListarTurmas";
import Home from "./features/Home";
import LoginPage from "./features/Login/pages";
import ListarProjetos from "./features/GerenciarProjeto/pages/ListarRepositório";
import Documentacao from "./features/Documentacao/Pages";
import Configuracoes from "./features/Configuracoes/pages";
//import FormularioCadastro from "./features/Cadastro/teste";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Documentacao" element={<Documentacao />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/configuracoes" element={<Configuracoes />} />

        <Route path="/dashboard-estudante" element={<DashboardEstudante />} />
        <Route path="/ver-projetos" element={<ListarProjetos />} />
        <Route path="/criar-projeto" element={<CriarProjeto />} />
        <Route path="/editar-projeto" element={<EditarProjeto />} />

        <Route path="/dashboard-professor" element={<DashboardProfessor />} />
        <Route path="/ver-turmas" element={<VerTurmas />} />
        <Route path="/criar-turma" element={<CriarTurma />} />
        <Route path="/editar-turma" element={<EditarTurma />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
