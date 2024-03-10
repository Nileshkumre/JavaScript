function showCurrentTime() {
    var date = new Date();

    document.getElementById('currentTime').innerText = date;
}

function StartClock() {
     intervalid = setInterval(showCurrentTime, 1000);
}

function StopClock() {
    clearInterval(intervalid);
}

function stopSession() {
   // alert('Session is Over');
    window.close();
}

//stopSession();

/*setTimeout(stopSession, 5000);  */

function sessionAlert() {
    timeoutId = setTimeout(stopSession, 5000);
}

function sessionAlertStop() {
    clearTimeout(timeoutId);
}