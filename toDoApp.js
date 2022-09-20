//The start of my ToDo App list
var toDo = [
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




//defining HTML ID tags
document.getElementsByClassName('toDos').firstChild.nodeValue = toDo;


//Display the ToDo List
function list(){
    return toDo();
}

//Allow to edit a ToDo
function editName(){
    
}

//Allow to change status on a ToDo
function editStatus(){

}

//Allow to adjust the category of a ToDo
function editCategory(){

}
 
//Changes the due date of a ToDo
function editDueDate(){

}

//give the user the advantage to mark the ToDo as complete
function completeToDo(){

}

//allows to remove ToDo from app
function deleteToDo(){
 toDo.shift()
}

