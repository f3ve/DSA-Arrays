const array = require('./myArray')

function main(){
  // array.SIZE_RATIO + 3

  let arr = new array()

  arr.push(3)
  arr.push(5);
  arr.push(15);
  arr.push(19);
  // arr.push(45);
  // arr.push(10);

  console.log(arr)
}

main()