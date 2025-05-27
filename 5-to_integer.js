const argCount = process.argv[2];
const intNum = parseInt(argCount);

if (isNaN(intNum)) {
  console.log("Not a number");
} else{
    console.log("My number:", intNum);
}