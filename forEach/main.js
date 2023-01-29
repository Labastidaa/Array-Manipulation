// Lista de tareas
// Elementos: Titulo, Estado(Completed or not)
// Render in html

const taskList = [
    {title : 'Learn forEach', done: true},
    {title : 'Learn Map', done: false},
    {title : 'Learn Filter', done: true},
    {title : 'Learn Reduce', done: false}
]

// Create Unordered List
let nodes = document.createElement('ul');
// Select container DIV 
const App = document.getElementById('f-E');

taskList.forEach(task => {
    const element = 
    // Using Template literals ( `string text ${expression} string text`)
    // Considered text in JS but in HTML file read as tags.

    // Ternary Operator ( ? : ) to evaluate the property 'done' as boolean.
    `
      <li> 
        <input type="checkbox" ${task.done ? 'checked' : ''}>
        ${task.title}
      </li>
    `
    nodes.innerHTML += element;
  });

  App.append(nodes);