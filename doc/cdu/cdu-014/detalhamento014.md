# CDU014. Controle dos tutoriais

- **Ator principal**: Admin
- **Atores secundários**: Usuário
- **Resumo**: Criar, editar e excluir tutoriais que sejam visíveis para os usuários.
- **Pré-condição**: Admin deve estar logado.
- **Pós-Condição**: Houve ou não alteração nos turoriais pelo admin.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página de tutoriais. | 2 - Renderiza a página e dados já inseridos. | 
| 3 - Realiza alguma ação. | 3 - Salva o resultado a ação. |  
| 4 - Volta a navegação do site. | |

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de tutoriais está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O admin é notificado. | 2.2 - Renderiza página 404. |
