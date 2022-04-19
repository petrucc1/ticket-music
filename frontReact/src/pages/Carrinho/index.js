import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"


export default function Carrinho() {
    //demais coisas de JS aqui

    // retorna o html
    return (
        <div>
            <section class="sec">

                <header>
                    <a href="../paginaHome/home.html" className="logo"><img src={logo} alt="logo" /></a>
                    <ul className="navigation">
                        <li><a href="../paginaHome/home.html" tabindex="0">Início</a></li>
                        <li><a href="../paginaCadastro/cadastro.html" tabindex="2">Login</a></li>
                        <li><a href="../paginaCarrinho/carrinho.html" tabindex="4">Carrinho</a></li>
                    </ul>
                </header>



                <main>
                    <div class="container">
                        <section class="resumoDaCompra">
                            <h2>Resumo da compra</h2><br />
                            <h3>Nome do Evento</h3><br />
                            <hr color="black" size="3" />
                            <table id="resumo">
                                <tr>
                                    <td>N50</td>
                                    <td>Meia entrada</td>
                                    <td>R$ 50,00</td>
                                </tr>
                                <tr>
                                    <td>N51</td>
                                    <td>Inteira</td>
                                    <td>R$ 100,00</td>
                                </tr>
                            </table>
                            <hr color="black" size="3" /><br />
                            <div class="totalLine">
                                <h2>Total</h2>
                                <h2>R$ 150,00</h2>
                            </div>
                        </section>
                        <section class="formaDePagamento">
                            <h2>Forma de Pagamento</h2><br />
                            <h3>Escolha a forma de pagamento desejada:</h3><br />
                            <div class="howPay">
                                <div>
                                    <input type="radio" id="PIX" name="howPay" value="Pix"></input> <label for="Pix">Pix</label>
                                </div>

                                <div>
                                    <input type="radio" id="Cartão de Crédito" name="howPay" value="Cartão de Crédito" checked />
                                    <label for="Cartão de Crédito">Cartão de Crédito</label>
                                </div>

                                <div>
                                    <input type="radio" id="Boleto" name="howPay" value="Boleto" />
                                    <label for="Boleto">Boleto</label>
                                </div>

                            </div>

                            <div class="dataPay">
                                <h4> Entre com os dados do seu cartão de crédito: </h4>
                                <form>
                                    <div class="infoCard">
                                        <label> Número do Cartão de Crédito:</label>
                                        <div class="inline">
                                            <input type="text" name="number" id="numeberCard" placeholder="XXXX" />
                                            <input type="text" name="number" id="numeberCard" placeholder="XXXX" />
                                            <input type="text" name="number" id="numeberCard" placeholder="XXXX" />
                                            <input type="text" name="number" id="numeberCard" placeholder="XXXX" />
                                        </div>
                                    </div>
                                    <div class="infoCard">
                                        <label> Nome do titular do cartão:</label>
                                        <input type="text" name="name" id="nameCard" placeholder="Nome completo" />
                                    </div>
                                    <div class="inline2">
                                        <div class="infoCard">
                                            <label> Validade do Cartão:</label>
                                            <div class="secureCode">
                                                <input type="text" name="expiry" id="expireCard" placeholder="MM/AAAA" />
                                            </div>
                                        </div>
                                        <div class="infoCard">
                                            <label> Código de Segurança:</label>
                                            <div class="secureCode">
                                                <input type="text" name="cvv" id="cvvCard" placeholder="CVV" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="inline2">
                                        <div class="cpfCard">
                                            <label> CPF do Titular do Cartão:</label>
                                            <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00" />
                                        </div>
                                        <div id="send">
                                            <input id="bt" type="submit" value="Finalizar compra" />
                                        </div>
                                    </div>

                                </form>
                                <br/>
                            </div>
                        </section>
                    </div>
                    <div id="aceite"> </div>
                    <div class="aceite">
                        <input type="checkbox" name="aceite" value="aceite" checked/> <label for="aceite"> Eu li e concordo com os
                            Termos de
                            Uso. Todas as compras estão sujeitas a aprovação. Em caso de dúvidas acesse nossa central de
                            ajuda.</label>
                    </div>

                </main>
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