
alert('ok');

const button = document.getElementById('Get-location-button');

function gotlocation(position) {
    console.log(position);
    
}

function faliedToGet() {
    console.log("there was some issue");
}

button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotlocation, faliedToGet);
});