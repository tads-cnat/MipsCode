# CDU008. Salvar código 

- **Ator principal**: Usuário
- **Atores secundários**: Admin 
- **Resumo**: Usuário acessa IDE e salva o codigo na página de projetos.
- **Pré-condição**: Um usuário deve estar logado no site.
- **Pós-Condição**: Um usuário deve estar logado no site e acessando a pagina de IDE.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar a IDE. | 1 - Renderiza página e seus scripts. |  
| 2 - Salva o codigo no projeto selecionado. | 2 - Disponibiliza todos os projetos criados, ao ser selecionado, salva o codigo no projeto selecionado. | 
| 3 - Continua o acesso a IDE | |  

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de IDE ou Página de projeto está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O visitante é notificado. | 2.2 - Renderiza página 404. |
