// un petit script JS pour loader les todos a partir de la BD
// on va utilisé des données statique pour le demo

window.onload = () => {
  const todosNode = document.getElementById('todos');

  fetch('../controllers/api/todos.json')
    .then((response) => response.json())
    .then((todos) => {
      todosNode.innerHTML = todos
        .map((todo) => {
          return `<li>${todo.text}</li>`;
        })
        .join('\n');
    });
};
