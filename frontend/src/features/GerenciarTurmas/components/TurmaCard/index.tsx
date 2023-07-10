import './styles.css'
import EditIcon from '@mui/icons-material/Edit';
import { Box} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Button } from 'react-md';

interface TurmaProps{
    className: string,
    classDescription: string,
}

export default function TurmaCard({className,classDescription} : TurmaProps) {    
    return(
        <div className='turma-card'>
            <span className='turma-title'>{className}</span>
            <span className='turma-description'>{classDescription}</span>
            <Box width='100%' display='flex' justifyContent='right' gap={2}>
                <Button color="secondary" ><DeleteTwoToneIcon/></Button>
                <Button color="secondary" ><EditIcon/></Button>
            </Box>
        </div>
    )
}
 