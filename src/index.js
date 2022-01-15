module.exports = function toReadable (number) {
  function toReadable(n) {

  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelwe', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const decimals = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const lengthNumber = n.toString().length;

  if (lengthNumber === 1) {
    console.log(numbers[n]);
  } else if (lengthNumber === 2) {
      if (n <= 20) {
        console.log(numbers[n]);
      } else {
        dec = Math.floor(n/10);
        num = n % 10;
        console.log(`${decimals[dec]}` + ` ` + `${numbers[num]}`)
      }
  } else if (lengthNumber === 3) {
    console.log('hy')
  } else {
    console.log('error');
  }
}

toReadable(0);
}
