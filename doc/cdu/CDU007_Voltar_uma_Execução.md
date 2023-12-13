# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU007 - Voltar uma Execução </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 15/05/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
Ator monta o código e executa, sendo capaz de voltar etapa por etapa do código.

<br>

## 2. Atores: 
Usuário e visitante.

<br>

## 3. Pré-condições:
Código não deve haver erro de sintaxe e deve estar executando.

<br>

## 4. Pós-condições: 
Não há.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Monta o código. | | 
|  | 2. Verifica se o código estará sem erro de sintaxe e monta o código. |
| 3. Executa o código | | 
|  | 4. Código irá ser executado. |
| 5. Volta uma etapa. | | 
|  | 6. Código irá retroceder somente um passo e continuará a ser executado. |

<br>

### 5.2. Fluxo de exceção:
Não há.
