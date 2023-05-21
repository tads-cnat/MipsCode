import { headers } from "../../../data";
import api from "../../../services/api";
import { iEstudante } from "../../../types/iEstudantes";
import { iProfessor } from "../../../types/iProfessores";

export async function logarEstudante({ email, password }: iEstudante) {
  try {
    if (!email || !password) {
      throw new Error("Bad Request: Email and password are required.");
    }

    const response = await api.post("/users", { email, password }, {
      headers: headers(),
    });

    if (response.status === 200) {
      return "Success";
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function logarProfessor({ email, password }: iProfessor) {
  try {
    if (!email || !password) {
      throw new Error("Bad Request: Email and password are required.");
    }

    const response = await api.post("/login", { email, password });
    const { data } = response;

    if (data.token) {
      localStorage.setItem("token", data.token);
      return "Success";
    }

    return "Authentication failed";
  } catch (error) {
    console.log(error);
    return error;
  }
}
