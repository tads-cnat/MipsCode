import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroPage from "./features/Cadastro/pages";
import CriarProjeto from "./features/GerenciarProjeto/pages/CriarProjeto";
import Home from "./features/Home/index";
import Dashboard from "./features/Dashboard/pages/home";
import LoginPage from "./features/Login/pages";
import Repositorio from "./features/GerenciarProjeto/pages/ListarRepositório";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/criar-projeto" element={<CriarProjeto />} />
                <Route path="/ver-projetos" element={<Repositorio />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
