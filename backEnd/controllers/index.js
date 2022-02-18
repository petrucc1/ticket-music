function renderizaHome(req, res, next) {
    res.render('home');
}

function renderizaLogin(req, res, next) {
    res.render('login');
}

function renderizaAjuda(req, res, next) {
    res.render('ajuda');
}

function renderizaCadastro(req, res, next) {
    res.render('cadastro');
}

function renderizaCarrinho(req, res, next) {
    res.render('carrinho');
}

function renderizaCompraEfetuada(req, res, next) {
    res.render('CompraEfetuada');
}

function renderizaIngressos(req, res, next) {
    res.render('ingressos');
}

function renderizaPerfil(req, res, next) {
    res.render('perfil');
}

function renderizaEventos(req, res, next) {
    res.render('eventos');
}

function renderizaShows(req, res, next) {
    res.render('shows');
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