# CDU005. Acesso ao fórum externo 

- **Ator principal**: Visitante
- **Atores secundários**: Usuário	e Admin
- **Resumo**: Permitir o Visitante acessar ao fórum com algumas limitações, como não poder curtir e nem comentar.
- **Pré-condição**: O site deve estar sendo acessado por um visitante.
- **Pós-Condição**: O site deve estar sendo acessado por um usuário e deverá continuar logado ao terminar o caso de uso.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Visitante acessa área de fórum. | 1 - Renderiza a página e seus scripts limitados. |  
| 2 - Visitante irá acessar postagem de outro usuário. | 2 - Renderiza a pagina de postagem com limitações de curtidas e cometarios apenas para usuarios logados. | 
| 3 - Visitante continuará a navegação no site. |  |

## Visitante tenta curtir postagem.
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Visitante tenta curtir a postagem. | 2.1 - Valida se o Visitante não está logado e força um erro. |  
| 2.2 - Visitante recebe uma mensagem de error ao curtir a postagem e a opção de logar. | 2.2 - Se o visitante desejar logar, redireciona para a pagina de login/cadastro. |

## Visitante tenta comentar postagem.
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 2.1 - Visitante tenta comentar a postagem. | 2.1 - Valida se o Visitante não está logado e força um erro. |  
| 2.2 - Visitante recebe uma mensagem de error ao comentar a postagem e a opção de logar. | 2.2 - Se o visitante desejar logar, redireciona para a pagina de login/cadastro. |
