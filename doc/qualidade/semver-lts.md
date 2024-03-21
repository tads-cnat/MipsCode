# Avaliação do Versionamento Semântico e Suporte de Longo Prazo - MipsCode


## 1. Introdução
Neste documento, faremos uma avaliação do versionamento semântico e do suporte de longo prazo (LTS) em duas bibliotecas utilizadas no desenvolvimento do MipsCode. 
O versionamento semântico é um sistema de numeração de versões que segue regras específicas para atribuir versões a um software. Ele consiste em três números: MAJOR.MINOR.PATCH. Cada parte tem um significado específico:
- **MAJOR**: Aumentado quando são feitas alterações incompatíveis na API.
- **MINOR**: Aumentado quando funcionalidades são adicionadas de maneira retrocompatível.
- **PATCH**: Aumentado quando são feitas correções retrocompatíveis de bugs.
O objetivo principal do versionamento semântico é fornecer uma maneira padronizada de comunicar as mudanças em um software, ajudando os desenvolvedores a entenderem o impacto das atualizações em suas dependências.

Enquanto que o suporte de longo prazo (LTS) é uma política de gerenciamento do ciclo de vida do software, onde uma versão estável do software é mantida por um período de tempo mais longo do que o usual. Durante o período de suporte de longo prazo, o foco principal é em manter a estabilidade e a segurança do software, em vez de introduzir novos recursos.

## 2. Bibliotecas Analisadas

### <a href="https://react.dev/community/versioning-policy#stable-releases"> 2. React </a>
- **Versionamento Semântico**: Sim
  - O React utiliza o versionamento semântico para comunicar as mudanças em suas versões. Cada versão segue as regras do SemVer (MAJOR.MINOR.PATCH).
- **Suporte de Longo Prazo (LTS)**: Não
  - O React não segue uma política de suporte de longo prazo. As versões são mantidas com atualizações regulares, mas não há garantia de suporte estendido para versões específicas.

### <a href="https://www.prisma.io/blog/prisma-adopts-semver-strictly"> 3. Prisma </a>
- **Versionamento Semântico**: Sim
  - O Prisma também utiliza o versionamento semântico para comunicar as mudanças em suas versões. Cada versão segue as regras do SemVer (MAJOR.MINOR.PATCH).
- **Suporte de Longo Prazo (LTS)**: Não
  - Similar ao React, o Prisma não segue uma política de suporte de longo prazo. As versões são mantidas com atualizações regulares, mas não há garantia de suporte estendido para versões específicas.
