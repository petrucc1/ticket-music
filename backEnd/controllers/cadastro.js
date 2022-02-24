const cadastro = require('../models/cadastro')

//index ou getAll
async function index(req, res) {
  try {
    const listaCadastro = await cadastro.findAll()
    return res.json(listaCadastro)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

async function getOne(req, res) {
  const id = req.params.id
  try {
    const retornoDoCadastro = await cadastro.findByPk(id)
    return res.json(retornoDoCadastro)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

async function create(req, res) {
  try {
    const respostaCreateCadastro = await cadastro.create(req.body)
    return res.json(respostaCreateCadastro)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

async function update(req, res) {
  const id = req.params.id
  try {
    const restornoDoUpdate = await cadastro.update(req.body, {
      where: { id: id }
    })

    return res.json(restornoDoUpdate)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

async function destroy(req, res) {
  const id = req.params.id
  try {
    const retornoDoDestroy = await cadastro.destroy({ where: { id: id } })
    return res.json(retornoDoDestroy)
  } catch (error) {
    return res.json({ message: error.message })
  }
}

module.exports = {
  index,
  create,
  update,
  destroy,
  getOne
}
