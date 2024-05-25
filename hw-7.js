//__task__1__
const str = 'js';
let strUp = str.toUpperCase()
console.log(strUp);

//__task__2__
function getArrStr(arr,str2) {
    return arr.filter(elm => elm.toLowerCase(str2).startsWith(str2));
}
console.log(getArrStr(['король', 'валет', 'Дама', 'туз', 'Туз', 'дама', 'Король'], 'туз'));

//__task__3__
let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

//__task__4__
const arr4 = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...arr4));
console.log(Math.min(...arr4));

//__task__5__
function getRandNumb(max,min) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandNumb(0,10));

//__task__6__
const randArr = (numb6) => {
    let arr6 =[];
    for (let i = 0; i < numb6/2; i++) {
        arr6.push(Math.floor(Math.random() * numb6));
    }
    console.log(arr6);
};
randArr(6);

//__task__7__
function randBet(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randBet(1, 7));

//__task__8__
console.log(new Date());

//__task__9__
let curDate = new Date();
curDate.setDate(curDate.getDate() + 73);
console.log(curDate);

//__task__10__
function formDate(date) {
    let dayWeek = ['воскресенье', 'понедельник', 'вторник', 
    'среда', 'четверг', 'пятница', 'суббота'];
    let month = ['января', 'февраля', 'марта', 'апреля', 'мая',
     'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `Дата: ${date.getDate()} ${month[date.getMonth()]} 
    ${date.getFullYear()} - это ${dayWeek[date.getDay()]}\nВремя: 
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
console.log(formDate(new Date()));

//__task__11__
let fruit =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruit = fruit.sort(() => Math.random() - 0.5);
console.log(fruit);
let oneAnswer = prompt('Введите первый элемент массива');
let twoAnswer = prompt('Введите последний элемент массива');
if (oneAnswer === fruit[0] && twoAnswer === fruit[fruit.length - 1]) {
    alert("Вы ввели оба слова правильно.");
} else {
    alert("Вы ввели одно или оба слова неправильно, попобуйте всё сначала.");
}