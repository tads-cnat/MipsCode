import { useState } from "react";
import { useEffect } from "react";
import { Header } from "../../../../components";
import { GreenCards } from "../../../../components/Dashboard/GreenCard";
import './styles.css'
import { redirect } from "react-router-dom";
export default function Dashboard() {


    //links dos cards verdes da parte superior da tela, padrões do dashboard
    const  [baselinks, setbaselinks] :any = useState()


    interface Baselink{
        title: string,
        description: string,
        url: string,
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

    useEffect(() => {
        setbaselinks(examples);
    }, [])
    







    return(
        <main className="page">
            <Header />
            <div className="main-section">
            <section className="green-buttons-section">
                <span>Veja o que você pode realizar no Mips</span>
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
            </div>
        </main>
    )
};
