function getArray(a,...rest) {
    console.log(a);
    console.log(rest);
    console.log(arguments);
}
getArray(1);
getArray(1,2,34,5);
