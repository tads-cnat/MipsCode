import { headers } from "../../../data";
import api from "../../../services/api";
import { iProjeto } from "../../../types/iProjetos";

// function getCookie(name: string) {
//   const value = `; ${document.cookie}`;
//   const parts: any = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

// CRIAR
export async function criarProjetos(projeto: iProjeto) {
  try {
    const { title, description, content, userId } = projeto;

    if (!title || !userId) {
      return "Bad Request";
    }

    const Resapi = await api.post(
      "projects/",
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
export async function listarProjetos() {
  try {
    const Resapi = await api.get("projects/", {
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
export async function carregarProjeto(projetoId: string) {
  try {
    const resApi = await api.get(`projects/${projetoId}`, {
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

// EDITAR - ATUALIZAR PROJETO
export async function atualizarProjeto(projetoId: string, projeto: iProjeto) {
  try {
    if (!projetoId) {
      return "ProjetoId não informado";
    }

    const { title, description, content, userId } = projeto; // Desestrutura as propriedades do objeto projeto

    const updatedProjeto = {
      title,
      description,
      content,
      userId
    };

    const resApi = await api.patch(`projects/${projetoId}`, updatedProjeto, {
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


// EXCLUIR PROJETO
export async function excluirProjeto(projetoId: string) {
  try {
    if (!projetoId) {
      return "ProjetoId não informado";
    }

    const Resapi = await api.delete(`projects/${projetoId}`, {
      headers: headers(),
    });

    if (Resapi) {
      return "Projeto deletado com sucesso";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}
