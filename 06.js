//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
let sum = +prompt('Введите суму,USD');
let cyrrent = prompt('Введите валюту')
const EUR = 0.85;
const UAH = 27.74;
const AZN = 1.7;

switch (cyrrent) {
    case 'EUR':
        alert(sum * EUR)
        break;
    case 'UAN':
        alert(sum * UAH)
        break;
    case 'AZN':
        alert(sum * AZN)
        break;
    default:
        alert('Нема не касе')
}