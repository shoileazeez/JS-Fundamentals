const a = process.argv[2];
const b = process.argv[3];

if (isNaN(a) || isNaN(b)) {
  console.log("NaN");
} else {
  function add(x, y) {
    console.log(Number(x) + Number(y));
  }

  add(a, b);
}
