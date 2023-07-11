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
Todos os campos/label devem ser preenchidos para uma tarefa ser cadastrada.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Acessa site. | |  
|  | 2. Renderiza página e seus scripts. |
| 3. Acessa a página de login. | | 
| | 4. Renderiza a página e abre o formulário. | 
| | 5. Realiza a autenticação e libera o acesso ao dashboard. |
| 6. Acessa a ágina de projetos. |  |
|  | 7. Renderiza a página e os projetos do usuário. |
| 8. Faz as modificaçõs que deseja. | |
| | 9. As modificações são salvas e mostrada ao usuário. |

### 5.2. Fluxo Básico:
| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. 1)  Acessa a página de projetos. | |  
|  | 2. Renderiza a página e mostra a listagem de projetos do usuário. |
| 3. Pode criar, editar e excluir projetos. | | 

### 5.3. Fluxo de exceção:
#### Fluxo de exceção (5): Erro de autenticação
a) O sistema realiza a autenticação do formulário; <br>
b) Credenciais inválidas;  <br>
c) Visitante é notificado
