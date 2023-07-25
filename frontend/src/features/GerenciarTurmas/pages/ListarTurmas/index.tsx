import { useEffect, useState } from "react";
import { Header } from "../../../../components";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { iTurma } from "../../../../types/iTurmas";
import { addEstudante } from "../../services/turmasService";
import "./styles.css";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TurmaCard from "../../components/TurmaCard";
import {Footer} from "../../../../components";

const VerTurmas = () => {
  const [turmas, setTurmas] = useState<iTurma[]>([]);
  const [userRole, setUserRole] = useState<string>("PROFESSOR");
  const [classCode, setclassCode] = useState<string>("");
  const [userId, setUserId] = useState<any>();
  const navigate = useNavigate();

  async function getClasses() {
    const cod = sessionStorage.getItem("userId");
    if (!cod) {
      return "User Not Found";
    }
    try {
      const res = await api.get(`/users/${cod}`);

      setUserRole(res.data.role);
      setUserId(cod);
      if (res.data.role !== "PROFESSOR") {
        setTurmas(res.data.studentClassrom);
      } else {
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


  async function updatePage(){
    getClasses();
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

  async function EnterClass() {
    const studentId = sessionStorage.getItem("userId");
    const code = classCode;

    if (!code) {
      alert("Por favor insira um código válido");
    }
    if (studentId) {
      const res = await addEstudante(studentId, code);

      if (res === "Sucess") {
        alert("Aluno cadastrado com sucesso");
        getClasses();
        return;
      }
      alert("Algo deu errado");
    }
  }


  
  const CreateClassInput = (
      <div className="input-code">
      <h1>Turmas</h1>
      <div className="sectionrout">
        <div className="url-bar">
          <OtherHousesOutlinedIcon className="input-icon" />
          <span className="url1">Dashboard / </span>
          <span className="url2">Turmas</span>
        </div>
        <nav className="project-buttons">
        <button className="create" onClick={handleClickCriar}>
          <AddBoxOutlinedIcon />
          <span>Criar nova Turma</span>
        </button>
      </nav>
      </div>
      </div>
  )

  const EnterClassInput = (
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
          <input
            type="text"
            placeholder="Inserir Código"
            value={classCode}
            onChange={(e) => {
              setclassCode(e.target.value);
            }}
          ></input>
          <div className="add-class" onClick={() => EnterClass()}>
            <SearchOutlinedIcon className="search-input-icon" />
          </div>
        </form>
      </div>
    </div>
    </div>
  )


  return (
    <main className="page">
      <Header />
      <section className="inputsarea">
      {userRole && userRole === "PROFESSOR" ? 
      // checar se vai mostrar o botão de criar turma ou o campo de entrar o código de uma turma 
      CreateClassInput 
      : 
      EnterClassInput
      }
      </section>
      <section className="cards-area">
        {
          turmas && turmas.map(
            (turma : any)=>{
              return(
                <TurmaCard className={turma.className} classDescription={turma.classDescription} userRole={userRole} userId={userId} classId={turma.cod} handleUpdate={updatePage()}/>
              )
            }
          )
        }

      </section>

      <section className="">
      
      </section>

      <Footer/>
    </main>
  );
}
export default VerTurmas;
