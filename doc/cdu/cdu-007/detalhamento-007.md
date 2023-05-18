# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU007 - Montar Código </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 15/05/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
Visitante é capaz de montar o código para ser executado.

<br>

## 2. Atores: 
Usuário e visitante.

<br>

## 3. Pré-condições:
O código deve estar sem erro de sintaxe

<br>

## 4. Pós-condições: 
Não há.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Acessa o site. | |  
|  | 2. Renderiza a página e seus scripts. |
| 3. Acessa a página de IDE. | | 
|  | 4. Renderiza a página e scripts da IDE e disponibiliza o uso. |
| 5. Monta código. | | 
|  | 6. Faz a verificação do código escrito e monta o código. |

### 5.2. Fluxo de exceção:
#### Fluxo de exceção (5): Erro de sintaxe
a) Usuário monta código; <br>
b) O sitema faz a verificação dó código escrito e descobre erro, então o ator é notificado. <br>
