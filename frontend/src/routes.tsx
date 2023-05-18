import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroPage from "./features/Cadastro/pages";
import CadastroForm from "./features/Cadastro/components/CadastroForm";
import LoginForm from "./features/Login/components/LoginForm";
import CriarProjeto from "./features/GerenciarProjeto/pages/CriarProjeto";
import Home from "./features/Home/index";
import Dashboard from "./features/Dashboard/pages/home";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/criar-projeto" element={<CriarProjeto />} />
                <Route path="/portal" element={<CadastroForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
