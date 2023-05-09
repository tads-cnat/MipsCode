import { BrowserRouter, Route, Routes} from "react-router-dom";
import CriarProjeto from "./features/GerenciarProjeto/pages/CriarProjeto";
import Home from "./features/Home/index";
import Dashboard from "./features/Dashboard/pages/home";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/criar-projeto" element={<CriarProjeto />} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
