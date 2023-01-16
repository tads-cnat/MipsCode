# CDU015. Montar código

- **Ator principal**: Usuário.
- **Atores secundários**: Visitante e Admin. 
- **Resumo**: Monta e compila o código que foi escrito.
- **Pré-condição**: Necessita que o código esteja escrito.
- **Pós-Condição**: O código só será montado, caso não haja nenhum erro, se houver, forçará um error.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página da IDE. | 2 - Renderiza a página e seus scripts. | 
| 3 - Escreve o código. |  |  
| 4 - Montar o código. | 3 - Sistema irá compilar o código. |
| | 4 - IDE irá mostrar o código montado. |


## Fluxo de error
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página da IDE. | 2 - Renderiza a página e seus scripts. | 
| 3 - Escreve o código. |  |  
| 4 - Montar o código. | 3 - Sistema irá compilar o código. |
| | 3.1 - Sistema acha um error na montagem do código. |
| | 3.2 - Sistema irá forçar um error e mostrar o error para o usuário. | 
| 4.1 - Usuário volta ao terceiro passo. | |
