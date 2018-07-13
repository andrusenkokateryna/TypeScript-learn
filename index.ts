
/*//string
let str:string = 'string';

//number

let num:number=10;

//boolean
let x:boolean=true;
let f:boolean=false;

//other

let un:any ='1';
un =1;
un=true;*/



// МАССИВЫ

/*let numArray:Array<number>=[1,2,3,];
let strArray:string[] =['1', '2', '3'];
let boolArray:boolean[]=[true, false];
//tuples
let array:[number, number, string]=[1,2,'3'];

*/





// ФУНКЦИИ


/*
function getMyAge(age:number, prefix:string='Age-'):string{
	return prefix + age;
}


console.log(getMyAge(40));

var mySum:(a:number, b:number)=> number;

function sum (num1:number, num2:number) {
	return num1 + num2;

}
mySum=sum;

console.log(mySum(15,10))
*/

//Объекты

/*type User ={name:string, age:number,getJobs:()=>string[], jobs:string[], logName?:()=>void}

let user:User =  {
name: 'TS',
age:50,
jobs:['a','b'],
getJobs(){
	return this.jobs
},
logName() {
	console.log(this.name);
}

};

let user2 :User= {
	name:'Max',
	age:30,
	jobs:['2'],
	getJobs(){
	return this.jobs
}
};
*/

/*type User = {name: string, age:number}

const user:User= {
	name:'Max',
	age:20
};

function logUser(user:User):void {
	console.log(user.name+' '+user.age);
}

logUser(user);

let eer;
eer='1';
eer=2*/




// типы ts

enum Job {
	Frontend,
	Backend=50,
	Designer
}

const job:Job=Job.Backend;
console.log(job);

const job2:Job=Job.Designer;
console.log(job2);

function throwNewError(err:string):never{
	throw new Error(err);
	
}


let newVar;
newVar=null;

let myNumber:null|number=20;
myNumber=null;
console.log(myNumber)









/*class User {
	
	private isTeacher:boolean;
	 protected age:number =30;
	 

	constructor (public name:string, public job:string){}
		
		
	

	private getAge():number {
		return this.age
	}

	public setTitle(title:boolean){
		console.log(this.isTeacher);
		this.isTeacher=title;
		console.log(this.isTeacher);
		console.log(this.getAge());
	}
}

const user=new User('Max', 'Frontend');
user.setTitle(false);*/
