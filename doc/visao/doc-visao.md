# Documento de Visão

## Histórico de Revisões

| Data                |  Versão             |          Descrição  |  Autores            |
| :-----------------: | :-----------------: | :-----------------: | :-----------------: |
| 07/12/2022 | 1.3 | Versão final |  Hilquias Abias |

## 1. Objetivo do projeto

Site que possui IDE para mips assembly, conexão para comunidade externa, documentação e guia de aprendizagem de mips assembly.

## 2. Descrição do problema

|     |      |
| --- | --- |
| **Problema**            | Encontrar um site em português que ajude a aprendizagem da linguagem de baixo nível assembly, e que possua uma comunidade disposta e ativa para tirar eventuais dúvidas e compartilhar experiências.|
| **Afeta**               | Os interessados em aprender e praticar código assembly da arquitetura MIPS. |  
| **Impacta**             | A falta de interesse em desenvolver em assembly, consequentemente uma falta de profissionais qualificados. |
| **Solução**             | O desenvolvimento de um site que estimule a aprendizagem e  aumente a produtividade de desenvolvedores de aplicações em Assembly para MIPS, já que eles terão acesso a uma ferramenta de desenvolvimento de fácil manuseio. Além disso, o projeto também beneficiará a comunidade de desenvolvedores, já que haverá uma interação maior entre a comunidade.| 

## 3. Descrição dos usuários 

| Nome                |  Descrição          |   Responsabilidade  |
| -----------------   | -----------------   | -----------------   |
| Usuário | Usuário logado no site que fará uso das ferramentas e irá interagir com outros usuários. | - Acessar IDE. | 
|         |                                                                                 | - Acessar documentação. |
|         |                                                                                     | - Exportar arquivo. |
|         |                                                                                     | - Importar arquivo. |
|         |                                                                                    | - Consultar arquivo. |
| Visitante | Usuário não logado que faz uso limitado do site. | - Acessar documentação. |
|           |                                                  | - Fazer login. |
|           |                                                  | - Cadastrar-se. |
| Administrador | Gerencia o site controlando os usuários, tutoriais e funcionalidades. | - Gerenciar os usuários cadastrados. |
|               |                                                                       | - Gerenciar os tutoriais. |


## 4. Descrição do ambiente dos usuários
A aplicação será em forma de aplicação web, e será utilizada através de qualquer computador com acesso a internet. Contendo:
- IDE para codificação de mips assembly. 
- Sistema de arquivos.
- Perfil do usuário.
- Área para tutoriais e guia de aprendizagem inicial de mips assembly.
- Link para comunidade externa.
- Área para entrar em contato com os desenvolvedores.
- Configurações da página (modo claro, modo escuro, tema personalizado...)

## 5. Principais necessidades dos usuários

- Não encontra ambiente intuitivo para codificação de assembly mips.
- As IDEs e interpretadores disponíveis são pouco intuitivas ou estão em outro idioma.
- Possui dificuldade em achar uma comunidade envolvida e tão próxima ao ambiente de desenvolvimento.

## 6. Alternativas concorrentes

Interpretadores e simuladores de assembly mips armazenados na internet.

## 7. Visão geral do produto

- Possui IDE construída com linguagem de script vinculada ao próprio browser(javascript), no servidor do usuário mantendo agilidade e desempenho, e utiliza sistema de tratamento de erros bem adaptado.
- Mantém conexão com comunidade externa para interação dos usuários.
- A documentação vinculada torna desnecessário a busca por conteúdos de aprendizagem externos, pois ela conduz o usuário ao entendimento.

## 8. Requisitos funcionais

| Código              |  Nome               |          Descrição  |  Prioridade         |
| :-----------------: | :-----------------: | :-----------------: | :-----------------: |
| F01 | Login | Disponibilizar uso do site de acordo com o nível de permissão do usuário. |
| F02 | Cadastro | Liberar acesso ao visitante para uso de mais funcionalidades do site. |
| F03 | Acessar documentação | Disponibilizar IDE para uso. 
| F04 | Acessar IDE | Acessar área do site que possui a documentação do mips assembly. |
| F05 | Contatar | Contata a equipe desenvolvedora. |
| F06 | Console decimal | Exibir os valores dos registradores e do console. |
| F07 | Montar código | Inicializar o processo de compilação do código assembly. |
| F08 | Voltar uma etapa | Permitir que o usuário retroceda uma linha da execução do código, manualmente. |
| F09 | Avançar uma etapa | Permitir que o usuário execute o código linha por linha manualmente. |
| F10 | Executar código | Permitir executar o código completo após ser compilado. |
| F11 | Desmontar código | Cancelar o processo de compilação do código assembly. |
| F12 | Visualizar registradores | Visualizar registradores na versão mobile. |
| F13 | Abrir console | Abrir um console que mostra o resultado do código que já foi rodado na versão mobile. |
| F14 | Acessar dahsbord | Entrar na área de apresentação das funcionalidades do sistema. |
| F15 | Filtrar projetos | Filtrar entre as opções dada pelo sistema os projetos solicitados. |
| F16 | Acessar tutoriais | Entrar na área de guia de aprendizagem. |
| F17 | Favoritar projetos | Favoritar um ou mais projetos para melhor identificação. |
| F18 | Gerenciar perfil | Inserir, editar, excluir dados(bio, foto, e-mail, nome, github…) e mudar tema do site. |
| F19 | Filtrar tutoriais | Filtrar entre as opções dada pelo sistema os tutoriais solicitados. |
| F20 | Acessar fórum externo | Acessar fórum da comunidade externa ao site. |
| F21 | Exportar arquivo | Fazer download de arquivo de texto referente ao código. |
| F22 | Importar arquivo | Fazer upload de arquivo de texto referente ao código. |
| F23 | Manter Projeto | Criar, editar, salvar e excluir projetos que sejam visíveis para os usuários. |
| F24 | Manter tutoriais | Criar, editar, salvar e excluir tutoriais que sejam visíveis para os usuários. |
| F25 | Manter os usuários cadastrados | Criar, editar, excluir, salvar e alterar permissão de acesso. |
