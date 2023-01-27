# CDU003. Acessar Documentação

- **Ator principal**: Visitante
- **Atores secundários**: Usuário 
- **Resumo**: Usuário acessa página da documentação do nosso site sobre assembly.
- **Pré-condição**: Sem pré-condições.
- **Pós-Condição**: Se o usuário estiver logado, deve continuar logado.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site | 1 - Renderiza página e seus scripts |  
| 2 - Acessar a página da documentação | | 

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página da documentação está indisponivel | 1.1 - Não é possivel renderizar a página |  
| 2.2 - O visitante é cadastrado e é notificado | 1.2 - Renderiza página 404 |

