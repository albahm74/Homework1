//__task_1__
let i = 1;
while (i<=2) {
    console.log('Привет');
    i++;
}

//__task_2__
let a = 1;
while (a<=5) {
    console.log(a);
    a++; 
}

//__task_3__
let b = 7;
while (b<=22) {
    console.log(b);
    b++;
}

//__task_4__
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'    
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
 }

 //__task_5__
let n = 1000;
let m = 0;
while (n > 50) {
  n /= 2;
  m++;
}

console.log(`number: ${n}`); 
console.log(`iteration: ${m}`);

//__task_6__
const firstFriday = 2;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
}
 