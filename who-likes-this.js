function likes(names) {
  // 6kyu
  let message = "";
  let arrLength = names.length;
  let otherLikes = arrLength - 2;
  
  if(arrLength > 3) {
    message = `${names[0]}, ${names[1]} and ${otherLikes} others like this`;
  } else if( arrLength === 3) {
    message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if(arrLength === 2) {
    message = `${names[0]} and ${names[1]} like this`;
  } else if(arrLength === 1) {
    message = `${names[0]} likes this`;
  } else if(arrLength === 0) {
    message = `no one likes this`;
  }
  return message;
}
