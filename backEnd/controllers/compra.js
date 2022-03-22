const compra = require("../models/compra")
const axios = require('axios').default;

async function create(req, res, next) {
  try {
      const respostaCreateCompra = await compra.create(req.body)
      return res.json(respostaCreateCompra)
  } catch (error) {
      return res.json({ message: error.message })
  }

}

async function index(req, res) {
  try {
      const listaCompra = await Compra.findAll();
      return res.json(listaCompra)
  } catch (error) {
      return res.json({ message: error.message })
  }
}

async function update(req, res) {
  const id = req.params.id
  try {
      const restornoDoUpdate = await usuario.update(req.body, { where: { id: id } })

      return res.json(restornoDoUpdate)
  } catch (error) {
      return res.json({ message: error.message })
  }
}
async function destroy(req, res) {
  const id = req.params.id
  try {
      const retornoDoDestroy = await usuario.destroy({ where: { id: id } })
      return res.json(retornoDoDestroy)
  } catch (error) {
      return res.json({ message: error.message })
  }

}

module.exports = {
  create,
  index,
  update,
  destroy,  
}