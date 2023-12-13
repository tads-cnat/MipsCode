# CDU021. Exportar Arquivo

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de exportar o arquivo do código desejado
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Deve começar o download após confirmar a ação 

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a ágina de projetos | 4 - Renderiza a página e os projetos do usuário |
| 5 - Faz a exportação do projeto | 5 - Inicia o download do projeto do usuário no navegado |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
