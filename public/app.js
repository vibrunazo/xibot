// console.log(typeof firebase);

// import { getAnalytics, logEvent } from "/__/firebase/analytics";

// firebase is undefined when testing locally,
// checking so we can still test locally without errors
if (typeof firebase !== 'undefined') {
    var analytics = firebase.analytics();
}

// const testImg = document.querySelector('#testimg');
const el_img_left = document.querySelector('#img_left');
const el_img_right = document.querySelector('#img_right');
const el_img_original = document.querySelector('#img_original');
const el_url = document.querySelector('#urlInput');
const el_tab_original = document.querySelector('#tab_original');
const el_tab_inv = document.querySelector('#tab_inv');
const el_cont_original = document.querySelector('#original-container');
const el_cont_inv = document.querySelector('#output-container');

const el_lastupdate = document.querySelector('.lastupdate');

el_lastupdate.textContent = 'Last updated: ' + document.lastModified;

let params = new URL(window.location.href).searchParams;
let img_param = params.get('i');
console.log('img param on load: ' + img_param);

if (img_param !== null) {
    console.log('img is NOT null');
    el_url.value = img_param;
    testf();
}

el_img_left.onload = function() {
    console.log(this.width + 'x' + this.height);
    console.log(this.naturalWidth + 'x' + this.naturalHeight);
}

function testf() {
    console.log('test1');
    let url = el_url.value;
    console.log("url is: " + url)
    // testImg.src = url;
    el_img_left.src = url;
    el_img_right.src = url;
    el_img_original.src = url;
    console.log("width: " + el_img_left.width);
    console.log("clientWidth: " + el_img_left.clientWidth);
    console.log("naturalWidth: " + el_img_left.naturalWidth);
    if (typeof firebase !== 'undefined') {
        analytics.logEvent('search', {value: url});
    }
}

function clickedOriginal() {
    console.log('original');
    el_tab_inv.classList.remove('is-active');
    el_tab_original.classList.add('is-active');
    el_cont_original.classList.remove('is-hidden');
    el_cont_inv.classList.add('is-hidden');
}

function clickedInv() {
    console.log('inv');
    el_tab_original.classList.remove('is-active');
    el_tab_inv.classList.add('is-active');
    el_cont_inv.classList.remove('is-hidden');
    el_cont_original.classList.add('is-hidden');
}