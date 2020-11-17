//Классы?? What is it?

// let a =  {
//  x:10,
//  y:20,
//  moveTo: function(newX, newY ){
//      this.x = newX;
//      this.y = newY;
//  } 
// }



// let b  =  {
//     x:25,
//     y:10,
//     moveTo: function(newX, newY ){
//         this.x = newX;
//         this.y = newY;
//     } 
//    }


//    let c  =  {
//     x:30,
//     y:-22,
//     moveTo: function(newX, newY ){
//         this.x = newX;
//         this.y = newY;
//     } 
//    }


// создание протатитпа объекта (типа класса на Js)

function Point(x, y){
this.x = x;
this.y = y;
}
Point.prototype.moveTo = function Point(x, y){
    this.x = x;
    this.y = y;
}
Point.prototype.toString = function(){
    return `Точка с координатами  (x ${this.x}; y ${this.y})`;
}
let n = 4;
let word = "Hello";


// console.log(n.toString(),n);


let A = new Point(12, 50);
let B = new Point(6, 14);
A.moveTo(10, 10);
console.log(A.toString());
console.log(B);