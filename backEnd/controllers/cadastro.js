const usuario = require('../models/cadastro')

async function create(req, res) {
  try {
    const respostaCreateCadastro = await usuario.create(req.body)
    return res.json(respostaCreateCadastro)
  } catch (error) {
    console.log(error.message)
    return res.status(500)
  }
}

module.exports = {
  create,
}