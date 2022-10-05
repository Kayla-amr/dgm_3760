//The start of my ToDo App list
let toDo = [
	{
		id: 1,
		name: 'Choose photography theme',
		category: 'Homework',
		due_date: 'Tomorrow',
		status: true
	},
	{
		id: 2,
		name: 'Organize music',
		category: 'Chores',
		due_date: 'Wednesday',
		status: false
	}
];

let theList = toDo.values()
let myList = document.querySelector('.toDos'); //giving a new varial to the class in HTML called .toDos
let removeBtn = document.querySelector('.editBtn');

  removeBtn.addEventListener('click', () => {
	theList.splice(1,1)
	displayList()
  })

document.querySelector('.clearAll').onclick = () => {
	if (theList.length > 0) {
		theList.splice(0, theList.length);
	}
	displayList();
};

let displayList = () => {
	let myTasks = '';
	
	for (let task of theList) {
		// for loop will go through each object and call the name, adding it to the list
		myTasks += '<li>' + task.name + '<span>' + '<i class="fa fa-trash ">' + '</i>' + '</span>' + '</li>';
	}
	return myList.innerHTML = myTasks;
};
// Calling functions
displayList();



