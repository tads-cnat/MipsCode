import { headers } from "../../../data";
import api from "../../../services/api";


// CRIAR
export function criarProjetos(title: string, description: string, content: string) {
    return api.post("api/projeto/", {title, description, content}, {
      headers: headers()
    });
}

// LISTAR
export function listarProjetos() {
    return api.get("api/projeto", 
        {headers: headers()});
}


// EDITAR
export function carregarProjeto(id?: string) {
    return api.get(`api/projeto/${id}`, {
      headers: headers()
    });
}

export function atualizarProjeto(nome: string, id?: string) {
    return api.put(`api/projeto/${id}/`, {nome}, {
      headers: headers()
    });
}


// EXCLUIR
export function excluirProjeto(id: string) { 
  return api.delete(`api/projeto/${id}`, {
    headers: headers()
  });
}