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
let userInput = document.querySelector('.userInput');
document.querySelector('.addTask').onClick = () => {
	newTask = userInput.value;
	myList.napush(newTask);
	console.log(myList.name);
};

// myTask(myList, (num) => {
//   console.log (num)
// })
