import './styles.css'


interface Project {
    title: string,
    lastEditDate: any,
    description: string,
    url: string,
}


export default function ProjectCard({ title, description, url, lastEditDate }: Project) {


    // const ConvertDate = (date:any)=>{
    //     var todayDate = new Date()
    //     var diff = date.valueOf() - todayDate.valueOf();
    //     var diffInHours = diff/1000/60/60; // Convert milliseconds to hours

    //     if(diffInHours > 24){
    //         return "Editado a mais de um dia"
    //     }
    //     else{
    //         return `${diffInHours} horas atrás`
    //     }
    // }


    return (
        <div className='project-card'>
            <span className='project-title'>{title}</span>
            <span className='project-last-edit'>{lastEditDate}</span>
            <span className='project-description'>{description}</span>
            <button className='project-url' onClick={() => { window.location.assign(url) }}>Abrir Projeto</button>
        </div>
    )
};
