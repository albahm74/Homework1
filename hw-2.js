//__task_1__
 let num = 10;
 alert(num);
 num = 20;
 alert(num);

//__task_2__
 const releaseYearFirstIphone = 2007;
 alert(`Год выпуска первого Iphone: ${releaseYearFirstIphone}`);

//__task_3__
 const nameCreatorJavaScript = "Брендан Эйх";
 alert(`Имя Создателя JavaScript: ${nameCreatorJavaScript}`);

//__task_4__
 let a = 10;
 let b = 2;
 alert(`Числа: ${a}; ${b}.\nСумма: ${a + b}\nРазность: ${a - b}\nПроизведение: ${a * b}\nЧастное: ${a / b}\n `);

//__task_5__
 let c = 2;
 c **= 5;
 alert(c);

//__task_6__
 let d = 9;
 let e = 2;
 alert(`Остаток от деления: ${d % e}`);

//__task_7__
 let numb = 1;
 numb += 5;
 numb -= 3;
 numb *= 7;
 numb /= 3;
 numb++;
 numb--;
 alert(numb);

//__task_8__
 let age = number(prompt("Сколько вам лет?"));
 alert(age);

//__task_9__
 let user = {
     name: 'Frank',
     age: 45,
     isAdmin: true
    };

//__task_9.1__
 user['city of residence'] = "Mannheim";

//__task_9.2__
 user.age = 50;

//__task_9.3__
 delete user['city of residence'];

//__task_9.4__
 let info = prompt("Какую информацию хотите узнать о пользователе?");
 alert(user[info]);

//__task_10__
 let userName = prompt(`Введите ваше имя: `);
 alert(`Привет, ${userName}`);
