# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU014 - Manter Tarefas </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 11/07/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
O professor é capaz de criar tarefas para suas turmas cadastradas.

<br>

## 2. Atores: 
Professor e Estidamte

<br>

## 3. Pré-condições:
Estar logado como professor

<br>

## 4. Pós-condições: 
Todos os campos/labels devem ser preenchidos para uma tarefa seja cadastrada.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Acessa site. | |  
|  | 2. Renderiza página e seus scripts. |
| 3. Acessa a página de login. | | 
| | 4. Renderiza a página e abre o formulário. | 
| | 5. Realiza a autenticação e libera o acesso ao dashboard do professor. |
| 6. Acessa uma das turmas da listagem. |  |
|  | 7. Renderiza a página da turma(s) dos usuário. |
| 8. Clica no botão para criar uma atividade. | |
| | 9. O sistema renderiza um formulário mostrado ao professor para criação da atividade e para salvá-la. |
| | 10. O sistema salva a atividade e  registra-a para turma notificando que o processo foi realizado. | |

### 5.2. Fluxo Básico:
| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. 1)  Acessa a página de criar atividade. | |  
|  | 2. Renderiza um formulário mostrado professor para criação da atividade e salvá-la. |
| 3. Pode criar, excluir e editar a atividade.. | | 

### 5.3. Fluxo de exceção:
#### Fluxo de exceção (5): Erro de autenticação
a) O sistema realiza a autenticação do formulário; <br>
b) Credenciais inválidas;  <br>
c) Campos não preenchdios; <br>
d) Professor é notificado; 
