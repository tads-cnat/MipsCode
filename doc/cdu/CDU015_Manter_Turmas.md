
# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU015 - Manter Turmas </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 25/07/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |


<br>

## 1. Resumo
O ator é capaz de criar, excluir, editar e visualizar suas turmas.

<br>

## 2. Atores: 
Professor.

<br>

## 3. Pré-condições:
Estar logado como professor.

<br>

## 4. Pós-condições: 
Não há.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Acessa a página de turmas. | |
|  | 2. Renderiza a página e mostra a listagem de turmas do usuário. |
| 3. Seleciona “Criar Turma”. | |
| | 4. Mostra o formulário com os campos “Título” (obrigatório) e “Matéria”. |
| 5. Preenche os campos e seleciona “Confirmar”. | |
| | 6. Realiza a criação da turma e mostra a listagem de turmas atualizada. |

<br>

### 5.2. Fluxo Alternativo:
#### Fluxo Alternativo - Editar Turma
| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 3. Seleciona “Editar Turma” em uma turma específico. | |
| | 4. Mostra o formulário com os campos “Título” (obrigatório) e “Matéria”. |
| 5. Preenche os campos e seleciona “Confirmar”. | |
| | 6. Realiza a edição da turma e mostra a listagem de turmas atualizada. |

<br>

#### Fluxo Alternativo - Excluir Turma
| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 3. Seleciona “Excluir” em uma turma específica. | |
| | 4. Mostra uma mensagem para confirmar a ação. |
| 5. Seleciona “Confirmar”. | |
| | 6. Realiza a exclusão da turma e mostra a listagem de turmas atualizada. |
