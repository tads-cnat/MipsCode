# CDU015. Filtrar Projetos

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de filtrar seus projetos na busca
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Só deve aparecer os projetos com os criterios da busca

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a aba de projetos | 4 - Renderiza página com projetos do usuário |
| 5 - Busca com filtro | 5 - Atualiza a página com apenas os resultados desejados |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
