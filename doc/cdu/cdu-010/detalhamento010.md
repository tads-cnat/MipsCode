# CDU010. Exportar arquivo 

- **Ator principal**: Usuário
- **Atores secundários**: Admin 
- **Resumo**: Usuário acessa página de um projeto criado e exporta o conteudo de lá.
- **Pré-condição**: Um usuário deve estar logado no site.
- **Pós-Condição**: Um usuário deve estar logado no site e acessando a pagina de um projeto criado.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página de projetos. | 2 - Renderiza a página e projetos já criados. | 
| 3 - Acessar um projeto já criado. | 3 - Rendenriza os arquivos e codigos salvos no projeto. |  
| 4 - Exportar um arquivo. | 4 - Sistema irá fazer um download do conteudo do projeto para a maquina do usuario. |

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de projetos está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O usuario é notificado | 2.2 - Renderiza página 404. |
