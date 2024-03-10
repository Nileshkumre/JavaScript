document.getElementById('btn1').onclick = btnClick;
function btnClick() {
    alert('External js function called');
}

document.write('<br> Varialbe Values <br>');
var a = 10;
document.write(a + '<br>');
a = 10.45;
document.write(a + '<br>');

var b = true;
document.write(b + '<br>');

var c = 'true';
document.write(c + '<br>');

var n = "Nilesh";
document.write(n + '<br>');
n = 'nilesh';
document.write(n + '<br>');

var len = n.length;
document.write('Number of character :' + len + '<br>');

var s1 = "nilesh";
var s2 = "     Kumre";
var s = s1 + ' ' + s2;
document.write(s + '<br>');
console.log(s);  

s = s1.concat(' ', s2);
document.write(s + '<br>');

//show value within doble quote

var v1 = '"Nilesh"';
document.write(v1 + '<br>');

var v1 = "'Nilesh'";
document.write(v1 + '<br>');

var v1 = "\"Nilesh\"";
document.write(v1 + '<br>');

var v1 = "Nilesh\nKumre";
document.getElementById('txt').value = v1;

document.write(v1.toLocaleUpperCase() + '<br>');
document.write(v1.toLocaleLowerCase() + '<br>');

var fn = "Nilesh", ln = "Kumre";
var FullName = ` Full name : ${fn} ${ln} <br>`;
document.write(FullName);

var a = 10, b = 20;
document.write(`Addition : ${a} + ${b} = ${a + b} <br>`);

var empname = 'Nilesh';
var i1 = empname.indexOf('i');
document.write(`index of i : ${i1} <br>`);


var empname = 'Nilesh';
var i1 = empname.indexOf('Z');
document.write(`index of i : ${i1} <br>`);


var ename = "ajay";
var i2 = ename.indexOf('a');
document.write(`index of a :${i2} <br>`);

var ename = "ajay";
var i2 = ename.lastIndexOf('a');
document.write(`index of a :${i2} <br>`);


var email = "Nileshkumre56@gmail.com";
var result = email.substring(0, 12);
document.write(`$substring() : ${result} <br>`);

var email = "Nileshkumre56@gmail.com";
var result = email.slice(0, 12);
document.write(`$Slice : ${result} <br>`);


var email = "Nileshkumre56@gmail.com";
var result = email.substr(0, 12);
document.write(`$ substr : ${result} <br>`);


var email = "Nileshkumre56@gmail.com";
var result = email.substring(12, 0);
document.write(`$substring() : ${result} <br>`);

var email = "Nileshkumre56@gmail.com";
var result = email.slice(12, 0);
document.write(`$Slice : ${result} <br>`);


var email = "Nileshkumre56@gmail.com";
var result = email.substr(12, 0);
document.write(`$ substr : ${result} <br>`);


var email = "Nileshkumre56@gmail.com";
var result = email.substring(5, 12);
document.write(`$substring() : ${result} <br>`);

var email = "Nileshkumre56@gmail.com";
var result = email.slice(5, 12);
document.write(`$Slice : ${result} <br>`);


var email = "Nileshkumre56@gmail.com";
var result = email.substr(5, 12);
document.write(`$ substr : ${result} <br>`);


email = "Nileshkumre56@gmail.com";
var index = email.indexOf('@');
var username = email.substring(0, index);
var domain = email.substring(index +1, email.length);
document.write(`Email : ${email} <br> username : ${username} Domain :${domain}`);


var content = ` Robbert van de Corput (Dutch pronunciation: [ˈrɔbərt fɑn də ˈkɔrpʏt][a]; born January 7, 1988), known professionally as Hardwell, is a Dutch DJ and music producer from Breda.[1] He was voted the world's number one DJ by DJ Mag in 2013 and again in 2014.[2] In 2022, he was ranked at number 43 in the top 100 DJs poll by DJ Mag.[3] He is best known for his sets at music festivals, including Ultra Music Festival, Sunburn and Tomorrowland.

He first gained recognition in 2009 for his bootleg of "Show Me Love vs. Be".He founded the record label Revealed Recordings in 2010 and a radio show and podcast Hardwell On Air in 2011. He has released 10 compilation albums through his label, as well as two documentary films.His debut studio album, United We Are, was released on January 23, 2015.[4][5]

On 7 September 2018, he had announced his indefinite hiatus from touring, stating`; 

//var shortText = content.substring(0,50);

//document.getElementById('content').innerText = shortText + `<a href="#">read more ....</a>`;

var r1 = content.replace('Harwell', 'Nilesh');
document.write.getElementById('content').innerText = r1;



