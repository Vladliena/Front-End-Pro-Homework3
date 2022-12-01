let firstNumber;
let secondNumber;
let thirdNumber;

do {
    firstNumber = parseFloat(prompt('add first number'));
} while (!firstNumber || isNaN(firstNumber))

do {
    secondNumber = parseFloat(prompt('add second number'));
} while (!secondNumber || isNaN(secondNumber))

do {
    thirdNumber = parseFloat(prompt('add third number'));
} while (!thirdNumber || isNaN(thirdNumber))


const arithmeticAverage = (firstNumber+secondNumber+thirdNumber)/3

alert(arithmeticAverage)




// let numberOfTries = 3;
// let number;
//
//     for (i=1; i<=numberOfTries; ) {
//         do {
//             number = parseFloat(prompt(`add number: ${i}`))
//             if (number){
//                 i++
//                 number+=number+number
//             }
//         } while (!number || isNaN(number));
//     }
//
//     let result = number / numberOfTries
//
//     alert(result)

