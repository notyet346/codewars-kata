function persistence(num) {
   //code me
  if (num.toString().length === 1) return 0;
  
  let newNum = num;
    let counter = 0;
  while(newNum.toString().length > 1){
    let arr = newNum.toString().split('');
    let val = arr.reduce((a, b) => a * b , 1);
      console.log(val);
    newNum = val;
      counter++;
  }  

    return counter;
}

persistence(39);
