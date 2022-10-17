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

addBtn.addEventListener('click', (event) =>)

function addTask(){
  let userInput = document.querySelector('.userInput').value;
  myList.name.push(userInput);
}
console.log(myList.name);
document.querySelector('.addTask').onClick = addTask()


// myTask(myList, (num) => {
//   console.log (num)
// })
