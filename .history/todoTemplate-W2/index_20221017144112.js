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
		taskUl.innerHTML += `<li data-todoId=''> ${myTask.name} </li>`;
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
	// function will take 1 parameter (input) an id of the todo to complete
	// find the todo to complete and then change the value of status in the todo object
		//use the .findIndex method to get the index
		//then edit the object directly using bracket notation
		//IE: myList[todoIDX].status

//create a function to delete todos
	//much the same as the complete todo function
	//instead of editing the object, you will need to remove it from the array

//for complete and delete event listeners you will need to listen for events on the UL

//grab reference to the contaier ul
const taskUl = document.querySelector('.tasks');

taskUl.addEventListener('click', (event) => {
	console.log(event.target)
})


//on page load, show the todos
displayTodos(myList)

// myTask(myList, (num) => {
//   console.log (num)
// })
