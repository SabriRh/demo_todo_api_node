const express = require('express');
const bodyParser = require('body-parser');

const controller = require('../../controllers/api');

const router = express.Router();

router.post('/todos', bodyParser.json({}), (req, res, next) => {
  const text = req.body.text;
  // ici creation de l'objet todo et insertion dans BD
  // puis renvoyer la reponse et le status
});

router.get('/todos', (req, res, next) => {
  res.json(controller.readTodos());
});

router.get('/todos/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  res.json(controller.readTodo(id) || null);
});

router.delete('/todos/:id', (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  // ici supression de l'element, s'il existe
  // puis renvoyer la reponse et le status
});

module.exports = router;
