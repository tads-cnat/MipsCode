# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU009 - Avançar uma etapa </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 30/05/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
Visitante monta o código e executa, sendo capaz de avançar etapa por etapa do código

<br>

## 2. Atores: 
Usuário e visitante.

<br>

## 3. Pré-condições:
Código não deve haver erro de sintaxe e deve estar executando.

<br>

## 4. Pós-condições: 
Deve ser capaz de continuar executando o código.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Acessa a página de IDE. | | 
|  | 2. Renderiza página e seus scripts. |
| 3. Monta o código. | | 
|  | 4. Verifica se o código estará sem erro de sintaxe e monta o código. |
| 5. Executa o código | | 
|  | 6. Código irá ser executado. |
| 7. Avança uma etapa. | | 
|  | 8. Código irá avançar somente um passo e continuará a ser executado. |

### 5.2. Fluxo de exceção:
Não há.
