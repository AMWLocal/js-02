let year = +prompt('Year'),
    month = +prompt('Month'),
    day = +prompt('Day'),
    yearR = year,
    monthR = month,
    dayR = day

if (
    yearR < 0 ||
    (month <= 0 || month > 12) ||
    (day <= 0 || day > 31) ||
    (month == 2 && day > 29)
) {
    alert('incirrect date')
} else {

    switch (month) {
        case 1:
            if (day === 31) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 2:
            let v = year % 4 == 0

            let maxD = 28
            if (v) {
                maxD = 29
            }

            if (day === maxD) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 3:
            if (day === 31) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 4:
            if (day === 30) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 5:
            if (day === 31) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 6:
            if (day === 30) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 7:
            if (day === 31) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 8:
            if (day === 31) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 9:
            if (day === 30) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 10:
            if (day === 31) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 11:
            if (day === 30) {
                dayR = 1
                monthR += 1
            } else {
                dayR += 1
            }
            break;
        case 12:
            if (day === 31) {
                dayR = 1
                monthR = 1
                yearR += 1
            } else {
                dayR += 1
            }
            break;
    }

    alert(
        `${yearR}-${monthR}-${dayR}`
    )
}
