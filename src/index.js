// complete the function
function prime (num) {
  // code goes here

  if(num <= 1){
    return false;
  }
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true
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
