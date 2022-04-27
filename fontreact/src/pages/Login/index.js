import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"



export default function Login() {
    return (
        <div>
    <section className="sec">
        
        <header>
            <a href="http://localhost:3000" className="logo"><img src={logo} alt='logo'/></a>
            <div className="toggleMenu" onclick="menuToggle();"></div>
            <ul className="navigation">
                <li><a href="http://localhost:3000" tabindex="0">Início</a></li>
                <li><a href="http://localhost:3000/cadastro" tabindex="2">Login</a></li>
                <li><a href="http://localhost:3000/carrinho" tabindex="4">Carrinho</a></li>
            </ul>
        </header>

        <main>

            <section className='banner'/>

                <div className="campo">
                    <h1 className="texto"><strong> Conectar A Sua Conta </strong></h1>
                    <form>
                        <div className="formulario">
                            <label for="username" className="login">Digite seu e-mail:</label>
                            <input type="email" id="username" name="username" required className="caixa"/>
                            <label for="pwd" className="login">Senha:</label>
                            <input type="password" id="pwd" name="pwd" className="caixa"/>
                        </div>
                   </form>
                    <button className="botao" type="button">Entrar</button>
                </div>

                <hr className="linha"/>

                <a href="/frontEnd/paginaCadastro/"> </a>

                            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis facere amet quidem doloremque
                                dignissimos natus libero numquam, aliquam, vitae commodi maxime eos perferendis voluptas doloribus
                                nulla accusantium unde? Ducimus, fuga?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nobis dolore exercitationem vel alias
                                eaque sint nemo delectus iure! Et modi quod accusamus possimus error vel non ipsam obcaecati sequi!
                            </h4>
      </main>

    </section>

    <footer>

        <div className="container-footer-all">

            <div className="container-body">

                <div className="colum1">
                    <h1>Mais Informações</h1>

                    <p>Todos os preços e condições comerciais estão sujeitos a alteração comercial sem prévio aviso. <br /> Tickect music Eventos Culturais Ltda - CNPJ 10.000.000/0001-00 Rua Fernão Dias , 130 - Cj 5 - CEP: 00110-030 - São Paulo - SP.</p>

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
                    <a href="">Informações Da Compania</a> | <a href="">Privacidades e Politicas</a> | <a href="">Termos
                        e Condições</a>
                </div>
            </div>

        </div>

    </footer>

</div>

    )

}