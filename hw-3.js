//__task_1__
let password = 'пароль';
let pass = prompt("Введите пароль");
if (pass === password) { 
    alert("Пароль введен верно");
}
else {
    alert("Пароль введен неправильно");
}

//__task_2__
let c = 8;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
} // При подстановке значений с = 0, 10, -3 выдает "неверно", с = 2 выдает "верно"

//__task_3__
let d = 29;
let e = 129;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно'); 
}

//__task_4__
let a = '2';
let b = '3';
alert (a * 1 + b * 1);

//__task_5__
let monthNumber = prompt('Ведите порядковый номер месяца');
switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break;
    default:
        console.log('нет такого месяца');
        break;
}

//__task_7__
let anyNumber = prompt('Пожалуйста, введите любое число');
if (!isNaN(anyNumber)) {
    let number = parseFloat(anyNumber);
    if (number % 2 === 0) {
    alert("Число четное");    
    } else {
        alert("Число нечетное");
    }
} else {
    alert("Введено не число");
}

//__task_8__
let clientOS = prompt('Введите 0, если используете iOS, или 1, если используете Android');
if (clientOS == 0 || clientOS === 1) {
    console.log('Установите версию приложения для iOS по ссылке')
} else {
    console.log('Установите версию приложения для Android по ссылке')
}

//__task_9__
let userOS = prompt('Введите 0, если используете iOS, или 1, если используете Android');
if (userOS == 0 || userOS ===1) {
    let clientDeviceYear = prompt('Укажите год выпуска вашего мобильного устройства iOS'); 
    if (clientDeviceYear >= 2007 && clientDeviceYear <= 2014)  {
        console.log('Установите облегченную версию приложения для iOS по ссылке') 
    } else { 
        console.log('Установите обычную версию приложения для iOS по ссылке')
    }
    } else {
        let clientDeviceYear = prompt('Укажите год выпуска вашего мобильного устройства Android'); 
        if (clientDeviceYear >= 2008 && clientDeviceYear <= 2014) {
        console.log('Установите облегченную версию приложения для Android по ссылке')
        } else {
        console.log('Установите обычную версию приложения для Android по ссылке')}
}