let body = document.querySelector('#container');

let myHeart = `
<div class="white"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="white"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="white"></div>
<!---->
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<!---->
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<!---->
<div class="white"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="white"></div>
<!---->
<div class="white"></div>
<div class="white"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="white"></div>
<div class="white"></div>
<!---->
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="red"></div>
<div class="red"></div>
<div class="red"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<!---->
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="red"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
<div class="white"></div>
`;

body.innerHTML += myHeart;

let redSquare = document.querySelectorAll('.red');

function showLove(){
    for (let n of redSquare){
        n.style.backgroundColor = '#d20a2c';
    }
}
