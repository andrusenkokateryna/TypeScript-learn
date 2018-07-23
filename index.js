"use strict";
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
function genericGetter(data) {
    return data;
}
var array = [1, 2, 3];
var newGenericFunction = genericGetter;
console.log(newGenericFunction(100).toFixed(2));
console.log(newGenericFunction('Max').length);
//generic whith classes
var Multiply = /** @class */ (function () {
    function Multiply(a, b) {
        this.a = a;
        this.b = b;
    }
    Multiply.prototype.getResult = function () {
        return +this.a * +this.b;
    };
    return Multiply;
}());
var mNum = new Multiply(10, 5);
console.log('Number: ', mNum.getResult());
var mStr = new Multiply('40', '60');
console.log('String: ', mStr.getResult());
//# sourceMappingURL=index.js.map