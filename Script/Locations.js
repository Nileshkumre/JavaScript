
alert('ok');
var button = document.getElementById("redirectButton");
button.addEventListener("click", function () {

    var url = "https://www.google.com/maps/@18.4468927,73.8301434,15z?entry=ttu";

    window.location.href = url;
});
