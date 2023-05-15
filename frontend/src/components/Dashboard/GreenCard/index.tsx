import './styles.css'

interface Card{
    title: string,
    description: string,
    url: string,
}
 

export function GreenCards ({title,description,url} : Card){
    return(
        <div className="greencard" onClick={()=>{window.location.assign(url)}}>
            {
                title && description &&// checar primeiro se o componente recebeu os dados para poder renderizar 
                <div className="content">
                    <span className="card-title">{title}</span>
                    <div>
                        <span className="card-description">{description}</span>
                        <image></image>
                    </div>
                </div>
            }
        </div>
    )
}