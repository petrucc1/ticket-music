import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"
import palco from "../../assets/images/palco.png"
import showsepultura from "../../assets/images/showsepultura.jpg"



export default function Shows() {
    //demais coisas de JS aqui

    // retorna o html
    return (
        <div>
            <header>
            <a href="../paginaHome/home.html" className="logo"><img src={logo} alt="logo" /></a>
                <ul className="navigation">
                    <li><a href="../paginaHome/home.html" tabindex="0">Início</a></li>
                    <li><a href="../paginaCadastro/cadastro.html" tabindex="2">Login</a></li>
                    <li><a href="../paginaCarrinho/carrinho.html" tabindex="4">Carrinho</a></li>
                </ul>
            </header>



            <main>

                <section class="show-page">

                    <img src={showsepultura} class="show-event" alt="Banner Sepultura" />

                    <div class="info-conteiner">
                        <h1>Sepultura - SepulQuarta </h1><br />
                        <p>21 de outubro de 2023, 20h </p>
                        <p>Arena Ticket Music - São Paulo, SP</p>
                    </div>

                    <hr />
                    <div class="descricao-conteiner">
                        <h2>Descrição de evento </h2>
                        <p>Andreas Kisser, Derrick Green, Paulo Xisto Jr. e Eloy Casagrande. Foto de Marcos Hermes. <br/>
                            O Sepultura se prepara para fazer o retorno aos palcos depois de mais de dois anos longe do público. Esse momento se torna ainda mais especial por se tratar do show de lançamento do álbum Quadra, que a banda foi impedida de fazer turnê por conta da pandemia do novo coronavírus. A apresentação está marcada para o dia 21 de Outubro, na Audio, em São Paulo. Os ingressos já estão à venda.
                            O Sepultura havia acabado de lançar Quadra, seu 15º álbum de estúdio, quando a crise sanitária forçou público e músicos a ficarem distantes. "Estamos ansiosos para retornar e encontrar com os fãs", comenta Andreas Kisser, que compõe a banda junto de Paulo Xisto Jr. (baixo), Derrick Green (vocal) e Eloy Casagrande (bateria).
                            Para esse novo momento, além de faixas do Quadra, como "Ali", "Guardians of Earth" e "Fear; Pain; Chaos; Suffering", o Sepultura reserva surpresas para quem estiver na plateia. "Vamos tocar também músicas mais antigas que fazem parte da nossa carreira", comenta Andreas Kisser. </p>
                    </div>



                    <div class="ingresso-conteiner">


                        <div id="esquerda">
                            <img src={palco} alt="palco" />
                        </div>


                        <div id='direita'>
                            <div class="Plateia">
                                <h1>Ingressos</h1>
                                <br/>
                                    <div class="plateia1">
                                        <h2>Pista</h2>
                                        <h2> R$ 200,00</h2>
                                        <br/>
                                            <button onclick="window.location.href='/frontEnd/paginaCarrinho/carrinho.html'"> Comprar ! </button>
                                    </div>
                                    <br/>
                                        <br/>
                                            <p>Em atendimento ao Decreto nº 60.488, de 27 de agosto de 2021, para acesso ao local do evento é obrigatório a apresentação do comprovante de vacinação contra COVID-19, com no mínimo as 2 (Duas) doses.
                                                O comprovante pode ser físico ou digital (disponível nos aplicativos Conecte SUS, Poupatempo Digital e E-saudeSP).
                                                Todas as demais exigências do protocolo vigente serão rigorosamente atendidas.</p>
                                        </div>
                            </div>
                    </div>
                </section>            


            </main>
            <footer>
                <div className="container-footer-all">
                    <div className="container-body">
                        <div className="colum1">
                            <h1>Mais Informações</h1>

                            <p>
                                Todos os preços e condições comerciais estão sujeitos a alteração comercial sem prévio aviso. <br /> Tickect music Eventos Culturais Ltda - CNPJ 10.000.000/0001-00 Rua Fernão Dias , 130 - Cj 5 - CEP: 00110-030 - São Paulo - SP.
                            </p>
                        </div>

                        <div className="colum2">
                            <h1>Redes Sociais</h1>

                            <div className="row">
                                <img src={facebook} alt="facebook" />
                                <label>Nos Siga no Facebook</label>
                            </div>
                            <div className="row">
                                <img src={twitter} alt="Twitter" />
                                <label>Nos Siga no Twitter</label>
                            </div>
                            <div className="row">
                                <img src={insta} alt="insta" />
                                <label>Nos Siga no Instagram</label>
                            </div>
                        </div>

                        <div className="colum3">
                            <h1>Contatos</h1>
                        </div>
                    </div>
                </div>

                <div className="container-footer">
                    <div className="footer">
                        <div className="copyright">
                            © 2021 Ticket Music - Todos os Direitos Reservados
                        </div>

                        <div className="information">
                            <a href="s">Informações Da Compania</a> |
                            <a href="s">Privacidades e Politicas</a> |
                            <a href="s">Termos e Condições</a>
                        </div>
                    </div>
                </div>
            </footer>
                    </div>
                    )
    }