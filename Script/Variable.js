var a = 'Golbal variable';
function fun1(para) {
    //a = 'Local variable value assigned within fun1()';
    var a = 'fun1() : Local variable';
    //var b = 'fun1() : Declared variable';
    b = 'fun1() declared variable';
    document.write(`fun1 : a : ${a}  b : ${b} <br>`);

    if (para === 10) {
        //var result = 'TEN';
        //let result = 'TEN';
        const result = 'TEN';
        //const result; // inititalization is mandatory at the time of declairing const keyword

        document.write(`inside if block : ${result}  <br>`);
        //result = 'NEW TEN'; 

        //document.write(`inside if block : ${result}  <br>`);
    }
    //document.write(`Outside if block: ${result}  <br>`);

}

 fun1(10);

function fun2() {
    document.write(`fun2 : a : ${a}   b : ${b} <br>`);
}
fun2();