import { headers } from "../../../data";
import api from "../../../services/api";
import { iProjeto } from "../../../types/iProjetos";


// CRIAR
export async function criarProjetos(projeto: iProjeto) {
  try {
    const { title, description, content, userId } = projeto;
    // caso você tente criar um projeto sem nome e sem referenciar o ID do usuario
    if (!title || !userId) {
      return "Bad Request";
    }

    const Resapi = await api.post(
      "/project/",
      { title, description, content, userId },
      {
        headers: headers(),
      }
    );

    if (Resapi.data) {
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
    const Resapi = await api.get("/project", {
      headers: headers(),
    });

    if (Resapi) {
      return Resapi;
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

// EDITAR
export async function carregarProjeto(userId?: string) {
  try {
    // caso o formulario não envie o Id
    if (!userId) {
      return {
        error: "Id não informado ",
      };
    }

    const resApi = await api.get(`project/${userId}`, {
      headers: headers(),
    });

    if (resApi) {
      return "Sucess";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}

export async function atualizarProjeto(
  title: string,
  description: string,
  content: string,
  userId?: string
) {
  try {
    if (!userId) {
      return "Id não informado ";
    }

    const Resapi = await api.put(
      `project/${userId}/`,
      { title, description, userId, content },
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

// EXCLUIR
export async function excluirProjeto(userID: string) {
  try {
    if (!userID) {
      return "ID não informado";
    }

    const Resapi = await api.delete(`project/${userID}`, {
      headers: headers(),
    });

    if (Resapi) {
      return "Projeto deletado com Sucesso ";
    }
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
}
