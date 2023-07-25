# CDU024. Manter Tutoriais

- **Ator principal**: Admin
- **Atores secundários**:...
- **Resumo**: Admin é capaz de criar,excluir e editar os tutoriais criados no site
- **Pré-condição**: Deve estar logado
- **Pós-Condição**: Toda e qualquer modificação deve ser salva e mostrada para o admin

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a ágina de tutoriais | 4 - Renderiza a página e os tutoriais do site |
| 5 - Faz as modificaçõs que deseja | 5 - As modificações são salvas e mostrada aos usuários do site |

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |
