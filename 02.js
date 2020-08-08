// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let num = +prompt('Введите число от 0 до 9')

let result
switch (num) {
    case 1:
        result = '!'
        break
    case 2:
        result = '@'
        break
    case 3:
        result = '#'
        break
    case 4:
        result = '$'
        break
    case 5:
        result = '%'
        break
    case 6:
        result = '^'
        break
    case 7:
        result = '&'
        break
    case 8:
        result = '*'
        break
    case 9:
        result = ')'
        break
    case 0:
        result = ')'
        break
    default:
        result = 'undefind'

}
alert(`${result} - спецсимлол этой кнопки`)