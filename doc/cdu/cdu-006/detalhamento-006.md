# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU006 - Console Decimal </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 15/05/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
Visitante visualiza o console da IDE.

<br>

## 2. Atores: 
Usuário e visitante.

<br>

## 3. Pré-condições:
O código deve estar montado.

<br>

## 4. Pós-condições: 
Não há.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Acessa o site. | |  
|  | 2. Renderiza página e seus scripts. |
| 3. Acessa a página de IDE. | | 
|  | 4. Renderiza a página e seus scripts e disponibiliza o uso da IDE. |
| 5. Monta código. | | 
|  | 6. Scripts montam o código escrito. |
| 7. Abre o console Decimal. | | 
|  | 8. Abre o console para visualização do código rodado. |

### 5.2. Fluxo de exceção:
#### Fluxo de exceção (5): Erro no código
a) Usuário monta código; <br>
b) Não é possivel montar o código por erro de sintaxe, então o usuário é notificado. <br>
