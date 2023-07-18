import TurmaCard from "../../components/TurmaCard";


const TesteTurmaCard = () => {
  return (
    <div>
      <TurmaCard
        className="Turma de Matemática"
        classDescription="Turma de matemática avançada"
        userRole="PROFESSOR"
        onDeleteTurma={() => {
          console.log("Excluir Turma");
        }}
        onEditTurma={() => {
          console.log("Editar Turma");
        }}
      />
      <TurmaCard
        className="Turma de Ciências"
        classDescription="Turma de ciências básicas"
        userRole="ESTUDANTE"
        onLeaveClass={() => {
          console.log("Sair da Turma");
        }}
      />
      
    </div>
  );
};

export default TesteTurmaCard;
