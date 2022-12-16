# CDU009. Importar arquivo 

- **Ator principal**: Usuário
- **Atores secundários**: Admin 
- **Resumo**: Usuário acessa página de um projeto criado e importa um texto com codigo lá.
- **Pré-condição**: Um usuário deve estar logado no site.
- **Pós-Condição**: Um usuário deve estar logado no site e acessando a pagina de um projeto criado.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página de projetos. | 2 - Renderiza a página e projetos já criados. | 
| 3 - Acessar um projeto já criado. | 3 - Rendenriza os arquivos e codigos salvos no projeto. |  
| 4 - Importa um arquivo. | 4 - Sistema dá opção de arrastar o arquivo ou pesquisar nas pastas locais. |
| | 5 - Sistema valida os arquivos selecionados e atualiza o projeto. |

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de projetos está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O usuario é notificado | 2.2 - Renderiza página 404. |

## Arquivo não suportado
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 4.1 - Arquivo muito grande ou formato invalido. | 5.1 - Não é possivel validar os arquivos e força um error. |  
| 4.2 - O usuario é notificado | 5.2 - Notifica e pede novamente outros arquivos validos. |
