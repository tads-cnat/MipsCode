import { Box, Button, Typography } from "@mui/material";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

interface TurmaProps {
  className: string;
  classDescription: string;
  children?: React.ReactNode;
  userRole: string;
  onLeaveClass?: () => void;
  onEnterClass?: () => void;
  onDeleteTurma?: () => void;
  onEditTurma?: () => void;
}

export default function TurmaCard({
  className,
  classDescription,
  children,
  userRole,
  onLeaveClass,
  onDeleteTurma,
  onEditTurma,
}: TurmaProps) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleLeaveClass = () => {
    if (onLeaveClass) {
      onLeaveClass();
    }
  };

  const handleDeleteTurma = () => {
    if (onDeleteTurma) {
      onDeleteTurma();
    }
  };

  const handleEditTurma = () => {
    if (onEditTurma) {
      onEditTurma();
    }
  };

  return (
    <div className="turma-card">
      <span className="turma-title">{className}</span>
      <span className="turma-description">{classDescription}</span>
      <Box width="100%" display="flex" justifyContent="right">
        {userRole === "ESTUDANTE" ? (
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
        <div>
          {userRole === "ESTUDANTE" ? (
            <>
              <br/>
              <Typography color="text.primary" >Tem certeza que deseja sair desta turma?</Typography>
              <br/>
              <Button color="secondary" variant="outlined" onClick={handleLeaveClass}>Confirmar</Button>
              <Button color="warning" variant="outlined" onClick={() => setConfirmDelete(false)}>Cancelar</Button>
            </>
          ) : (
            <>
              <br/>
              <Typography color="text.primary">Tem certeza que deseja excluir esta turma?</Typography>
              <br/>
              <Button color="secondary" variant="outlined" onClick={handleDeleteTurma}>Confirmar</Button>
              <Button color="warning" variant="outlined" onClick={() => setConfirmDelete(false)}>Cancelar</Button>
            </>
          )}
        </div>
    )
}
</div>
  )}