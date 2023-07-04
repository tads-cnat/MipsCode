/*

TODOS: 

- fazer um módulo que exporte uma função que recebe uma string.
- criar função para verificar uma string e procurar por substrings especificas(diretivas).
- criar função para capturar substrings separadas por ' ' que estão entre substrings especificas(diretivas).
- criar mecânismo que gere um objeto contendo identificadores das opções do sistemas que serão habilitados.
    exemplo: acesso a memória 

Diretivas {
    .word w1, ..., wn: Store n 32-bit values in successive memory words
    .half h1, ..., hn: Store n 16-bit values in successive memory words
    .byte b1, ..., bn: Store n 8-bit values in successive memory words
    .ascii str: Store the ASCII string str in memory. ex -> "Example"
    .asciiz str: Store the ASCII string str in memory and null-terminate it. ex -> "Example"
    .space n: Leave an empty n-byte region of memory for later use
    .align n: Align the next datum on a 2^n byte boundary.
    For example, .align 2 aligns the next value on a word boundary

}
*/