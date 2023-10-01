function descendingOrder(n){
  //...
  let arr = n.toString().split('');
  let sorted = [...arr].sort(function(a, b){return b - a}).join('');
  
  return Number(sorted);
}
console.log(descendingOrder(123456789))
