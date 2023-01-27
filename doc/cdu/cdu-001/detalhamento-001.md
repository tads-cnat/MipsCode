# CDU001. Login

- **Ator principal**: Visitante
- **Atores secundários**: Usuário 
- **Resumo**: Autenticar acesso ao site por conta cadastrada.
- **Pré-condição**: O site deve estar sendo acessado por um visitante.
- **Pós-Condição**: O site deve estar sendo acessado por um usuário.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Visitante acessa página de login | 1 - Procura no cache dados salvos  |
| 2 - Se não houver dados salvos em cache o visitante preenche os dados | 2 - Se houver dados salvos em cache, preenche os dados automaticamente  |
| 3 - Visitante envia solicitação de login | 3 - Autentica Visitante como usuário | 

## Usuário não encontrado
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 1 - Visitante envia solicitação de login | 1 - Sistema procura pelo usuário com os dados correspondentes. |  
| 2 - Os dados são inválidos  | 2 - A solicitação de login é negada e uma mensagem de erro retornada. |

