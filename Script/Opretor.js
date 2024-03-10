//alert('operator JS Loaded');

var a = 10, b = 10;
var r1 = a == b;
document.write(` a==b : ${r1} <br>`);



r1 = a != b;
document.write(` a!=b : ${r1} <br>`);


r1 = a < b;
document.write(` a < b : ${r1} <br>`);


r1 = a <= b;
document.write(` a < =  b : ${r1} <br>`);

r1 = a === b;
document.write(` a < ===  b : ${r1} <br>`);

b = '10';
r1 = a == b;
document.write(`a==b : ${r1} <br>`);

r1 = a === b;
document.write(`a===b : ${r1} <br>`);


b = 10;// number type

r1 = a === b;
document.write(`a===b : ${r1} <br>`);

var c = 20;

r1 = a == b && a < c;
document.write(`a==b && a < c; : ${r1} <br>`);

r1 = a == b && a > c;
document.write(`a==b && a > c; : ${r1} <br>`);


r1 = a == b || a > c;
document.write(`a==b || a > c; : ${r1} <br>`);

a++;
document.write(`a++ :${a} <br>`);

a++;
document.write(`a++ : ${a} <br>`);

//a = a + 10;
a += 10;
document.write(`a = a + 10 : ${a} <br>`);

a = 10;
b = 'Nilesh';
document.write(`${a + b} <br>`);

a = 15;
b = 10;
document.write(`${a / b} <br>`);
document.write(`${a % b} <br>`);


//type conversion 
var s = '10', y = `10`;
document.write(`${x + y} <br>`);

document.write(`${parseInt(x) + parseInt(y)} <br>`);




