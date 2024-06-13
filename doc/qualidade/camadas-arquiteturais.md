# MipsCode - Arquitetura do Sistema

## 1. Descrição das Camadas Arquiteturais 

O MipsCode é estruturado em uma arquitetura que pode ser dividida nas seguintes camadas:

### Camada do Frontend
- **Responsabilidade**: Esta camada é responsável pela interface do usuário. Ela permite a interação do usuário com o sistema, fornecendo uma interface amigável e intuitiva. Utiliza tecnologias como React para construção de componentes de interface.
- **Dependências**: Interage diretamente com a camada de Aplicação através de APIs.

### Camada de Aplicação (Backend)
- **Responsabilidade**: Contém a lógica de negócios e coordena as operações entre a camada de apresentação e a camada de dados. Utiliza Node.js para lidar com requisições HTTP e realizar operações de negócios.
- **Dependências**: Faz chamadas para a camada de Dados para recuperar e armazenar informações.

### Camada de Dados (DataBase)
- **Responsabilidade**: Gerencia o acesso e a manipulação dos dados. Utiliza bancos de dados relacionais e/ou NoSQL para armazenar dados do usuário e outras informações essenciais.
- **Dependências**: É acessada pela camada de Aplicação para operações de leitura e escrita.

<br>

## 2. Evitando Dependência Circular

Para evitar dependências circulares entre as camadas do MipsCode:

- **Princípio de Separação de Preocupações**: Cada camada deve ter uma responsabilidade claramente definida, evitando que uma camada dependa diretamente da lógica de outra camada.
- **Uso de Interfaces e Serviços**: Implementar interfaces que definem contratos claros entre camadas. Por exemplo, a camada de aplicação define interfaces que a camada de apresentação pode utilizar sem conhecer os detalhes internos da implementação.
- **Inversão de Controle (IoC)**: Utilizar padrões como Inversão de Controle (IoC) e Injeção de Dependências (DI) para gerenciar dependências, permitindo que uma camada solicite serviços de outra camada através de abstrações em vez de chamadas diretas.
