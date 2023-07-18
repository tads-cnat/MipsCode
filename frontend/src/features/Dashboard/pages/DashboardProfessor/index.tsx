import {Header} from "../../../../components";
export {GreenCards, TutorialCard, ProjectCard} from "../../../../components";
import GroupsIcon from '@mui/icons-material/Groups';
import './styles.css'
import { useNavigate } from "react-router-dom";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';



export default function DashboardProfessor() {
    const navigate = useNavigate(); 


    function handleClickTurmas(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        navigate('/ver-turmas/');
    }

    function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        navigate('/criar-turma/');
    }



    return(
        <main className="page">
            <Header />
            <div className="main-section">
                <section className="green-buttons-section">
                    <span className="title">Área do professor</span>

                </section>

                <section className="project-buttons-section">
                    <nav className="project-buttons">
                        <button className="create" onClick={handleClickCriar}><AddBoxOutlinedIcon/><span>Criar nova Turma</span></button>
                        <button className="create" onClick={handleClickTurmas}><GroupsIcon/><span>Ver turmas</span></button>                </nav>
                </section>
            </div>
        </main>
    )
};
