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
function getLength(variable) {
    console.log('getLength', variable.length);
}
getLength([1, 2, 3, 4, 5,]);
var box = {
    name: "Max",
    length: 20
};
getLength(box);
getLength([1, 2, 3, 4, 5, 6]);
var user = {
    name: 'Max',
    age: 20,
    logInfo: function (info) {
        console.log('Info:', info);
    }
};
var User = /** @class */ (function () {
    function User() {
        this.name = 'user';
        this.job = 'Doctor';
    }
    User.prototype.logInfo = function (info) {
        console.log(info);
    };
    User.prototype.getYear = function () {
        return 200;
    };
    return User;
}());
console.log(User);
//# sourceMappingURL=index.js.map