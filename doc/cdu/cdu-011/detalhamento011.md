# CDU011. Gerenciar perfil

- **Ator principal**: Usuário e Admin
- **Atores secundários**: ...
- **Resumo**: Usuário acessa página de perfil e modifica seu proprio perfil.
- **Pré-condição**: Um usuário deve estar logado no site.
- **Pós-Condição**: Após gerenciar o perfil, o usuario deve continuar logado.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar site. | 1 - Renderiza página e seus scripts. |  
| 2 - Acessar a página de perfil. | 2 - Renderiza a página e dados já inseridos. | 
| 3 - Modifica o perfil. | 3 - Ao finalizar, pede a confirmação de mudanças. |  
| 4 - Aceita o aviso. | 4 - Sistema valida e salva as mudanças feitas. |

## Página fora do ar
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Página de perfil está indisponivel. | 2.1 - Não é possivel renderizar a página. |  
| 2.2 - O usuario é notificado. | 2.2 - Renderiza página 404. |
