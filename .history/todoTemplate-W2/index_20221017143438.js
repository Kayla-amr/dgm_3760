let myList = [
	{
		id: 0,
		name: 'Choose photography theme',
		category: 'Homework',
		due_date: 'Tomorrow',
		status: false
	},
	{
		id: 1,
		name: 'Organize music',
		category: 'Chores',
		due_date: 'Wednesday',
		status: false
	}
];

//app title
document.querySelector('.formTitle').innerText = 'Basic App Form';

//view todods


function displayTodos(todos) {
	//get a reference to the task container UL
	const taskUl = document.querySelector('.tasks');

	//clear out any tasks (li elements) that are in the UL
	taskUl.innerHTML = '';

	//for each todo in the array, add it to the container UL
	todos.forEach(function(myTask) {
		taskUl.innerHTML += `<li> ${myTask.name} </li>`;
	});
}

//add todos

// document.querySelector('.addTask').onClick = () => {
// 	let userInput = document.querySelector('.userInput').value;
// 	myList.push(userInput);
//   myList()
// };

//store element object for the add task button
const addBtn = document.querySelector('.addTask')

addBtn.addEventListener('click', (event) => {
	addTask()
})

function addTask(){
  let userInput = document.querySelector('.userInput').value;
  const newTodoObj = {
	id: myList.length + 1,
	name: userInput,
	category: null,
	due_date: null,
	status: false
}

  myList.push(newTodoObj);

  displayTodos(myList)
}

// create a function to complete todos
	// function will take 1 parameter (input) 

//on page load, show the todos
displayTodos(myList)

// myTask(myList, (num) => {
//   console.log (num)
// })
