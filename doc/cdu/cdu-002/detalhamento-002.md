# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU002 - Cadastro </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 07/12/2022 | 1.0 | Versão Inicial | Equipe MipsCode |
| 03/05/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
Cadastrar visitante como usuário para ter acesso à todas as funcionalidades do site.

<br>

## 2. Atores: 
Usuário e visitante.

<br>

## 3. Pré-condições:
O site deve estar sendo acessado por um visitante.

<br>

## 4. Pós-condições: 
Não há.

<br>

## 5. Fluxos de evento:
### 5.1. Fluxo principal:

| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 1. Visitante acessa área de cadastro. | |  
|  | 2. Recebe os dados do cadastro.. |
| 3. Visitante preenche os dados do formulário. | | 
| | 4. Verifica se corresponde a um usuário cadastrado.| 
| 5. Visitante envia solicitação de cadastro. | | 
| | 6. O visitante é cadastrado como usuário e notificado. |


### 5.2. Fluxo de exceção:
#### Fluxo de exceção (5): Cadastro mal sucedido
a) Visitante envia solicitação de cadastro; <br>
b) Os dados são avaliados e invalidados;  <br>
c) O visitante não é cadastrado e recebe notificação.
