# <p align="center"> MipsCode </p>


## <p align="center"> Especificação de Caso de Uso <br><br> CDU013 - Manter Projetos </p> 

### Histórico da Revisão 

| Data | Versão | Descrição | Autor |
| :-----: | :-----: | :-----: | :-----: |
| 27/01/2023 | 1.0 | Versão Inicial | Equipe MipsCode |
| 17/04/2023 | 1.1 | Versão Atualizada | Equipe MipsCode |
| 25/07/2023 | 1.1 | Versão Revisada | Equipe MipsCode |


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
| 1. Acessa a página de projetos. | |
|  | 2. Renderiza a página e mostra a listagem de projetos do usuário. |
| 3. Seleciona “Criar Projeto”. | |
| | 4. Mostra o formulário com os campos “Título” (obrigatório), “Descrição” e “Upload de arquivo”. |
| 5. Preenche os campos e seleciona “Confirmar”. | |
| | 6. Realiza a criação do projeto e mostra a listagem de projetos atualizada. |

<br>

### 5.2. Fluxo Alternativo:
#### Fluxo Alternativo - Editar Projeto
| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 3. Seleciona “Editar Projeto” em um projeto específico. | |
| | 4. Mostra o formulário com os campos “Título” (obrigatório), “Descrição” e “Upload de arquivo”. |
| 5. Preenche os campos e seleciona “Confirmar”. | |
| | 6. Realiza a edição do projeto e mostra a listagem de projetos atualizada. |

<br>

#### Fluxo Alternativo - Excluir Projeto
| Ator | Sistema |
| :-----------------: | :-----------------: | 
| 3. Seleciona “Excluir” em um projeto específico. | |
| | 4. Mostra uma mensagem para confirmar a ação. |
| 5. Seleciona “Confirmar”. | |
| | 6. Realiza a exclusão do projeto e mostra a listagem de projetos atualizada. |
