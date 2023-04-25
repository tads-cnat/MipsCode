import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./features/Home/index";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
