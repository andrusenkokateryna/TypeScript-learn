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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        //private isTeacher:boolean;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age + '';
    };
    return User;
}());
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(job) {
        var _this = _super.call(this, 'Max', job) || this;
        _this.name = 'Max';
        _this.age = 100;
        return _this;
    }
    Max.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return Max;
}(User));
var user = new User('Max', 'Frontend');
var max = new Max('Frontend');
console.log(max.getAge());
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);
car.logInfo('info');
console.log(car.getCarYear());
