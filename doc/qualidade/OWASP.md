# Análise de Riscos de Segurança - MipsCode

## 1.Identificação da falha
  Após uma análise do código-fonte do projeto MipsCode, foi identificada a presença da falha A01:2021 - Broken Access Control, que diz respeito à quebra de controle de acesso.


## 2. Razão 
  O código do MipsCode possui a falha de controle de acesso que leva à violação de acesso. 
  Isso significa que não há verificações adequadas para garantir que os usuários só tenham acesso às partes do sistema para as quais estão autorizados. 
  Essa falha pode resultar na divulgação não autorizada de informações sensíveis, modificação indevida de dados ou execução de funções de negócios fora dos limites de um usuário.

## 3. Evidências
### 3.1. <a href="https://github.com/tads-cnat/MipsCode/blob/main/frontend/src/features/Cadastro/services/cadastroService.ts" > cadastrarUsuario </a>
A função cadastrarUsuario()  é responsável por enviar uma solicitação para cadastrar um novo usuário por meio da API. 
No entanto, não há verificações de controle de acesso implementadas aqui. 
A função simplesmente aceita os detalhes do usuário fornecidos como parâmetros e faz a solicitação de cadastro sem validar se o usuário que está tentando realizar o cadastro tem as permissões adequadas para executar essa ação. Isso significa que qualquer usuário, autenticado ou não, pode acessar e utilizar essa funcionalidade de cadastro.

### 3.2. <a href="https://github.com/tads-cnat/MipsCode/blob/main/frontend/src/features/Cadastro/components/EstudanteForm/index.tsx" > EstudanteCadastroForm </a> e <a href="https://github.com/tads-cnat/MipsCode/blob/main/frontend/src/features/Cadastro/components/ProfessorForm/index.tsx" > ProfessorCadastroForm </a>
Ambos os componentespermitem que qualquer usuário acesse a página de cadastro correspondente sem verificar se o usuário está autenticado ou se tem as permissões adequadas para acessar essa funcionalidade. 
Não há verificações de acesso implementadas aqui, o que pode permitir que usuários não autorizados acessem essas páginas de cadastro.

### 3.3. <a href="https://github.com/tads-cnat/MipsCode/blob/main/frontend/src/features/Login/components/UserLoginForm/index.tsx" > UserLoginForm </a>
O componente UserLoginForm permite que qualquer usuário acesse o formulário de login sem verificar se o usuário está autenticado ou se tem as permissões adequadas para acessar essa funcionalidade. 


