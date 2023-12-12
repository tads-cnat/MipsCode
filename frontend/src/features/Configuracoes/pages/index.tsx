import "./page.css";

import { Footer, Header } from "../../../components";

const Configuracoes = () => {
    return (
        <>
            <Header />
            <div className="d-flex p-relative">
                <div className="sidebar">
                    <input type="text" placeholder="Encontre nas configurações..." />

                    <nav>
                        <span>Informações Básicas</span>
                        <ul>
                            <li className="active">
                                <a href="">Perfil do usuário</a>
                            </li>
                            <li>
                                <a href="">Logon e Segurança</a>
                            </li>
                        </ul>
                        <span>Preferências</span>
                        <ul>
                            <li>
                                <a href="">Exibição</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="main p-5">
                    <section>
                        <div>
                            <h2>Configurações</h2>
                            <div className="breadcrumbs">
                                <span>
                                    <a href="">
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
                                <span>
                                    <a href="">Configurações</a>
                                </span>
                                <span>/</span>
                                <span className="active">
                                    <a href="">Configurações Básicas</a>
                                </span>
                            </div>
                        </div>

                        <h3>Perfil do usuario</h3>
                        <div className="perfil">
                            <div className="status">
                                <img src="/imgs/profile.png" />
                                <button className="ConfigButton"> Enviar nova foto</button>
                                <button className="ConfigButton red"> Remover foto</button>
                            </div>
                            <div className="atualizar">
                                <div>
                                    <label>Nome</label>
                                    <input type="text" placeholder="Gilbert Azevedo" />
                                </div>
                                <div>
                                    <label>Biografia</label>
                                    <textarea
                                        placeholder="Sou Gilbert Azevedo, um programador apaixonado pelo que faço. Tudo começou quando eu tinha 12 anos e ganhei meu primeiro computador. A partir daí, não parei mais de aprender. Sempre fui muito curioso e gostava de descobrir como as coisas funcionavam. Isso me ajudou muito na minha carreira, pois me permitiu ter um olhar crítico e analítico sobre o código e o funcionamento dos sistemas. Hoje, trabalho como programador freelance e também sou professor de programação. Amo ensinar aos outros o que sei e ajudar a formar novos profissionais. Acredito que a programação é uma das áreas mais dinâmicas e interessantes da tecnologia, e por isso mesmo, é um constante desafio. E eu adoro um bom desafio!
                    "
                                    />
                                </div>
                                <button className="ConfigButton green">Salvar</button>
                            </div>
                        </div>

                        <h3>Logon e Segurança</h3>
                        <div className="logon">
                            <div className="atualizar">
                                <div>
                                    <label>Email</label>
                                    <input type="text" placeholder="gilbertazevedo@gmail.com" />
                                </div>
                                <div>
                                    <label>Confirmação de senha</label>
                                    <input type="text" placeholder="**********" />
                                </div>
                                <button className="ConfigButton">Cancelar</button>
                                <button className="ConfigButton green">Atualizar</button>
                            </div>
                            <div className="senha">
                                <div>
                                    <label>Senha</label>
                                    <input type="text" placeholder="**********" />
                                </div>
                                <button className="ConfigButton red">Solicitar exclusão de conta</button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Configuracoes;