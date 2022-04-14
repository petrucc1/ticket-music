const usuario = require('../models/usuario')

async function create(req, res) {
  try {
    const respostaCreateUsuario = await usuario.create(req.body)
    return res.json(respostaCreateUsuario)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

module.exports = {
  create,
}
