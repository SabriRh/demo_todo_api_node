const fs = require('fs').promises;

let todosList = [];

(async () => {
  try {
    data = await fs.readFile('controllers/api/todos.json', 'utf8');
    todosList = JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
})();



function readTodos() {
  return todosList;
}

function readTodo(id) {
  return todosList.find(o => o.id === id);
}

module.exports = Object.freeze({
  readTodos,
  readTodo
});
