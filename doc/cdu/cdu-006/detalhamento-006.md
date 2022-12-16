# CDU006. Criar projeto

- **Ator principal**: Usuário
- **Atores secundários**: Admin	 
- **Resumo**: Usuário acessa página de projetos e cria seu projeto.
- **Pré-condição**: Um usuário deve estar logado no site.
- **Pós-Condição**: Um usuário deve estar acessando a pagina de projetos.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página de projetos. | 2 - Renderiza a página e projetos já criados. | 
| 3 - Cria o projeto. | 3 - Cria uma pasta com o nome dado pelo usuário. |  

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de projetos está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O usuário é notificado. | 2.2 - Renderiza página 404. |
