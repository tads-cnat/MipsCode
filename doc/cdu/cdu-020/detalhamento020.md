# CDU020. Acessar Comunidade externa

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de acessar a comunidade externa 
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Deverá ser redirecionado para a página da comunidade no site ou aplicativo externo

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Clica no button da comunidade externa | 4 - Redireciona o usuário para a página da nossa comunidade no site ou aplicativo externo |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
