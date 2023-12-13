# CDU019. Filtrar Tutoriais

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de buscar e filtrar os tutoriais cadastrados no site
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Sem pós-condições

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a página de tutoriais | 4 - Renderiza e disponibiliza todos os tutoriais cadastrados |
| 5 - Usuário busca e filtra os conteúdos | 5 - Mostrará o resultado da busca com os criterios desejado |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
