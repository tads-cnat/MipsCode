# CDU002. Cadastro 

- **Ator principal**: Visitante
- **Atores secundários**: Usuário	 
- **Resumo**: Cadastrar visitante como usuário para ter acesso à todas as funcionalidades do site.
- **Pré-condição**: O site deve estar sendo acessado por um visitante.
- **Pós-Condição**: O site deve estar sendo acessado por um usuário.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Visitante acessa área de cadastro. | 1 - Recebe os dados do cadastro. |  
| 2 - Visitante preenche os dados do formulário. | 2 - Verifica se corresponde a um usuário cadastrado | 
| 3 - Visitante envia solicitação de cadastro. | 3 - Se possuir cadastro informa ao visitante que os dados já pertencem a um usuário. |

## Cadastro bem sucedido
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 3.1 - Visitante envia solicitação de cadastro. | 3.1 - Se não possuir cadastro os dados são avaliados |  
| 3.2 - O visitante é cadastrado e é notificado | 3.2 - Se validado o visitante é cadastrado como usuário e notificado. |

## Cadastro mal sucedido
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 3.1 - Visitante envia solicitação de cadastro. | 3.1 - Se não possuir cadastro os dados são avaliados |  
| 3.2 - O visitante não é cadastrado e recebe notificação | 3.2 - Se não for validado o visitante não é cadastrado e recebe notificação. |