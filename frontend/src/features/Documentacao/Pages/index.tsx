import "./page.css";
import { Footer, Header } from "../../../components";

const Documentacao = () => {
    return (
        <>
            <Header />
            <section className="documentacao">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-7">
                            <div className="breadcrumbs">
                                <span>
                                    <a href="pds.html">
                                        <svg
                                            width="14"
                                            height="15"
                                            viewBox="0 0 14 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g opacity="0.6">
                                                <path
                                                    d="M1.16699 13.3333H12.8337"
                                                    stroke="white"
                                                    stroke-width="0.875"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M1.7207 13.3333L1.74987 6.31581C1.74987 5.95997 1.91904 5.62167 2.19904 5.4L6.28237 2.22083C6.70237 1.89416 7.29154 1.89416 7.71737 2.22083L11.8007 5.39416C12.0865 5.61583 12.2499 5.95414 12.2499 6.31581V13.3333"
                                                    stroke="white"
                                                    stroke-width="0.875"
                                                    stroke-miterlimit="10"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    opacity="0.5"
                                                    d="M9.04134 6.91675H4.95801C4.47384 6.91675 4.08301 7.30758 4.08301 7.79175V13.3334H9.91634V7.79175C9.91634 7.30758 9.52551 6.91675 9.04134 6.91675Z"
                                                    stroke="white"
                                                    stroke-width="0.875"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M5.83301 9.97925V10.8542"
                                                    stroke="white"
                                                    stroke-width="0.875"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </g>
                                        </svg>
                                        Início
                                    </a>
                                </span>
                                <span>/</span>
                                <span className="active">
                                    {" "}
                                    <a href="">Documentação</a>
                                </span>
                            </div>
                            <h2>Arquitetura de Conjunto de Instruções MIPS</h2>
                            <hr />
                            <div className="info">
                                <h3>Introdução – O MIPS</h3>
                                <p>
                                    Não podemos confundir Arquitetura do Conjunto de Instruções MIPS
                                    com MIPS, Milhões de Instruções por Segundo. O MIPS que tratamos
                                    aqui é uma Arquitetura de Conjunto de Instruções (Instruction
                                    Set Architecture – ISA), desenvolvida pela empresa MIPS Computer
                                    Systems, que hoje é chamada de MIPS Technologies. MIPS significa
                                    Microprocessor Without Interlocked Pipeline Stages
                                    (Microprocessador Sem Estágios Intertravados de Pipeline).
                                </p>
                                <p>
                                    A empresa foi fundada em 1984 por um grupo de pesquisadores da
                                    Universidade de Stanford e o foco era os microprocessadores com
                                    Arquitetura RISC (falarei sobre esse assunto na série de Artigos
                                    sobre Microprocessadores). John Leroy Hennessy fez parte da
                                    fundação da empresa, assim como da História da evolução dos
                                    Microprocessadores, o que pode ser comprovado com a leitura de
                                    seus livros e artigos científicos. Vários equipamentos
                                    utilizaram microprocessadores MIPS como, por exemplo, o Nintendo
                                    64, Sony PlayStation, Roteadores Cisco, etc.
                                </p>
                                <h3>Conjunto de Instruções</h3>
                                <p>
                                    Antes de falarmos especificamente sobre o MIPS, vamos discutir
                                    um pouco sobre Conjunto de Instruções. Como bem sabemos, todo
                                    Sistema Computacional é composto, muito basicamente, por
                                    Entrada, Saída, Processamento e Armazenamento. Cada um desses
                                    subsistemas pode ser organizado de formas diferentes
                                    (organização) no sistema, e cada elemento que faz parte desses
                                    subsistemas pode ser projetado também de formas diferentes
                                    (arquitetura).
                                </p>
                                <p>
                                    O Conjunto de Instruções é um dos elementos desse grande
                                    sistema, e é de extrema importância para a construção de um
                                    sistema computacional. Um Processador não é exatamente um
                                    dispositivo único, ele é um conjunto de sistemas, cada um
                                    responsável por executar determinadas ações. O que temos, na
                                    verdade, é uma CPU – Unidade Central de Processamento – composta
                                    pela Unidade de Controle, Unidade Lógica Aritmética, entre
                                    muitas outras UNIDADES FUNCIONAIS necessárias para realizar o
                                    processamento de qualquer tipo de dados que precisamos.
                                </p>
                                <p>
                                    Aí é que está o “X” da questão! Por exemplo, se um
                                    microprocessador não é capaz de executar uma soma em ponto
                                    flutuante, então este computador não poderá processar
                                    determinados tipos de dados, programas, etc. O computador ficará
                                    limitado, o que nos dias atuais não é nada interessante.
                                    Portanto, quando se PROJETA um novo microprocessador, primeiro é
                                    necessário definir que tipo de instruções, dados e programas ele
                                    será capaz de executar.
                                </p>
                                <p>
                                    Além disso, precisa-se manter a compatibilidade com
                                    microprocessadores anteriores. O novo microprocessador deve ser
                                    capaz de continuar executando os seus softwares. Não é uma ideia
                                    interessante lançar um microprocessador com muitas inovações se
                                    os usuários não puderem mais usar os softwares que estão
                                    acostumados. É claro que, um dia, logo mais à frente, a
                                    tecnologia vai mudar e, de certa forma, nos veremos na obrigação
                                    de evoluir. Os transistores, a tecnologia atual de fabricação de
                                    computadores, está em seu limite, e muitos pesquisadores estão
                                    buscando novas matérias primas para construção de processadores
                                    cada vez mais rápidos. Quando uma nova tecnologia surgir, nos
                                    encontraremos exatamente nesse ponto de evolução.
                                </p>
                                <p>
                                    Os nossos computadores, notebooks e celulares atuais são
                                    dispositivos de uso geral. Isso significa que eles precisam ter
                                    capacidade de processamento para diversos tipos de dados
                                    diferentes, que variam desde um texto simples até um vídeo em
                                    três dimensões. É diferente de um controle remoto de TV ou um
                                    Microondas, que são projetados para um fim específico. Dessa
                                    forma, as instruções que o microprocessador é capaz de executar
                                    formam o conjunto de instruções.
                                </p>
                                <p>
                                    Algumas instruções que o microprocessador de uso geral pode
                                    executar são:
                                </p>
                                <ul>
                                    <li>operações aritméticas;</li>
                                    <li>operações lógicas;</li>
                                    <li>operações relacionais;</li>
                                    <li>operações de ponto flutuante;</li>
                                    <li>transferência de dados;</li>
                                    <li>desvios condicionais;</li>
                                    <li>desvios incondicionais;</li>
                                    <li>controle;</li>
                                    <li>entre outras.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-4 navigation">
                            <span>Trila de conhecimento</span>
                            <ul>
                                <li className="active">
                                    Arquitetura de Conjunto de Instruções MIPS
                                </li>
                                <li>Primeira Instrução MIPS</li>
                                <li>Compilação de Expressões no MIPS</li>
                                <li>Convertendo uma instrução com Array no MIPS</li>
                                <li>Armazenando um valor em Array no MIPS</li>
                                <li>Instruções LW e SW com Array no MIPS</li>
                                <li>Instrução IF Simples no MIPS</li>
                                <li>Instrução IF Composto no MIPS</li>
                                <li>Instrução SLT no MIPS</li>
                                <li>Operações Lógicas no MIPS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Documentacao;