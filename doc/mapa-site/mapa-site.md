# Mapa do Site

Obs.: propõem-se a utilização de alguma ferramenta que possibilite a representação textual do diagrama. Como o Seguinte exemplo:

```mermaid
flowchart TD
    A[Index] --- B[Login]
    A[Index] --- C[Cadastro]
    C[Sign up] --- B[Login]
    B --- D[Página 1]
    B --- E[Página 2]
    B --- F[Página 3]
```