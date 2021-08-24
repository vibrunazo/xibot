// console.log(firebase);

console.log('test');

// const testImg = document.querySelector('#testimg');
const img_left = document.querySelector('#img_left');
const img_right = document.querySelector('#img_right');
const urlEl = document.querySelector('#urlInput');

img_left.onload = function() {
    console.log(this.width + 'x' + this.height);
    console.log(this.naturalWidth + 'x' + this.naturalHeight);
}

function testf() {
    console.log('test1');
    let url = urlEl.value;
    console.log("url is: " + url)
    // testImg.src = url;
    img_left.src = url;
    img_right.src = url;
    console.log("width: " + img_left.width);
    console.log("clientWidth: " + img_left.clientWidth);
    console.log("naturalWidth: " + img_left.naturalWidth);
}

const img = new Image();
img.onload = function() {
//   console.log(this.width + 'x' + this.height);
}
img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';