import { Footer, Header } from "../../../components";
import CadastroForm from "../components/CadastroForm";
import { Typography } from '@mui/material';

const CadastroPage = () => {
  return (
    <div>
      <Header/>
      <CadastroForm/>
      <Footer/>
    </div>
  );
};

export default CadastroPage;
