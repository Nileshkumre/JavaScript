//try {
//    NonExistingFunction();
//} catch (e) {
//    //    document.write(`${e.message} <br>`);
//    document.write('there is some error .please try <br>');
//} finally {
//    document.write('This statement will executed always <br>');
//}


//function NonExistingFunction() {
//    document.write('NonExistingFunction() Executed <br>');
//}


window.onerror = function (message, url, line) {
    document.write(`message :${message}<br> url : ${url} <br> line number : ${line} <br>`);
    complete();
}
NonExistingFunction(); 

function complete() {
    document.write('Js Executed Sucessfully');
}
 