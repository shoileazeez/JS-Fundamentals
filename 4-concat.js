const firstArg = process.argv[2];
const secondArg = process.argv[3];


if (firstArg == undefined && secondArg == undefined){
    console.log(firstArg + " is " + secondArg);
}   else if (firstArg && secondArg == undefined){
    console.log(firstArg + " is " + secondArg);
}    else {
    console.log(firstArg + " is " + secondArg)
}