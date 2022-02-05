// module.exports = function toReadable (n) {
//   const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelwe', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
//   const decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
//   const lengthNumber = n.toString().length;

//   if (lengthNumber === 1) {
//     return numbers[n]
//   } else if (lengthNumber === 2) {
//       if (n <= 20) {
//         return numbers[n];
//       } else if (n % 10 === 0) {
//         let dec = Math.floor(n/10);
//         return decimals[dec]
//       } else {
//         dec = Math.floor(n/10);
//         let num = n % 10;
//         return `${decimals[dec]}` + ` ` + `${numbers[num]}`
//       }
//   } else if (lengthNumber === 3) {
//     dec = Math.floor(n/100);
//     num = n % 10;
//     avg = n.toString().split('')
//     return `${numbers[dec]}` + ` ` + `hundred` + ` ${decimals[avg[1]]}` + ` ${numbers[num]}`
//   } else {
//     return 'error'
//   }
// }
module.exports = function toReadable (number) {
  numbers = [{1 : 'one'}, {2 : 'two'}, {3 : 'three'}, {4 : 'four'}, {5 : 'five'}, {6 : 'six'}, {7 : 'seven'}, {8 : 'eight'}, {9 : 'nine'}, {10: 'ten'}, {11: 'eleven'}, {12: 'twelve'}, {13: 'thirteen'}, {14: 'fourteen'}, {15: 'fifteen'}, {16: 'sixteen'}, {17: 'seventeen'}, {18: 'eighteen'}, {19: 'nineteen'}] ;
  decimals = [{2: 'twenty'}, {3: 'thirty'}, {4: 'forty'}, {5: 'fifty'}, {6: 'sixty'}, {7: 'seventy'}, {8: 'eighty'}, {9: 'ninety'}];
  str ='';
  if (number == 0) return 'zero';
  while (number) {
    if (number > 0 && number <= 19) {
      numbers.forEach( item => {
        for (key in item) {
          if (key == number) str = item[key];
        }
      });
      break;
    } 
    if (number >= 20 && number <= 99) {
      last = number % 10;
      if (last == 0) str = ''; 
      else {
        numbers.forEach(item => {
          for (key in item) {
            if (key == last) str = ' ' + item[key];
          }
        }); 
      }
      number = Math.floor(number/10);
      last = number % 10;
      decimals.forEach(item => {
        for (key in item) {
          if (key == last) str = item[key] + str;
        }
      });
      break;
   
    }
    if (number >= 100 && number <= 999) {
      if (number % 100 == 0) {
        last = Math.floor(number / 100);
        numbers.forEach(item => {
          for (key in item) {
            if (key == last) str = item[key] + ' hundred'; 
          }
        });
        break;
      }
      last = number % 100;
      if (last > 0 && last <= 19) {
        numbers.forEach( item => {
          for (key in item) {
            if (key == last) str = item[key];
          }
        });
        number = Math.floor(number/100);
      }
      else {
        last = number % 10;
        if (last == 0) str = ''; 
        else {
          numbers.forEach(item => {
            for (key in item) {
              if (key == last) str = ' ' + item[key];
            }
          }); 
        }
        number = Math.floor(number/10);
        last = number % 10;
        if (last == 0) str = str + '';
        else {
          decimals.forEach(item => {
            for (key in item) {
              if (key == last) str = item[key] + str;
            }
          });
        }
        number = Math.floor(number/10);
      }
      last = number % 10;
      numbers.forEach(item => {
        for (key in item) {
          if (key == last) str = item[key] + ' hundred ' + str;
        }
      });
      break;
   
    }
  }
  return str;
}
