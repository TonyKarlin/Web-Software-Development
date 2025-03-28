// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here

const elm = document.getElementById('todo-list');

for (let i = 0; i < todoList.length; i++) {
  const list = document.createElement('li');
  elm.appendChild(list);

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.id = `check-${i + 1}`;
  if (todoList[i].completed) {
    checkBox.checked = true;
  }
  list.appendChild(checkBox);

  const html = `<label for="todo-${i + 1}">${todoList[i].task}</label>`;
  list.insertAdjacentHTML('beforeend', html);
}
