# CDU006. Console Decimal

- **Ator principal**: Visitante
- **Atores secundários**: Usuário 
- **Resumo**: Visitante visualiza o console da IDE.
- **Pré-condição**: Código deve estar montado.
- **Pós-Condição**: Se usuário estiver logado, deverá continuar logado.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site | 1 - Renderiza página e seus scripts |  
| 2 - Acessar a página de IDE | 2 - Renderiza a página e seus scripts e disponibiliza o uso da IDE | 
| 3 - Monta código. | 3 - Scripts montam o código escrito. |  
| 4 - Abre o console Decimal | 4 - Abre o console para visualização do código rodado |

## Erro no código
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 3.1 - Monta código | 3.1 - Não é possivel montar o código por erro de sintaxe |  
| 4.1 - O usuário é notificado. | |
