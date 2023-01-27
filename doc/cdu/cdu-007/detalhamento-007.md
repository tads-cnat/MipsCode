# CDU007. Montar Código 

- **Ator principal**: Visitante
- **Atores secundários**: Usuário 
- **Resumo**: Visitante é capaz de montar o código para ser executado
- **Pré-condição**: Código deve estar sem erro de sintaxe
- **Pós-Condição**: Sem pós-condição

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site | 1 - Renderiza página e seus scripts |  
| 2 - Acessar a página de IDE | 2 - Renderiza a página e scripts da IDE e disponibiliza o uso | 
| 3 - Montar código | 3 - Faz a verificação do código escrito e monta o código |  

## Erro de sintaxe
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 3.1 - Montar código | 3.1 - Faz a verificação dó código escrito e descobre erro |  
| 2.2 - O visitante é notificado | |
