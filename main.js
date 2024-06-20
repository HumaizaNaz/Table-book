//1st way
for (var i = 1; i <= 10; i++) {
    console.log(2 * i);
}
//2nd way
for (var i = 1; i <= 10; i++) {
    console.log("4 X ".concat(i, " = ").concat(4 * i));
}
//3rd way
for (var i = 5; i <= 51; i = i + 5) { // means its runs add 5 + 5
    console.log(i);
}
// 4th way
// buy using function
function Table(number, value) {
    if (value === void 0) { value = 10; }
    console.log("Multiplication Table of ".concat(number));
    console.log('--------------------------');
    for (var i = 1; i <= value; i++) {
        var product = number * i;
        console.log("".concat(number, " x ").concat(i, " = ").concat(product));
    }
    console.log('--------------------------');
}
Table(5);
