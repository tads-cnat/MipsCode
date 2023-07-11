import { useEffect, useState } from "react";
import {  Header} from "../../../../components";
import { Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { iTurma } from "../../../../types/iTurmas";
import { listarTurmas } from "../../services/turmasService";
import { excluirTurma } from "../../services/turmasService";
import { addEstudante } from "../../services/turmasService";
import './styles.css'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const VerTurmas = () => {
  const [turmas, setTurmas] = useState<iTurma[]>([]);
  const [userRole,setUserRole] = useState<String>()
  const [classCode,setclassCode] = useState<string>("")
  const [userId,setUserId] = useState<any>()
  const navigate = useNavigate();

  async function getClasses() {
    const cod = sessionStorage.getItem("userId");
    if (!cod) {
      return "User Not Found";
    }
    try {
      const res = await api.get(`/users/${cod}`);
      
      
      setUserRole(res.data.role)
      setUserId(cod)
      if(res.data.role != "PROFESSOR"){
        setTurmas(res.data.studentClassrom);
      }else{
        setTurmas(res.data.professorClass);
      }
    } catch (error) {
      if (error) {
        return error;
      }
    }
  }



  useEffect(() => {
    getClasses();
  }, []);

  async function carregarTurmas() {
    try {
      const response = await listarTurmas();
      if (response && response.data) {
        setTurmas(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const turma: iTurma = {
      professorId: "", // Adicione um ID vazio, que será preenchido posteriormente
      className: "",
      classDescription: "",
      cod: sessionStorage.getItem("userId") || "", // Adicione o userId correspondente ao usuário atual
    };
    navigate("/criar-turma/", { state: { turma } });
  }

  function handleClickEditar(turmaId: string) {
    navigate(`/editar-turma?id=${turmaId}`, { state: { turmaId: turmaId } });
  }

  async function handleExcluirTurma(userId: string) {
    getClasses();
    try {
      await excluirTurma(userId);
      await carregarTurmas();
      window.location.reload(); // Recarrega a página
    } catch (error) {
      console.error("Erro ao excluir programa:", error);
    }
  }

  async function EnterClass() {
    const studentId = sessionStorage.getItem("userId");
    const code = classCode

    if(!code){
      alert("Por favor insira um código valido")
    }
    if(studentId){
      const res = await addEstudante(studentId,code)

      if(res == "Sucess"){
        alert("Aluno cadastrado com sucesso")
        getClasses()
        return;
      }
        alert("algo deu errado")
    }


  }


  async function LeaveClass(userId:string) {
    const studentId = userId;
    const code = classCode

    if(!code){
      alert("Por favor insira um código valido")
    }
    if(studentId){
      const res = await addEstudante(studentId,code)

      if(res == "Sucess"){
        alert("Saiu da turma com sucesso")
        getClasses()
        return;
      }
        alert("algo deu errado")
    }

  }


  return (
    <main className="page">
    <Header />
    {
      userRole && userRole == "PROFESSOR" ? 
      <div className="main-section">
      <section className="project-buttons-section">
              <span className="title">Turmas</span>
              <p className="description">Dashboard / Turmas</p>
              <nav className="project-buttons">
                  <button className="create" onClick={handleClickCriar}><AddBoxOutlinedIcon/><span>Criar nova Turma</span></button>
              </nav>
      </section>
  </div>
      :
      <div className="input-code">
        <h1>Turmas</h1>
        <div className="sectionrout">
          <div className="url-bar">
          <OtherHousesOutlinedIcon className="input-icon" />
          <span className="url1">Dashboard / </span>
          <span className="url2">Turmas</span>
          </div>
          <div className="input-area">
              <label>Entrar em uma nova turma</label>
            <form className="search">
              <input type="text" placeholder="Inserir Código" value={classCode} onChange={(e)=>{setclassCode(e.target.value)}}></input>
              <div className="add-class" onClick={()=>{EnterClass()}}><SearchOutlinedIcon className="search-input-icon" /></div> 
            </form>
          </div>
        </div>

      </div>
    }


    {turmas.map((turma,index) => (
    <div className='turma-card'key={index}>
        <span className='turma-title'>{turma.className}</span>
        <span className='turma-description'>{turma.classDescription}</span>
        <Box width='100%' display='flex' justifyContent='right' gap={2}>
            <Button 
                color="secondary"                   
                onClick={() => 
                window.confirm("Tem certeza que deseja excluir este turma?") && handleExcluirTurma(turma.cod || '')
                }><DeleteTwoToneIcon/>
            </Button>
            <Button 
                color="secondary" 
                onClick={() => handleClickEditar(turma.cod || '')}><EditIcon/>
            </Button>
        </Box>

    </div>
    ))}
</main>
  );
};

export default VerTurmas;
