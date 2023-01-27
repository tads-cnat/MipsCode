# CDU017. Favoritar Projetos

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de favoritar seus projetos e deixa-los em destaque
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Sem pós-condições

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a página de projetos | 4 - Renderiza a página e disponibiliza seus projetos |
| 5 - Usuario favorita algum projeto | 5 - Projeto é favoritado e mostrado no inicio da listagem |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
