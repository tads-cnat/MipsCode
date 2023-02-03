# CDU009. Avançar uma etapa

- **Ator principal**: Visitante
- **Atores secundários**: Usuário 
- **Resumo**: Visitante monta o código e executa, sendo capaz de avançar etapa por etapa do código
- **Pré-condição**: Código não deve haver erro de sintaxe e deve estar executando
- **Pós-Condição**: Deve ser capaz de continuar executando o código

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Acessar a IDE | 1 - Renderiza página e seus scripts |  
| 2 - Monta o código | 2 - Verifica se o código estará sem erro de sintaxe e monta o código | 
| 3 - Executar código | 3 - Código irá ser executado |  
| 4 - Avança uma etapa | 4 - Código irá avançar somente um passo e continuará a ser executado |
