var imagespath = ['Images/img 1.jpg', 'Images/img 2.jpg', 'Images/img 3.jpg', 'Images/img 4.jpg', 'Images/img 5.jpg'];

var index = 0;

function setImage() {
    changeImage();

    intervalid = setInterval(changeImage, 2000);
}

function changeImage() {
    document.getElementById('poster').src = imagespath[index];
    index++;
    if (index == imagespath.length) {
        index = 0;
    }
}

function stopSlideShow() {
    clearInterval(intervalid);
}