
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

type User ={name:string, age:number,getJobs:()=>string[], jobs:string[], logName?:()=>void}

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

