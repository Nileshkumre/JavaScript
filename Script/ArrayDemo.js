// 1 st way declare array

//var numbers1 = [];
//var numbers1 = [10, 20, 30,'Nilesh','Maheshwari'];
//document.write(`numbers1 size :${numbers1.length} <br>`);

//// 2nd way to declare array

////var numbers2 = new Array();
//var numbers2 = new Array(10, 20, 30, 40);
//document.write(`numbers2 size :${numbers2.length} <br>`);

//var a = 10;
//document.write(a);


//var numbers1 = [10, 20, 30, 'Nilesh', 'Maheshwari'];
//document.write(`numbers1 size :${numbers1.length} <br>`);

//document.write(' ********* ORIGINAL ARRAY *************** <br>');
//for (var i = 0; i < numbers1.length; i++) {
//    document.write(`${numbers1[i]} `);
//}


//document.write(' ********* Adding new item     ARRAY *************** <br>');


//numbers1[5] = 50;
//for (var i = 0; i < numbers1.length; i++) {
//    document.write(`${numbers1[i]} `);
//}


var numbers = [10, 20, 30];
document.write(`Numbers of item ; ${numbers.length} <br>`);

document.write('************ All items *********** <br>');

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]}`);
}
document.write('<br>');


//// push() --. function to add item at the end in the array 

numbers.push(40);
document.write('************ All items *********** <br>');

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}

document.write(`<br>`);

/*/ pop it  returns item from end in the aaray*/

var item = numbers.pop(); 
document.write(`${item} <br>`);


document.write('************ All items *********** <br>');

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]} `);
}

document.write('<br>')

// shift() --> it return itme from start from the array

 

// unshift --> to add item begenning in the  aaray

numbers.unshift(40);
document.write('*** ALL ITEM AFTEER numbers.unshift(40) *** <br>');

for (var i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]}`);

}
document.write(`<br>`);


var index = numbers.indexOf(40);
document.write(`${index}`);

var index = numbers.indexOf(30);
document.write(`${index}`);

numbers.reverse();
document.write(`**** ALL NUMBERS REVERSE *** <br>`);

for (i = 0; i < numbers.length; i++) {
    document.write(`${numbers[i]}`);
}
document.write(`<br>`);
//document.write(`<br>`);

//var index = numbers.indexof(40);
//document.write(`${index}`);

//for (var i =; i < index.length; i++) {
//    document.write(`${numbers[i]}`);

//}
//document.write('<br>');
    
