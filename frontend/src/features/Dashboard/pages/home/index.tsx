import { useState } from "react";
import { useEffect } from "react";
import { Header } from "../../../../components";
import { GreenCards } from "../../../../components/Dashboard/GreenCard";
import TutorialCard from "../../../../components/Dashboard/TutorialCard";
import ProjectCard from "../../../../components/Dashboard/ProjectCard";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './styles.css'
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    //links dos cards verdes da parte superior da tela, padrões do dashboard
    const  [baselinks, setbaselinks] :any = useState()
    const  [recentProjects,setProjects] : any = useState()
    const  [tutorials,setTutorials] : any = useState()


    function handleClickCriar(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        navigate('/criar-projeto/');
    }

    function handleClickVer(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        navigate('/ver-projetos/');
    }

    interface Baselink{
        title: string,
        description: string,
        url: string,
    }
    
    interface Project{
        title: string,
        description: string,
        url: string,
        date: any
    }

    interface Tutorial {
        title : string,
        level : any,
        url : string
    }

    const examples : any = [
        {
            "title": "APRENDA",
            "description": "Explorar documentação",
            "url": "#"
        },
        {
            "title": "CRIE AGORA",
            "description": "Programe com Mips",
            "url": "#"
        },
        {
            "title": "Compartilhe",
            "description": "Entre na comunidade",
            "url": "#"
        },
    ]
    const RecentProjects :any = [
        {
            "title": "Multiplicação por 2",
            "date": "2023-05-15",
            "description": "Projeto que realiza a multiplicação de um valor por 2.",
            "url" : "#"
        },
        {
            "title": "Multiplicação por 2",
            "date": "2023-05-15",
            "description": "Projeto que realiza a multiplicação de um valor por 2.",
            "url" : "#"
        },
        {
            "title": "Multiplicação por 2",
            "date": "2023-05-15",
            "description": "Projeto que realiza a multiplicação de um valor por 2.",
            "url" : "#"
        }
    ]

    const RecentTutorials : any = [
        {
            "title" : "Como calcular o mmc de dois valores utilizando o for.",
            "level" : 1,
            "url" : "#"
        },
        {
            "title" : "Como calcular o mmc de dois valores utilizando o for.",
            "level" : 2,
            "url" : "#"
        },
        {
            "title" : "Como calcular o mmc de dois valores utilizando o for.",
            "level" : 3,
            "url" : "#"
        },
        {
            "title" : "Como calcular o mmc de dois valores utilizando o for.",
            "level" :2,
            "url" : "#"
        },
        {
            "title" : "Como calcular o mmc de dois valores utilizando o for.",
            "level" : 2,
            "url" : "#"
        },
        {
            "title" : "Como calcular o mmc de dois valores utilizando o for.",
            "level" : 3,
            "url" : "#"
        },
    ]

    useEffect(() => {
        setbaselinks(examples);
        setProjects(RecentProjects)
        setTutorials(RecentTutorials)
    }, [])
    







    return(
        <main className="page">
            <Header />
            <div className="main-section">
            <section className="green-buttons-section">
                <span className="title">Veja o que você pode realizar no Mips</span>
                <div className="cards">
                    {
                        baselinks && baselinks.map(( item : Baselink,index: number)=>{
                            if(item){
                                return <GreenCards  title={item.title} description={item.description} url={item.url} key={index} />
                            }
                        })
                    }
                </div>
            </section>
            <section className="project-buttons-section">
                <span className="title">Meus Projetos</span>
                <p className="description">Guarde seus projetos e acesse onde estiver.</p>
                <nav className="project-buttons">
                    <button className="create" onClick={handleClickCriar}><AddBoxOutlinedIcon/><span>Criar novo Projeto</span></button>
                    <button className="list" onClick={handleClickVer}><FolderOutlinedIcon/> <span>Ver Todos os Projetos</span></button>
                </nav>
            </section>
            <section className="recent-projects-section">
                <span className="description">Projetos recentes</span>
                <div className="recent-projects">
                {
                        recentProjects && recentProjects.map(( item : Project,index: number)=>{
                            if(recentProjects.indexOf(item) < 6){
                                return <ProjectCard title={item.title} description={item.description} lastEditDate={item.date} url={item.url} key={index}/>
                            }else{
                                return;
                            }
                        })
                    }
                </div>
            </section>
            <section className="tutorials-section">
                <span className="title">Tutoriais</span>
                <p className="description">Aprenda de maneira fácil e prática.</p>
                <div className="recent-tutorials">
                {
                        tutorials && tutorials.map(( item : Tutorial,index: number)=>{
                            if(tutorials.indexOf(item) < 6){
                                return <div key={index}>
                                    <TutorialCard title={item.title} level={item.level} url={item.url} />
                                    </div>
                            }else{
                                return;
                            }
                        })
                    }
                </div>
                <button className="list-tutorials" onClick={()=>{window.location.assign("#")}}>
                    <WorkOutlineIcon/>
                    <span>Ver todos os tutoriais</span>
                </button>
            </section>
            </div>
        </main>
    )
};
