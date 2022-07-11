// let hour = 3
// let minute = 30
// let stTime = ''

// function hourToWord(hour) {
//     let hourInWords = ''
//     switch (hour >= 0) {
//         case hour == 1:
//             hourInWords = 'one'
//             break;
//         case hour == 2:
//             hourInWords = 'two'
//             break;

//         case hour == 3:
//             hourInWords = 'three'
//             break;

//         case hour == 4:
//             hourInWords = 'four'
//             break;

//         case hour == 5:
//             hourInWords = 'five'
//             break;

//         case hour == 6:
//             hourInWords = 'six'
//             break;

//         case hour == 7:
//             hourInWords = 'seven'
//             break;

//         case hour == 8:
//             hourInWords = 'eight'
//             break;

//         case hour == 9:
//             hourInWords = 'nine'
//             break;
//         case hour == 10:
//             hourInWords = 'ten'
//             break;
//         case hour == 11:
//             hourInWords = 'eleven'
//             break;
//         case hour == 12:
//             hourInWords = 'twelve'
//             break;


//         default:

//             break;
//     }
//     return hourInWords
// }



// function minutesToWords(minute) {

//     let minuteInWords = ''
//     switch (minute >= 0) {
//         case (minute >= 1) && (minute <= 12):
//             minuteInWords = hourToWord(minute)
//             break;
//         case minute >= 13 && minute <= 19 && minute != 15 && minute != 13:
//             minuteInWords = hourToWord(Number(String(minute)[1])) + 'teen'
//             break;
//         case minute >= 20 && minute <= 29:
//             minuteInWords = 'twenty' + " " + hourToWord(Number(String(minute)[1]))
//             break;

//         case minute >= 31 && minute <= 49:
//             minuteInWords = 'thirty' + " " + hourToWord(String(minute)[1])
//             break;

//         case minute >= 40 && minute <= 49:
//             minuteInWords = 'forty' + " " + hourToWord(String(minute)[1])
//             break;
//         case minute >= 50 && minute <= 59:
//             minuteInWords = 'fifty' + " " + String(minute)[1]
//             break;
//         default:

//             if (minute == 15) {
//                 minuteInWords = "quarter"
//             } if (minute == 30) {
//                 minuteInWords = "half"
//             }
//             else if (minute == 13) {
//                 minuteInWords = "thirteen"
//             }
//             break;

//     }
//     return minuteInWords
// }

// switch (minute >= 0) {
//     case (minute == 0):
//         stTime = hourToWord(hour) + " " + `o' clock`
//         break;
//     case 60 - minute == 30:
//         stTime = "half" + " " +  `past` + " " + hourToWord(hour)
//         break;
//     case 60 - minute <= 29:
//         hour = hour + 1
//         stTime = minutesToWords(60 - minute) + `${60 - minute == 15 ? '' : ' minutes'} ` + " " + ` to` + " " + hourToWord(hour)
//         break;
//     case 60 - minute >= 29:
//         stTime = minutesToWords(minute) + `${minute == 1 ? 'minute' : minute == 15 || minute == 30 ? '' : ' minutes'} ` + " " + `past` + " " + hourToWord(hour)
//         break;
//     default:
//         break;
// }

// console.log(stTime)