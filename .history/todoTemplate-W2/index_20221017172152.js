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
	//clear out any tasks (li elements) that are in the UL
	todoTaskUl.innerHTML = '';

	//for each todo in the array, add it to the container UL
	todos.forEach(function(myTask) {
		todoTaskUl.innerHTML += `<li data-todoId='${myTask.id}'> ${myTask.name} </li>`;
	});
}

//add todos

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
function completeTask(){
	// function will take 1 parameter (input) an id of the todo to complete
	// find the todo to complete and then change the value of status in the todo object
		//use the .findIndex method to get the index
		//then edit the object directly using bracket notation
		//IE: myList[todoIDX].status
    
}


//create a function to delete todos
function deleteTask(){
	//much the same as the complete todo function
	//instead of editing the object, you will need to remove it from the array
}


//for complete and delete event listeners you will need to listen for events on the UL

//get a reference to the task container UL
const todoTaskUl = document.querySelector('.todoTasks');
const completedTaskUL = document.querySelector('.completedTasks');

todoTaskUl.addEventListener('click', (event) => {
	//get the id of the todo that the user clicked on.
	console.log(event.target.dataset.todoid)

	const clickedTodoId = event.target.dataset.todoid

	const todoIdx = myList.findIndex((todo) => todo.id == clickedTodoId)

	console.log(todoIdx)
	//flip the status value
	myList[todoIdx].status = !myList[todoIdx].status

	console.log(myList)

	displayTodos(myList)
})


//on page load, show the todos
displayTodos(myList)
