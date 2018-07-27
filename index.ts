
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

/*enum Job {
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
console.log(myNumber)*/









/*class User {
	
	//private isTeacher:boolean;
	 protected age:number =30;
	 

	constructor (public name:string, public job:string ){}
		
		
	

	public getAge():string {
		return this.age+'';
	}

	
}

class Max extends User {
	name:string = 'Max';
	constructor(job:string){
		super('Max',job);
		this.age = 100;
	}

	getAge():string {
		return 'Hello '+this.age;
	}
}

const user=new User('Max', 'Frontend');
const max= new Max('Frontend');
console.log(max.getAge());



abstract class Car  {
	
	model:string;
	year:number=2010;

	abstract logInfo(info:string):void;

	

	getCarYear(){
		return this.year;
	}
}

class Mercedes extends Car {
	logInfo(info:string):void{
		console.log(info);

	}
}

const car =new Mercedes();
console.log(car);
car.logInfo('info');
console.log(car.getCarYear())*/



//ИНТЕРФЕЙСЫ


/*interface ILength {
	length:number

}

function getLength(variable:ILength):void{
	console.log('getLength',variable.length);
}
getLength([1,2,3,4,5,]);

const box = {
	name:"Max",
	length:20
};
getLength(box);
getLength([1,2,3,4,5,6]);


interface IUser {
	name:string;
	age?:number;
	logInfo(info:string):void
}

interface IGetYear {
	getYear():number;
}

const user:IUser={
	name:'Max',
	age:20,
	logInfo(info) {
		console.log('Info:', info);
	}
}

class User implements IUser, IGetYear {
	name:string='user';
	job:string='Doctor';
	logInfo(info:string):void {
		console.log(info)
	}

	getYear():number {
		return 200;
	}


}

console.log(User);
*/



//Общие типы(generic)


/*function getter(data:any){
	return data;
}

console.log(getter(100));
console.log(getter('Max'));

*/
//generic



/*function genericGetter<T>(data:T): T{
	return data;
}



const array:Array<number>=[1,2,3];

let newGenericFunction:<T>(d:T)=>T=genericGetter;

console.log(newGenericFunction(100).toFixed(3));
console.log(newGenericFunction<string>('Max').length);


//generic whith classes


class Multiply<T extends number|string > {
	constructor(private a:T, private b:T){}

	public getResult():number{
		return +this.a * +this.b;
	}
}

const mNum= new Multiply(10,5);
console.log('Number: ', mNum.getResult());

const mStr= new Multiply('40', '60');
console.log('String: ', mStr.getResult());*/


//Декораторы

/*function logger(constrFn:Function){
	console.log(constrFn);
} 

function shouldLog(flag:boolean):any{
	return flag ? logger: null
}

@shouldLog(true)
class User  {
	
	constructor(public name:string, public age:number) {
		console.log('I am new user');
	}
}
*/


//=======================================================================================



/*function addShowAbility(constructorFn:Function){
	constructorFn.prototype.showHtml=function(){
		const pre = document.createElement('pre');
		pre.innerHTML = JSON.stringify(this);

		document.body.appendChild(pre);
		document.body.style.background="pink";
		document.body.style.fontSize='20px';
		let a=document.getElementsByTagName('pre');
		a.style.color='red';

	}

}

@addShowAbility

class User  {
	
	constructor(public name:string, public age:number, public job:string) {}
		
	

	

}

let user =new User('Max', 34, 'Frontend');
console.log(user);
(<any>user).showHtml();*/



//Namespace

/*
function isEmpty(d:any):boolean{
	return !d;
}

function isUndefined(d:any):boolean{
	return typeof d==='undefined'
}


console.log(isEmpty(''));
console.log(isEmpty('sa'));

console.log(isUndefined(20));
console.log(isUndefined(undefined));
console.log(isUndefined(null));


const PI=Math.PI;
const EXP=Math.E;*/

namespace Util{
export	function isEmpty(d:any):boolean{
	return !d;
}

function isUndefined(d:any):boolean{
	return typeof d==='undefined'
}

export const PI=Math.PI;
export const EXP=Math.E;

}

const EXP='TEST'

console.log(Util.isEmpty(''));
console.log(Util.isEmpty('rew'));
console.log(Util.PI);
console.log(Util.EXP);
console.log(EXP);


namespace Personnel {
 
    export interface IUser{
        displayInfo():any;
    }
     
    export class Employee {
        constructor(public name: string){
        }
    }
     
    export function work(emp: Employee) : void{
        console.log(emp.name, "is working");
    }
     
    export let defaultUser= { name: "Kate" }
}
 
let tom = new Personnel.Employee("Tom")
Personnel.work(tom);                    // Tom is working
 
console.log(Personnel.defaultUser.name);  

// Вложенность пространтв имен

namespace Data{
    export namespace Person {
        export class Empl {
         
            constructor(public name: string){
            }
        }
    }
    export namespace Clients {
        export class VipClient {
         
            constructor(public name: string){
            }
        }
    }
}
 
let mot = new Data.Person.Empl("Tom")
console.log(mot.name);
 
let sam = new Data.Clients.VipClient("Sam");
console.log(sam.name);


// Псевдонимы 

namespace Data{
    export namespace Pers {
        export class Employeen {
         
            constructor(public name: string){
            }
        }
    }
}
 
import employee = Data.Pers.Employeen;
let usr = new employee("Vanya")
console.log(usr.name);