import { headers } from "../../../data";
import api from "../../../services/api";
import { LoginType } from "../../../types/iLogintype";

export async function loginUser({ email, password }: LoginType) {
  try {
    if (!email || !password) {
      throw new Error("Bad Request: Email and password are required.");
    }

    const response = await api.post("/auth/login", { email, password });
    const { data } = response;

    if (data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      return {
        msg: "Sucess",
        userData: data.userData,
      };
    }

    return "Authentication failed";
  } catch (error) {
    console.log(error);
    return error;
  }
}
