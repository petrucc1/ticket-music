import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"



export default function Login() {
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
            <div>
                <div className="campo">

                    <h1 className="texto"><strong> Conectar a sua conta </strong></h1>
                    <form>
                    <div className="formulario">
                    <label for="username" className="login">Digite seu e-mail :</label>
                        <input type="email" id="username" name="username" required className="caixa"/>
                        <label for="pwd" className="login">Senha:</label>
                        <input type="password" id="pwd" name="pwd" className="caixa"/>
                        </div>     
                    </form>
                        <button className="botao" type="button">Entrar</button>
                      
                    </div>



                        <a href="/frontEnd/paginaCadastro/"> </a>

                        <hr/>
                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis facere amet quidem doloremque
                                dignissimos natus libero numquam, aliquam, vitae commodi maxime eos perferendis voluptas doloribus
                                nulla accusantium unde? Ducimus, fuga?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nobis dolore exercitationem vel alias
                                eaque sint nemo delectus iure! Et modi quod accusamus possimus error vel non ipsam obcaecati sequi!
                            </h4>
            </div>

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