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
function addTask(){
  let userInput = document.querySelector('userInput').value
  myList.push(userInput)
}
document.querySelector('addTask').onClick = 
console.log(myList);

// myTask(myList, (num) => {
//   console.log (num)
// })
