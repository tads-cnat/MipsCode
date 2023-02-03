# CDU004. Acessar IDE

- **Ator principal**: Visitante.
- **Atores secundários**: Usuário.	 
- **Resumo**: Acessar e utilizar a IDE do site.
- **Pré-condição**: Não será necessário o login para ter o acesso a IDE. 
- **Pós-Condição**: Se usuário estiver logado, deverá continuar logado.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Visitante acessa o site | 1 - Renderiza página e seus scripts |
| 2 - Visitante acessa a página da IDE | 2 - Renderiza a página e seus scripts e disponiliza o uso |

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página da IDE está indisponivel | 2.1 - Não é possivel renderizar a página |
| 3 - Visitante é notificado sobre o serviço indisponivel | 3 - Força erro 404 com tela de aviso |
