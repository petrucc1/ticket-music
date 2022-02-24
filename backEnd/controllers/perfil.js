const cadastro = require('../models/cadastro')

function renderizaPerfil(req, res, next) {
  res.render('perfil')
}

module.exports = {
  renderizaPerfil
}
