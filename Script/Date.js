var today = new Date();

document.write(`Current DateTime : ${today} <br>`);

var date = today.getDate();
document.write(`getdate() : ${date} <br>`);

var month = today.getMonth(); // it return index number o month
document.write(`getMonth() ; ${month} month in number${month + 1} <br>`);

// month name

var months = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul',
    'Sep', 'Oct', 'Nov', 'Dec'];

document.write(`Month name() ; ${months[month]} <br>`);


var year = today.getFullYear();
document.write(`getFullYear : ${year} <br>`);


var day = today.getDay();
document.write(`getday () : ${day} <br>`);

var days = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];
document.write(`Day Name : ${days[day]} <br>`);

//25/01/2024

document.write(`date : ${date}/${month + 1}/${year} <br>`);
document.write(`date : ${date}/${months[month]}/${year} <br>`);

function formatDate(input) {
    var d = input.getDate();
    var m = input.getMonth() + 1;
    var y = input.getFullYear();

    if (d < 10) {
        d = '0' + d;
    }
    if (m > 10) {
        m = '0' + m;
    }
    return `${d}/${m}/${y}`;



}

var result = formatDate(today);
document.write(`formated date : ${result} <br>`);

var dob = new Date('09/16/1990');  // parsing starting to date
document.write(` Date of Birth : ${dob} <br>`);

if (today > dob) {
    document.write(`${formatDate(today)} is greter than ${formatDate(dob)} <br>`);
}