import "./style.css";
import logo from "../../assets/images/logo.png"
import facebook from "../../assets/images/facebook.png"
import twitter from "../../assets/images/twitter.png"
import insta from "../../assets/images/insta.png"
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Cadastro() {
  //demais coisas de JS aqui
  const navigate = useNavigate()
 
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState ('')  
  const [cpf, setCpf] = useState('')

  function cadastrar(){
    axios.post('http://localhost:3001/cadastro', {
      nome:nome,
      email:email,
      senha: senha,
      CPF:cpf,
      telefone:'11-2508-1932'
    })
    .then((res)=>{
      console.log(res)
      navigate('/carrinho')

    })
    .catch(err=>{
      alert('houve um problema ao cadastrar o usuário')
      console.log(err)
    })
  }
  // retorna o html
  return (
    <div>

      <header>
        <a href="http://localhost:3000" className="logo"><img src={logo} alt="logo" /></a>
        <ul className="navigation">
          <li><a href="http://localhost:3000" tabindex="0">Início</a></li>
          <li><a href="http://localhost:3000/cadastro" tabindex="2">Login</a></li>
          <li><a href="http://localhost:3000/carrinho" tabindex="4">Carrinho</a></li>
        </ul>
      </header>

      <div class="first-conteiner">


        <img id="first-div-image"
          src="https://blush.design/api/download?shareUri=4sKSi3XHJR35rlIS&c=Hair_0%7E870cf7-0.1%7E0519fc-0.2%7E870cf7-0.3%7E0519fc-0.4%7E870cf7_Skin_0%7Eaf5b27-0.1%7Effcba7-0.2%7Ee7915c-0.3%7Ee7915c-0.4%7Eaf5b27_Top_0%7Effa200-0.1%7Eff7475-0.2%7Eff0c0c-0.3%7Effa200-0.4%7Eff7475&w=800&h=800&fm=png"
          alt="Figura de pessoas conversando" />

        <div class="second-conteiner">
          <p class="title1">  Encontre o evento perfeito para sua noite   </p><br/><br/>
          <form action="">
            <fieldset>
              <div class="third-container">
                <h1 class="first-title">Criar conta</h1>
                <input type="text" value={nome} onChange={e=>setNome(e.target.value)} placeholder="Nome completo" required />
              </div>
              <hr />

              <div>
                <input type="email" id="email" name="email" placeholder="E-mail" required />
              </div>
              <hr />

              <div>
                <input type="password" id="password" name="password" placeholder="Senha" required />
              </div>
              <hr />
              <div>
                <input oninput="mascara(this)" id="cpf" name="cpf" type="text" placeholder="CPF" required />
              </div>
              <hr />
            </fieldset>
          </form>

          <button onClick={()=> cadastrar()} class="buttonComprar">Continuar</button>

          <h3 class="second-title">
            Já tem uma conta? <a href="http://localhost:3000/login">Faça login</a>
          </h3>

        </div>
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

    </div >


  )
}