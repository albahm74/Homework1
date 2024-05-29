function fruitAnswer() {
let fruit =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruit = fruit.sort(() => Math.random() - 0.5);
alert(fruit);
let oneAnswer = prompt('Введите первый элемент массива');
let twoAnswer = prompt('Введите последний элемент массива');
   if (oneAnswer === fruit[0] && twoAnswer === fruit[fruit.length - 1]) {
    alert("Вы ввели оба слова правильно.");
   } else {
    alert("Вы ввели одно или оба слова неправильно, попобуйте всё сначала.");
   }
}
alert(fruitAnswer());