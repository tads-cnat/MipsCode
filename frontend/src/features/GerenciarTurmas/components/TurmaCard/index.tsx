import "./styles.css";
import { Box, Button } from "@mui/material";
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
      <Box width="100%" display="flex" justifyContent="right" gap={2}>
        {userRole === "ESTUDANTE" ? (
          <Button color="secondary" onClick={handleLeaveClass}>
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
          <p>Tem certeza que deseja excluir esta turma?</p>
          <Button onClick={handleDeleteTurma}>Confirmar</Button>
          <Button onClick={() => setConfirmDelete(false)}>Cancelar</Button>
        </div>
      )}
    </div>
  );
}
