import { headers } from "../../../data";
import api from "../../../services/api";
import { iUser } from "../../../types/iUser";

export async function cadastrarUsuario(user: iUser) {
  try {
    const { email, password, name, role } = user;

    if (!email || !password || !name || !role) {
      return "Bad Request";
    }

    const response = await api.post("/auth/register", user, {
      headers: headers(),
    });

    if (response.data) {
      return "Sucess";
    }
  } catch (error) {
    console.log(error);
    return {
      error: error,
    };
  }
}
