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
var user = {
    name: 'TS',
    age: 50,
    jobs: ['a', 'b'],
     logName: function () {
        console.log(this.name);
    },
    
    getJobs: function () {
        return this.jobs;
    },
   
};
var user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs: function () {
        return this.jobs;
    }
};
