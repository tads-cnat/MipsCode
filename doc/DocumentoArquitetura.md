# MipsCode

### **Documento de Arquitetura do Sistema**

**Histórico da Revisão**

| Data | Versão | Descrição | Autor |
| --- | --- | --- | --- |
| 25/07/2023 | 1.0 | Versão inicial | Heloise e Ícaro |

# 1. Introdução
O MipsCode é uma IDE amigável para estudantes aprenderem e praticarem a linguagem assembly MIPS. Também é útil para professores ensinarem programação de baixo nível. Atende a áreas como tecnologia e sistemas embarcados, sendo ideal para entusiastas de programação de baixo nível. É uma ferramenta completa e eficaz para aprender assembly MIPS.

# 2. Termos e Abreviações
- **IDE:** Ambiente de desenvolvimento integrado que oferece uma interface gráfica para desenvolver, testar e depurar software.
- **MIPS Assembly:** Linguagem de programação de baixo nível usada em arquiteturas baseadas em MIPS. 
- **Simulador:** Um software que permite a execução de um programa em um ambiente controlado que imita o comportamento de um dispositivo real.
- **Sistema de arquivos:** Componente do sistema operacional que gerencia o armazenamento e a recuperação de dados em dispositivos de armazenamento.
- **Tutorial:** Conteúdo instrucional apresentado em um formato passo a passo, destinado a ensinar um conceito ou habilidade específica.
- **Console:** Uma área na interface do usuário que exibe informações de status ou saída do programa.
- **Registradores:** Dispositivos de hardware usados para armazenar e manipular informações digitais.
- **Dashboard:** Um painel visual que apresenta informações resumidas e importantes de um sistema ou conjunto de dados.
- **Fórum:** Plataforma online de discussão em grupo para compartilhar informações, opiniões e ideias.

**Tipos de usuário:**

- **Usuário:** Qualquer pessoa que utiliza o website.
- **Visitante:** Um usuário que acessa o site sem se registrar ou fazer login.
- **Professor:** Um usuário que ensina ou orienta outros usuários no aprendizado da linguagem de programação MIPS Assembly.
- **Estudante:** Um usuário que está aprendendo a linguagem de programação MIPS Assembly.
- **Administrador:** Um usuário que gerencia o website e os usuários cadastrados.

# 3. Requisitos Significantes
| Código | Nome | Descrição |
| --- | --- | --- |
| RNF001 | Tempo de resposta | O sistema deve ser capaz de garantir a  comunicação entre o servidor e o cliente, não podendo ultrapassar o tempo de 5 segundos de resposta na exportação. |
| RNF007 | Exportação de Arquivo | O sistema deve ser capaz de disponibilizar o arquivo exportado pelo usuário em extensão ASM e XML. |
| RNF002 | Facilidade de Uso | O sistema deve fornecer uma interface amigável e intuitiva que permita aos usuários interagir facilmente com ele, visando melhorar a experiência do usuário e aumentar a produtividade. |
| RNF004 | Monitorar os tutoriais | O administrador deverá manter a qualidade dos tutoriais, assegurando que eles sejam atualizados, precisos, e acessíveis aos usuários, por meio de um processo contínuo de revisão, atualização e depuração do código. |
| RNF006 | Disponibilidade de armazenamento de arquivos | O sistema deverá realizar o gerenciamento de cache para armazenamento de arquivos locais.|
| RNF005 | Requisitos Legais | O administrador deverá adequar a plataforma de acordo com as normas legais(LGPD), garantindo a integridade de dados sensíveis armazenando-os no banco de dados com token de segurança. |
| RNF003 | Manutenção e suporte da IDE | O administrador irá garantir o funcionamento correto da IDE, assegurando um alto grau de impacto. |


# 5. Escopo do Sistema e Contexto

## 5.1 Diagrama de Contexto
<img src="../doc/diagrama-de-contexto.svg" alt="Diagrama de Contexto">

A figura acima contempla o diagrama de contexto do sistema MipsCode utilizado no projeto de sistemas distribuídos (PDS). Nele são evidenciados os blocos que trazem o nome do sistema e o que interage com ele, além do usuário que realiza uma ação.

## 5.2 Diagrama de Containers
<img src="../doc/diagrama-de-containers.svg" alt="Diagrama de Containers">
Quanto às interações, os containers interagem entre si por meio de interfaces bem definidas e troca de mensagens. O container de Interface do Usuário pode enviar comandos e dados para o container de Lógica de Negócios, que, por sua vez, pode acessar ou atualizar informações no container de Armazenamento de Dados. O container de Assembler recebe informações do container de Lógica de Negócios e gera o código de máquina a ser executado pelo container de Simulador de Hardware.

Com relação aos atores externos, estes podem interagir principalmente com o container de Interface do Usuário, enviando comandos e recebendo respostas ou informações relevantes por meio da interface disponibilizada pelo sistema. Os atores externos podem ser usuários humanos, outros sistemas, ou mesmo dispositivos periféricos que se comuniquem com o sistema MipsCode.

# 6. Diagramas Conceituais

## 6.1 Visão Lógica

### 6.2 Modelos de domínio
<img src="../doc/dominio/dominio.svg" alt="Modelos de domínio">

| Conceito | Descrição |
| --- | --- |
| User | Tabela que mantém os dados dos professores e pacientes na plataforma | 
| Tutorial | Mantém os tutoriais criados pelos professores | 
| Project | Mantém os projetos criados pelos usuários  | 
| Documentation | Mantém os arquivos da documentação do Assembly MIPS | 
| Roles | Enum que classifica os tipos de usuários da plataforma  | 
<img src="../doc/dominio/Classes.JPG">
