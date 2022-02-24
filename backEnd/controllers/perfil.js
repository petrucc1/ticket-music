const Cliente = require("../models/Cliente")


function renderizaPerfil(req, res, next) {
  res.render('perfil')
}



module.exports = {
  renderizaHome,
  renderizaLogin,
  renderizaAjuda,
  renderizaCadastro,
  renderizaCarrinho,
  renderizaCompraEfetuada,
  renderizaIngressos,
  renderizaPerfil,
  renderizaEventos,
  renderizaShows
}
