const arg = process.argv[2];
const num = parseInt(arg);

function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(num));
