import { headers } from "../../../data";
import api from "../../../services/api";
import { iEstudante } from "../../../types/iEstudantes";
import { iProfessor } from "../../../types/iProfessores";

export async function logarEstudante(estudante: iEstudante) {
  try {
    const { email, password, name, role } = estudante;
    if (!email || !password || !name || !role) return "Bad Request";

    const response = await api.post("/users", estudante, {
      headers: headers(),
    });

    if (response.data) return "Success";
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function logarProfessor(professor: iProfessor) {
  try {
    const { email, password, name, role } = professor;
    if (!email || !password || !name || !role) return "Bad Request";

    const response = await api.post("/users", professor, {
      headers: headers(),
    });

    if (response.data) return "Success";
  } catch (error) {
    console.log(error);
    return { error };
  }
}

