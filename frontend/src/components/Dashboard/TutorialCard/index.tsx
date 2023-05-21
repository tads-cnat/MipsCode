import { useState,useEffect } from 'react';
import './styles.css'


interface Tutorial {
    title : string,
    level : any,
    url : string
}

export default function TutorialCard({title,url,level} : Tutorial) {

    const [dificulty , setdificulty] : any  = useState()
    const [color,setcolor] :any = useState()


    useEffect(() => {
        setcolor(ColorLevel(level))
    }, [])
    

    function ColorLevel(level : any){
        switch (level) {
            case 1:
                setdificulty("Fácil")
                return "easy"
            case 2:
                setdificulty("Intermédiario")
                return "medium"
            default:
                setdificulty("Difcicil")
                return "hard"
        }
    }


    return(
        <div className='tutorial-card'>
            <span className='tutorial-title'>{title}</span>
            <div className='dificulty-area'>
                <span className='level'>Nivel:</span>
                <span className={color}>{dificulty}</span>
            </div>
            <button onClick={()=>{window.location.assign(url)}}>VerConteudo</button>
        </div>
    )
    
};
