/*
Array - массив 
Массив - это упорядочная последовательность чего-либо
[]- пустой массив 
["Печенька, 2, "Тралала", 0 ,1 true, undefined, 23"];
arr.length => длинна масива (количество элементов масива)
arr[arr.length - 1] = обращение 
*/ 

let ivan = ["Печенька", 2, "Тралала", 0, 1, true, undefined, 23 ];
let ivanObj = {
    word: "Печенька",
    num: 2
}
let ivanArr = {
    0: "Печенька"
}
console.log(ivan.length);
console.log(ivan[3]);
ivan[13] = "igor";
console.log(ivan.length);
console.log(ivan[10]);

let.numbers = [];
/*Написать массив 100 рандомными числами (1-100) и посчитать их сумму*/
function getNumber(max, min){
    return Math.floor(Math.random()*
    (max - min)+ min);
} 

let i = 0;
while (i < 100){
    numbers[i] = getNumber(101,1);
    i++;
}
console.log(numbers);
let arrSum = 0;
for (let i = 0, cnt = numbers.length; i < cnt; i++){
    arrSum += numbers[i];
}
console.log(arrSum);

let fruits =[
    "Банан",
    "Манго",
    "Киви",
    "Яблоко",
    "Ананас",
    "Мандарин",
    "Хурма"
];

/*
Метотды массив 
.push(el) - добавить элемент в конец массива 
.unshift(el)- добавить  элемент в начало массива  
.pop()- забрать последнитй элемент массива
.shift()- забрать первый элемент массива 
*/ 
fruits.push("груша");
console.log(fruits);
fruits.push("персик");
console.log(fruits);


console.log (fruits);


/*
Дан массив  из 100 чисел от 1 до 100;
Создать функцию, 
котороая возвращает массив из простых 
чисел от 1 до n - рандомное число 
*/ 