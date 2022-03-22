const eventos = require("../models/eventos")
const axios = require('axios').default;

async function index(req, res) {
  try {
      const listaEventos = await eventos.findAll();
      return res.json(listaEventos)
  } catch (error) {
      return res.json({ message: error.message })
  }
}

async function getOne(req, res) {
  const id = req.params.id
  try {
      const retornoDoEventos = await Cliente.findByPk(id)
      return res.json(retornoDoEventos)
  } catch (error) {
      return res.json({ message: error.message })
  }
}

module.exports = {
  index,
  getOne,
}
