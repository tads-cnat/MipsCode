# Documento de Visão

## Histórico de Revisões

| Data                |  Versão             |          Descrição  |  Autores            |
| :-----------------: | :-----------------: | :-----------------: | :-----------------: |
| 07/12/2022 | 1.2 | Versão final |  Hilquias Abias |

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
| F03 | Acessar IDE | Disponibilizar IDE para uso. |
| F04 | Acessar documentação. | Acessar área do site que possui a documentação do mips assembly. |
| F05 | Acessar fórum externo | Acessar fórum da comunidade externa ao site. |
| F06 | Criar projeto | Criar um projeto para armazenar código. |
| F07 | Acessar projeto | Acessar um projeto armazenado na sessão de projetos. |
| F08 | Salvar código | Salvar código produzido na IDE no sistema de arquivos. |
| F09 | Importar arquivo | Fazer upload de arquivo de texto referente ao código. |
| F10 | Exportar arquivo | Fazer download de arquivo de texto referente ao código. |
| F11 | Gerenciar perfil | Inserir, editar, excluir dados(bio, foto, e-mail, nome, github…) e mudar tema do site. |
| F12 | Acessar tutoriais | Entrar na área de guia de aprendizagem. |
| F13 | Controle dos usuários cadastrados | Criar, editar, excluir e alterar permissão de acesso. |
| F14 | Controle dos tutoriais | Criar, editar e excluir tutoriais que sejam visíveis para os usuários. |