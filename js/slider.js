var images = ['images/1.jpg' , 'images/2.jpg' , 'images/3.jpg'];
var i = 0;
var duration = 5000;
function sliderActive() {
    document.banner.src=images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(sliderActive, duration);
}

window.onload = sliderActive;