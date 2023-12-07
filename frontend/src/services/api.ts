import axios from "axios";

function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts: any = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function configHeader() {
  const token = getCookie("token");
  var header: any = ''

  if (!token && header) {
    return (header = { "Content-Type": "application/x-www-form-urlencoded" });
  }
  return (header = { Authorization: `Bearer ${token}` });
}



const api = axios.create({
  headers: configHeader(),
  baseURL: import.meta.env.VITE_API_URL
});

export default api;
