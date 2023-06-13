import { headers } from "../../../data";
import api from "../../../services/api";
import { iTurma } from "../../../types/iTurmas";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// CRIAR
export async function criarTurmas(turma: iTurma) {
  try {
    const { title, description, content, userId } = turma;

    if (!title || !userId) {
      return "Bad Request";
    }

    const Resapi = await api.post(
      "class/",
      { title, description, content, userId },
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

// LISTAR
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


// EDITAR - CARREGAR PROJETO
export async function carregarTurma(turmaId: string) {
  try {
    const resApi = await api.get(`class/${turmaId}`, {
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

// EDITAR - ATUALIZAR TURMA
export async function atualizarTurma(turmaId: string, turma: iTurma) {
  try {
    if (!turmaId) {
      return "ProjetoId não informado";
    }

    const { title, description, content, userId } = turma; // Desestrutura as propriedades do objeto turma

    const updatedTurma = {
      title,
      description,
      content,
      userId
    };

    const resApi = await api.patch(`class/${turmaId}`, updatedTurma, {
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


// EXCLUIR TURMA
export async function excluirTurma(turmaId: string) {
  try {
    if (!turmaId) {
      return "TurmaId não informado";
    }

    const Resapi = await api.delete(`class/${turmaId}`, {
      headers: headers(),
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
