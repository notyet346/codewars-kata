function decode(str) {
  if (typeof str !== 'string') return "Input is not a string";
  let str1 = str;
  let arr = str1.split('');
  let firstHalfUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
  let secondHalfUpper = ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N'];
  let firstHalfLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
  let secondHalfLower = ['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n'];


  let arr2 = [];

  arr.forEach((element) => {
    if (firstHalfUpper.includes(element)) {
      arr2.push(secondHalfUpper[firstHalfUpper.indexOf(element)]);
    } else if (secondHalfUpper.includes(element)) {
      arr2.push(firstHalfUpper[secondHalfUpper.indexOf(element)]);
    } else if (firstHalfLower.includes(element)) {
      arr2.push(secondHalfLower[firstHalfLower.indexOf(element)]);
    } else if (secondHalfLower.includes(element)) {
      arr2.push(firstHalfLower[secondHalfLower.indexOf(element)]);
    } else {
      arr2.push(element);
    }
  });

  let str2 = arr2.join('');
  return str2;

}
