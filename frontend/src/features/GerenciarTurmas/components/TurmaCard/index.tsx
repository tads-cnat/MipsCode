import { Box, Button, Typography } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import './styles.css'
import { excluirTurma } from "../../services/turmasService";
//import { addEstudante } from "../../services/turmasService";
import { removeStudent } from "../../services/turmasService";
import { useNavigate, } from "react-router-dom";

interface TurmaProps {
  className: string;
  classDescription: string;
  userRole: string;
  classId:string;
  userId:string;
  handleUpdate?: any;
}

export default function TurmaCard({
  className,
  classDescription,
  classId,
  userId,
  userRole,
  handleUpdate
}: TurmaProps) {

  const navigate = useNavigate();
  const [confirmDelete, setConfirmDelete] = useState(false);


  async function handleExcluirTurma(cod:string,userId: string,) {

    try {
      await excluirTurma(cod,userId);
      setConfirmDelete(false)
 
    } catch (error) {
      console.error("Erro ao excluir programa:", error);
    }
  }

  function handleClickEditar(turmaId: string) {
    navigate(`/editar-turma?id=${turmaId}`, { state: { turmaId: turmaId } });
  }

  async function handleSairdaTurma(userId: string, classCod: string){
    try {
      await removeStudent(userId, classCod);
      setConfirmDelete(false)
 
    } catch (error) {
      console.error("Erro ao excluir programa:", error);
    }
  }



  const handleLeaveClass = () => {
    handleSairdaTurma(userId,classId)
    handleUpdate()
  };

  const handleDeleteTurma = () => {
    handleExcluirTurma(classId,userId)
    handleUpdate()
  };

  const handleEditTurma = () => {
    handleClickEditar(classId)
    handleUpdate();
  };

  return (
    <div className="turma-card">
      <span className="turma-title">{className}</span>
      <span className="turma-description">{classDescription}</span>
      <Box width="100%" display="flex" justifyContent="right">
        {userRole && userRole === "STUDENT" ? (
          <Button color="secondary" onClick={() => setConfirmDelete(true)}>
            <ExitToAppIcon />
          </Button>
        ) : (
          <>
            <Button color="secondary" onClick={() => setConfirmDelete(true)}>
              <DeleteTwoToneIcon />
            </Button>
            <Button color="secondary" onClick={handleEditTurma}>
              <EditIcon />
            </Button>
          </>
        )}
      </Box>
      {confirmDelete && (
        <div className="delete-section">
          {userRole && userRole === "STUDENT" ? (
            <>
              <br/>
              <Typography color="text.primary" >Tem certeza que deseja sair desta turma?</Typography>
              <br/>
              <div className="buttons">
              <Button color="secondary" variant="outlined" onClick={handleLeaveClass}>Confirmar</Button>
              <Button color="warning" variant="outlined" onClick={() => setConfirmDelete(false)}>Cancelar</Button>
              </div>
            </>
          ) : (
            <>
              <br/>
              <Typography color="text.primary">Tem certeza que deseja excluir esta turma?</Typography>
              <br/>
              <div className="buttons">
              <Button color="secondary" variant="outlined" onClick={handleDeleteTurma}>Confirmar</Button>
              <Button color="warning" variant="outlined" onClick={() => setConfirmDelete(false)}>Cancelar</Button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
