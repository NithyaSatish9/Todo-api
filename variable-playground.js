var person = {
	name:'Andrew',
	age: 21
};

function updatePerson(obj) {
	obj.age = 24;
}

//updatePerson(person);
//console.log(person);

var grades = [15, 20];

function addGrades(arrayObj) {
	arrayObj.push(34, 40);
	debugger;
}

addGrades(grades);
console.log(grades);
