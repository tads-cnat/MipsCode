# CDU018. Gerenciar Perfil

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de editar, excluir, adicionar e visualizar informações do seu perfil
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Sem pós-condições

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa area de perfil | 4 - Renderiza todas as informações do perfil do usuário |
| 5 - Realiza alterações | 5 - Salvará e mostrará as alterações que o usuário fizer |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
