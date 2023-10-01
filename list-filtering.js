function filter_list(l) {
  // Return a new array with the strings filtered out
  //isInteger(el)
  let newArr = l.filter( el => typeof el === "number");
  return newArr;
}
