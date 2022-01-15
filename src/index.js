module.exports = function toReadable (n) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelwe', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const lengthNumber = n.toString().length;

  if (lengthNumber === 1) {
    return numbers[n]
  } else if (lengthNumber === 2) {
      if (n <= 20) {
        return numbers[n];
      } else if (n % 10 === 0) {
        let dec = Math.floor(n/10);
        return decimals[dec]
      } else {
        dec = Math.floor(n/10);
        let num = n % 10;
        return `${decimals[dec]}` + ` ` + `${numbers[num]}`
      }
  } else if (lengthNumber === 3) {
    dec = Math.floor(n/100);
    num = n % 10;
    avg = n.toString().split('')
    return `${numbers[dec]}` + ` ` + `hundred` + ` ${decimals[avg[1]]}` + ` ${numbers[num]}`
  } else {
    return 'error'
  }
}
}
