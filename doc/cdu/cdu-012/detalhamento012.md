# CDU012. Acessar tutoriais

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário acessa página de tutoriais.
- **Pré-condição**: Um usuário deve estar logado no site.
- **Pós-Condição**: Um usuário deve continuar logado no site.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página de tutoriais. | 2 - Renderiza a página e dados já inseridos. | 
| 3 - Acessa um tutorial. | 3 - Renderiza o tutorial selecionado. |  
| 4 - Volta a navegação do site. | |

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de tutoriais está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O usuario é notificado. | 2.2 - Renderiza página 404. |
