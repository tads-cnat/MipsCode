import TurmaCard from "../../components/TurmaCard";


const TesteTurmaCard = () => {
  return (
    <div>
      <TurmaCard
        className="Turma de Matemática"
        classDescription="Turma de matemática avançada"
        userRole="STUDENT"
        onDeleteTurma={() => {
          console.log("Excluir Turma");
        }}
        onEditTurma={() => {
          console.log("Editar Turma");
        }}
      />

      
    </div>
  );
};

export default TesteTurmaCard;
