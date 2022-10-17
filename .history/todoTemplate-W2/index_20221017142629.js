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
myList.forEach(function(myTask) {
	document.querySelector('.tasks').innerHTML += `<li> ${myTask.name} </li>`;
});

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
	console.log(myList)
})

function addTask(){
  let userInput = document.querySelector('.userInput').value;
  const newTodoObj = {
	id: myList.length + 1,
	name: userInput,
	category: null,
	due_date: 'Wednesday',
	status: false
}

  myList.push(userInput);
}


// myTask(myList, (num) => {
//   console.log (num)
// })
