String.prototype.toJadenCase = function () {
  //...
  let arr = this.split(' ');
  let capitalize = arr.map((el) => el[0].toUpperCase() +
        el.slice(1));
  
  return capitalize.join(' ');
};
