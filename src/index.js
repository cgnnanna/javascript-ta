// complete the function
function prime (num) {
  // code goes here

  //creates a variable to store boolean value
  let isPrime = true;

  //checks if the argument is a positive integer
  if(num < 1){
    isPrime = false;
    return isPrime;
  }

  // checks if the argument is 1 since 1 is neither a prime nor composite number
  if(num === 1){
    isPrime = false;
    return isPrime;
  }

  /*checks for a prime integer while looping through 
  from integer 2 down to a number before that number
  */
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      isPrime = false;
      break;
    }
  }
  /*
    compares the boolean value of isPrime if it is either false or true after the loop
  */
  if(isPrime){
    return true;
  }else{
    return false;
  }

}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
