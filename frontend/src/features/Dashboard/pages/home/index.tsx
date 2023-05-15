import { useState } from "react";
import { useEffect } from "react";
import { Header } from "../../../../components";
import { GreenCards } from "../../../../components/Dashboard/GreenCard";
import ProjectCard from "../../../../components/Dashboard/ProjectCard";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import './styles.css'
export default function Dashboard() {


    //links dos cards verdes da parte superior da tela, padrões do dashboard
    const  [baselinks, setbaselinks] :any = useState()
    const  [recentProjects,setProjects] : any = useState()
    const  [tutorials,setTutorials] : any = useState()


    interface Baselink{
        title: string,
        description: string,
        url: string,
    }
    
    interface Project{
        title: string,
        description: string,
        url: string,
        date: string
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
            "lastEdit": "2023-05-15",
            "description": "Projeto que realiza a multiplicação de um valor por 2.",
            "url" : "#"
        },
        {
            "title": "Multiplicação por 2",
            "lastEdit": "2023-05-15",
            "description": "Projeto que realiza a multiplicação de um valor por 2.",
            "url" : "#"
        },
        {
            "title": "Multiplicação por 2",
            "lastEdit": "2023-05-15",
            "description": "Projeto que realiza a multiplicação de um valor por 2.",
            "url" : "#"
        }
    ]

    useEffect(() => {
        setbaselinks(examples);
        setProjects(RecentProjects)
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
                    <button className="create"><AddBoxOutlinedIcon/><span>Criar novo Projeto</span></button>
                    <button className="list"><FolderOutlinedIcon/> <span>Ver Todos os Projetos</span></button>
                </nav>
            </section>
            <section className="">
                <span className="description">Projetos recentes</span>
                <div className="recent-projects">
                {
                        recentProjects && recentProjects.map(( item : Project,index: number)=>{
                            if(item){
                                console.log("1")
                                return <ProjectCard title={item.title} description={item.description} lastEditDate={item.lastEdit} url={item.url} key={index}/>
                            }
                        })
                    }
                </div>
            </section>
            </div>
        </main>
    )
};
