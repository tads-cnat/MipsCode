# CDU022. Importar Arquivo

- **Ator principal**: Usuário
- **Atores secundários**: Admin
- **Resumo**: Usuário é capaz de importar arquivos da maquina dele para o site
- **Pré-condição**: Deve estar logado e criando o arquivo
- **Pós-Condição**: Deve mostrar o arquivo importado

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessa site | 1 - Renderiza página e seus scripts |  
| 2 - Acessa a página de login | 2 - Renderiza a página e abre o formulário | 
| | 3 - Realiza a autenticação e libera o acesso ao dashboard |  
| 4 - Acessa a página de projetos | 4 - Renderiza a página e os projetos do usuário |
| 5 - Cria um projeto novo | 5 - Abre um formulario para a criação de um novo projeto |
| 6 - Importa o arquvio na criação | 6 - Abre um pop-up para selecionar ou arrastar o arquivo desejado |
| 7 - Confirma a criação | 7 - Confirma dados obrigatorios e cria o projeto novo | 

## Erro de autenticação
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| | 3.1 - Faz a autenticação do formulário |  
| | 3.2 - Credenciais inválidas |
| 2.1 - Visitante é notificado | |

## Erro de arquivo não suportado
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 7.1 - Arquivo não suportado pelo sistema | 7.1 - Arquivo detectado como não suportado |  
|  | 7.2 - Operação é cancelada |
| 8 - Usuário é notificado que o arquivo não é suportado | |
