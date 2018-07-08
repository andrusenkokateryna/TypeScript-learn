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
/*function getMyAge(age:number, prefix:string='Age-'):string{
    return prefix + age;
}


console.log(getMyAge(40));*/
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
console.log(mySum(15, 10));
