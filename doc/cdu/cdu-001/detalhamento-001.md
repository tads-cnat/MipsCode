# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU001 - Login </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 02/05/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
Autenticar acesso ao site por conta cadastrada.

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
| 1. Visitante acessa página de login. | |  
|  | 2. Procura no cache dados salvos. |
| 3. O visitante preenche os dados. | | 
|  | 4. Se houver dados salvos em cache, preenche os dados automaticamente. |
| 5. Visitante envia solicitação de login. | | 
|  | 6. Autentica Visitante como usuário. |

### 5.2. Fluxo de exceção:
#### Fluxo de exceção (5): Usuário não encontrado
a) Visitante envia solicitação de login; <br>
b) Os dados são inválidos;  <br>
c) A solicitação de login é negada e uma mensagem de erro retornada.
