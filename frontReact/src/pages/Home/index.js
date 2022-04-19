import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"
import show1 from "../../assets/images/show1.jpg"
import show2 from "../../assets/images/show2.jpg"
import show3 from "../../assets/images/show3.jpg"
import show4 from "../../assets/images/show4.jpg"
import show5 from "../../assets/images/show5.jpg"
import show6 from "../../assets/images/show6.jpg"

export default function Home() {
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

            <section className="sec">
                <h1> Os melhores shows e eventos você encontra na ticketmusic </h1>
            </section>

            <section className="shows">
                <div className="section group">
                    <div className="col span_1_of_2">
                        <a href="sad"><img src={show1} alt="Show1" /></a>
                        <a href="/frontEnd/paginaShows/02ShowPixote/02ShowPixote.html"> <img src={show2} alt="Show2" /></a>
                        <a href="/frontEnd/paginaShows/03ShowJustin/03ShowJustin.html"> <img src={show3} alt="Show3" /></a>
                    </div>
                    <div className="col span_1_of_2">
                        <a href="/frontEnd/paginaShows/04ShowAnitta/04ShowAnitta.html"> <img src={show4} alt="Show4" /></a>
                        <a href="/frontEnd/paginaShows/05ShowLudmilla/05ShowLudmilla.html"> <img src={show5} alt="Show5" /></a>
                        <a href="/frontEnd/paginaShows/06ShowPatatiPatata/06ShowPatatiPatata.html"> <img src={show6} alt="Show6" /></a>
                    </div>
                </div>
            </section>

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