# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU023 - Manter Projeto </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 17/04/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |

<br>

## 1. Resumo
O usuário é capaz de criar,excluir,editar e visualizar seus projetos.

<br>

## 2. Atores: 
Usuário e administrador.

<br>

## 3. Pré-condições:
Estar logado.

<br>

## 4. Pós-condições: 
Toda e qualquer modificação deve ser salva e mostrada para o usuário.

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

### 5.2. Fluxo de exceção:
#### Fluxo de exceção (5): Erro de autenticação
a) O sistema realiza a autenticação do formulário; <br>
b) Credenciais inválidas;  <br>
c) Visitante é notificado
