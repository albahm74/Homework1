//__task_1____
let i = 1;
while (i<=2) {
    console.log('Привет');
    i++;
}

//__task_2____
let a = 1;
while (a<=5) {
    console.log(a);
    a++; 
}

//__task_3____
let b = 7;
while (b<=22) {
    console.log(b);
    b++;
}

//__task_4____
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'    
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
 }

 //__task_5____
let n = 1000;
let m = 0;
while (n > 50) {
  n /= 2;
  m++;
}

console.log(`number: ${n}`); 
console.log(`iteration: ${m}`);

//__task_6____
const firstFriday = 2;
for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчёт.`);
}
 