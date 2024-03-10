var num = prompt('please enter a number')

document.write(`Input : ${num} <br>`);

if (num == 10) {
    document.write(`TEN <br>`);
}
else {
    document.write(`NOT TEN <br>`);
}

var v1 = (num == 10) ? 'TEN' : 'NOT TEN';
document.write(` ${v1} <br>`);

if (num == 10) {
    document.write(`TEN <br>`);
} else if (num == 20) {
    document.write(`TEN <br>`);
} else if (num == 30) {
    document.write(`THIRTY <br>`);
} else {
    document.write(`NOT 10 20 or 30 <br>`);
}

switch (parseInt(num)) {
    case 10:
        document.write(`TEN <br>`);
        break;
    case 20:
        document.write(`TWENTY <br>`);
        break;
    case 30:
        document.write(`THIRTY <br>`);
        break;
    default:
        document.write(`NOT 10 20 or 30 <br>`);
        break;

}


function funhighest() {
    var a = parseInt(document.getElementById('first').value);
    var b = parseInt(document.getElementById('second').value);
    var c = parseInt(document.getElementById('third').value);

    if (a > b) {
        if (a > c) {
            document.getElementById(`Highest`).value = a;
        } else {
            document.getElementById('Highest').value = c;
        }
    } else if (b > a) {
        if (b > c) {
            document.getElementById('Highest').value = b;
        } else {
            document.getElementById('Highest').value = c;
        }
    } else {
        if (c > a) {
            document.getElementById('Highest').value = c;
        } else {
            document.getElementById('Highest').value = a;
        }
    }
}