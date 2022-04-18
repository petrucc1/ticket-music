const usuario = require('../models/usuario')

async function create(req, res) {
  try {
    const respostaCreateCadastro = await usuario.create(req.body)
    return res.json(respostaCreateCadastro)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

module.exports = {
  create,
}