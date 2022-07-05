// warm up challenges

//1.

let span1 = document.querySelector(".mess-with-me");
span1.style.fontSize = '40px';

//2.
//to get a tag with a specific class do 'tagName.className'
let paraMess = document.querySelector('p.mess-with-me');
paraMess.style.backgroundColor = "green";

//3.

let hideDino = document.querySelector("#hide-me")
// hideDino.style.visibility = "hidden";
hideDino.style.display = "none";

//4.
let triDino = document.querySelector('#triceratops');

triDino.style.width = "324px";

//Event listener challenges
//1.
span1.addEventListener('click', function () {
    if (span1.style.color !== 'orange') {
        span1.style.color = 'orange'
    } else {
        span1.style.color = ''
    }
});

//2.
triDino.addEventListener('click', function () {
    if (triDino.style.border !== '2px solid red') {
        triDino.style.border = '2px solid red'
    } else {
        triDino.style.border = '0px none red'
    }
});

let feathers = document.querySelector('#feathers');

feathers.addEventListener('click', function () {
    if (feathers.style.opacity === '') {
        feathers.style.opacity = '.5'
    } else {
        feathers.style.opacity = '';
    }
});
//4.
let toggle = document.querySelector('#toggle');
let row = document.querySelector('#row');
toggle.addEventListener('click', function () {
    if (row.style.backgroundColor === '') {
        row.style.backgroundColor = 'black';
        // } else if (row.style.backgroundColor === 'black') {
        // row.style.backgroundColor = 'purple';
    } else {
        row.style.backgroundColor = '';
    }
});

let biggify = document.querySelector('#biggify');

biggify.addEventListener('mouseenter', function () {
    biggify.style.width = '200px';
});

biggify.addEventListener('mouseleave', function () {
    biggify.style.width = '162px';
});