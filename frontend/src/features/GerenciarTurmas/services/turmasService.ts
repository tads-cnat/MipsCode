import { headers } from "../../../data";
import api from "../../../services/api";
import { iTurma } from "../../../types/iTurmas";

// CRIAR - POST
export async function criarTurmas(turma: iTurma) {
  try {
    const { professorId, className, classDescription, cod } = turma;

    const Resapi = await api.post(
      "class/",
      { professorId, className, classDescription, cod },
      {
        headers: headers(),
      }
    );

    if (Resapi && Resapi.data) {
      return "Sucess";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// LISTAR - GET
export async function listarTurmas() {
  try {
    const Resapi = await api.get("class/", {
      headers: headers(),
    });

    if (Resapi && Resapi.data) {
      return Resapi.data;
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// EDITAR - CARREGAR PROJETO - GET
export async function carregarTurma(cod: string) {
  try {
    const resApi = await api.get(`class/${cod}`, {
      headers: headers(),
    });

    if (resApi && resApi.data) {
      return resApi.data;
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// EDITAR - ATUALIZAR TURMA - PATCH
export async function atualizarTurma(turmaId: string, turma: iTurma) {
  try {
    if (!turmaId) {
      return "ProjetoId não informado";
    }

    const { professorId, className, classDescription, cod } = turma; // Desestrutura as propriedades do objeto turma

    const updatedTurma = {
      professorId,
      className,
      classDescription,
      cod,
    };

    const resApi = await api.patch(`class/${cod}`, updatedTurma, {
      headers: headers(),
    });

    if (resApi) {
      return "Success";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// EXCLUIR TURMA - DELETE
export async function excluirTurma(cod: string, userId: string) {
  console.log("classcode", cod);
  console.log("userId", userId);
  try {
    if (!cod) {
      return "TurmaId não informado";
    }
    const Resapi = await api.delete(`class/${cod}`, {
      headers: headers(),
      data: {
        professorId: userId,
      },
    });

    if (Resapi) {
      return "Turma deletada com sucesso";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// ADICIONAR ESTUDANTE - POST
export async function addEstudante(userId: string, classCod: string) {
  try {
    const Resapi = await api.post(
      `class/addStudent/${classCod}`,
      { userId: userId },
      {
        headers: headers(),
      }
    );

    if (Resapi && Resapi.data) {
      return "Sucess";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// REMOVER ESTUDANTE - DELETE
export async function removeStudent(userId: string, classCod: string) {
  console.log("userId", userId);
  console.log("classCod", classCod);

  try {
    if (!userId) {
      return "userId não informado";
    }

    const Resapi = await api.post(
      `class/removeStudent/${classCod}`,
      { userId: userId },
      {
        headers: headers(),
      }
    );

    if (Resapi) {
      return "Sucess";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}
