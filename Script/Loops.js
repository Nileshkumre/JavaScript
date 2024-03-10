//N = 1;
//do {
//    document.write(`${N}`);
//    N++;
//} while (N <= 10);

//for (var i = 1; i <= 10; i++) {
//    document.write(`${i} `);

//}

document.write(`<br>`);

//for (var i = 1; i <= 10; i++) {
//    if (i == 3) {
//        break;
//    }
   
//    document.write(`${i} `);
//}
//document.write(`<br>`);
//document.write(`loops Excuted succesfully`);

for (var i = 1; i <= 10; i++) {
    if (i == 3) {
        continue;
    }

    document.write(`${i} `);
}
document.write(`<br>`);
document.write(`loops Excuted succesfully`);