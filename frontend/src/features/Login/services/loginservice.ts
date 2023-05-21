import api from "../../../services/api";
import { iEstudante } from "../../../types/iEstudantes";
import { iProfessor } from "../../../types/iProfessores";

export async function logarEstudante(estudante: iEstudante) {
  try {
    const { email, password } = estudante;

    if (!email || !password) {
      return "Bad Request";
    }

    const response = await api.post("/login", estudante);
    const { data } = response;

    if (data.token) {
      localStorage.setItem("token", data.token);
      return "Success";
    }

    return "Authentication failed";
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
}

export async function logarProfessor(professor: iProfessor) {
  try {
    const { email, password } = professor;

    if (!email || !password) {
      return "Bad Request";
    }

    const response = await api.post("/login", professor);
    const { data } = response;

    if (data.token) {
      localStorage.setItem("token", data.token);
      return "Success";
    }

    return "Authentication failed";
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
}
