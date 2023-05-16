import { BrowserRouter, Route, Routes} from "react-router-dom";
import CadastroPage from "./features/Cadastro";
import CadastroForm from "./features/Cadastro/components/CadastroForm";
import CriarProjeto from "./features/GerenciarProjeto/pages/CriarProjeto";
import Home from "./features/Home/index";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/criar-projeto" element={<CriarProjeto />} />
                <Route path="/portal" element={<CadastroForm />} />


            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
