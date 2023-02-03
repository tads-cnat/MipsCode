# CDU023. Manter Projeto

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de criar,excluir,editar e visualizar seus projetos
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Toda e qualquer modificação deve ser salva e mostrada para o usuário

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a ágina de projetos | 4 - Renderiza a página e os projetos do usuário |
| 5 - Faz as modificaçõs que deseja | 5 - As modificações são salvas e mostrada ao usuário |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
