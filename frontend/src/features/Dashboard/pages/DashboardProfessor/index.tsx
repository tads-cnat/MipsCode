export { GreenCards, TutorialCard, ProjectCard } from "../../../../components";
import {
  GreenCards,
  Header,
  ProjectCard,
  TutorialCard,
} from "../../../../components";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import api from "../../../../services/api";

export default function DashboardProfessor() {
  const navigate = useNavigate();

  //links dos cards verdes da parte superior da tela, padrões do dashboard
  const [baselinks, setbaselinks]: any = useState();
  const [recentProjects, setProjects]: any = useState();
  const [tutorials, setTutorials]: any = useState();
  const [userdata, setUserdata]: any = useState();

  function handleClickTurmas(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigate("/ver-turmas/");
  }

  interface Baselink {
    title: string;
    description: string;
    url: string;
  }

  interface Project {
    title: string;
    description: string;
    url: string;
    date: any;
  }

  interface Tutorial {
    title: string;
    level: any;
    url: string;
  }

  const examples: any = [
    {
      title: "APRENDA",
      description: "Explorar documentação",
      url: "#",
    },
    {
      title: "CRIE AGORA",
      description: "Programe com Mips",
      url: "#",
    },
    {
      title: "Compartilhe",
      description: "Entre na comunidade",
      url: "#",
    },
  ];
  const RecentProjects: any = [
    {
      title: "Mips para Iniciantes",
      date: "2023-07-15",
      description: "Turma para alunos iniciantes na linguagem.",
      url: "#",
    },
    {
      title: "Mips para Iniciantes",
      date: "2023-07-15",
      description: "Turma para alunos iniciantes na linguagem.",
      url: "#",
    },
    {
      title: "Mips para Iniciantes",
      date: "2023-07-15",
      description: "Turma para alunos iniciantes na linguagem.",
      url: "#",
    },
  ];
  const RecentTutorials: any = [
    {
      title: "Como calcular o mmc de dois valores utilizando o for.",
      level: 1,
      url: "#",
    },
    {
      title: "Como calcular o mmc de dois valores utilizando o for.",
      level: 2,
      url: "#",
    },
    {
      title: "Como calcular o mmc de dois valores utilizando o for.",
      level: 3,
      url: "#",
    },
    {
      title: "Como calcular o mmc de dois valores utilizando o for.",
      level: 2,
      url: "#",
    },
    {
      title: "Como calcular o mmc de dois valores utilizando o for.",
      level: 2,
      url: "#",
    },
    {
      title: "Como calcular o mmc de dois valores utilizando o for.",
      level: 3,
      url: "#",
    },
  ];

  async function getData() {
    const userId = sessionStorage.getItem("userId");

    if (!userId) {
      return "User Not Found";
    }

    try {
      const res = await api.get(`/users/${userId}`);
      if (res) {
        setUserdata(res.data);
      }
    } catch (error) {
      if (error) {
        return error;
      }
    }
  }

  useEffect(() => {
    getData();
    setbaselinks(examples);
    setProjects(RecentProjects);
    setTutorials(RecentTutorials);
  }, []);

  console.log(userdata);

  return (
    <main className="page">
      <Header />
      <div className="main-section">
        <section className="green-buttons-section">
          <span className="title">Veja o que você pode realizar no Mips</span>
          <div className="cards">
            {baselinks &&
              baselinks.map((item: Baselink, index: number) => {
                if (item) {
                  return (
                    <GreenCards
                      title={item.title}
                      description={item.description}
                      url={item.url}
                      key={index}
                    />
                  );
                }
              })}
          </div>
        </section>
        <section className="project-buttons-section">
          <span className="title">Minhas Turmas</span>
          <p className="description">
            Guarde seus projetos e acesse onde estiver.
          </p>
          <nav className="project-buttons">
            <button className="create" onClick={handleClickTurmas}>
              <FolderOutlinedIcon />
              <span>Turmas</span>
            </button>
          </nav>
        </section>
        <section className="recent-projects-section">
          <span className="description">Turmas recentes</span>
          <div className="recent-projects">
            {recentProjects &&
              recentProjects.map((item: Project, index: number) => {
                if (recentProjects.indexOf(item) < 6) {
                  return (
                    <ProjectCard
                      title={item.title}
                      description={item.description}
                      lastEditDate={item.date}
                      url={item.url}
                      key={index}
                    />
                  );
                } else {
                  return;
                }
              })}
          </div>
        </section>
        <section className="tutorials-section">
          <span className="title">Atividades</span>
          <p className="description">Aprenda de maneira fácil e prática.</p>
          <div className="recent-tutorials">
            {tutorials &&
              tutorials.map((item: Tutorial, index: number) => {
                if (tutorials.indexOf(item) < 6) {
                  return (
                    <div key={index}>
                      <TutorialCard
                        title={item.title}
                        level={item.level}
                        url={item.url}
                      />
                    </div>
                  );
                } else {
                  return;
                }
              })}
          </div>
          <button
            className="list-tutorials"
            onClick={() => {
              window.location.assign("#");
            }}
          >
            <WorkOutlineIcon />
            <span>Ver todas as atividades</span>
          </button>
        </section>
      </div>
    </main>
  );
}
