//import { headers } from "../../../data";
import api from "../../../services/api";
import { LoginType } from "../../../types/iLogintype";

export async function loginUser({ email, password }: LoginType) {
  // function createCookie(name: string, value: string, days: any) {
  //   if (days) {
  //     var d = new Date();
  //     d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  //     var expires = "; expires=" + d.toString();
  //   } else var expires = "";
  //   document.cookie = name + "=" + value + expires + "; path=/";
  // }

  try {
    if (!email || !password) {
      throw new Error("Bad Request: Email and password are required.");
    }

    const response = await api.post("/auth/login", { email, password });
    const { data } = response;

    if (data.accessToken) {
      //localStorage.setItem("token", data.accessToken);
      localStorage.setItem("access_token", data.accessToken); // cria um token que vai expirar em 1 dia
      sessionStorage.setItem("userId", data.userData.id);
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
