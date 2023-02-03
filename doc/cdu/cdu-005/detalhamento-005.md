# CDU005. Contatar

- **Ator principal**: Visitante
- **Atores secundários**: Usuário
- **Resumo**: Permite o visitante se comunicar com o suporte.
- **Pré-condição**: O site deve estar sendo acessado por um visitante.
- **Pós-Condição**: O site deve estar sendo acessado por um usuário e deverá continuar logado ao terminar o caso de uso.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Visitante acessa o site | 1 - Renderiza a página e seus scripts |  
| 2 - Visitante clica em "contact us" | 2 - Renderiza a pagina de contato | 
| 3 - Visitante escolhe a opção para contato |  |

## Pagina fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 2.1 - Visitante clica em "contact us" | 2.1 - Não é possivel renderizar a página |  
| 2.2 - O visitante é cadastrado e é notificado | 3 - Renderiza página 404 | 
