// Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.

let num = +prompt('Введите трехзначное число'),
    numOne = ~~(num / 100),
    numOneMod = num % 100,
    numSecond = ~~(numOneMod / 10),
    numOneThirty = numOneMod % 10;
if (numOne === numSecond || numOne === numOneThirty || numSecond === numOneThirty) {
    alert('Есть одинаковые цифры')

} else alert('Нет Одинаковых цифер')