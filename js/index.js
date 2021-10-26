// Your code goes here


const welcome = document.querySelector('.intro h2');

welcome.addEventListener('mouseover', function(){
  welcome.style.display = 'none';
})

const body = document.querySelector('body');

body.addEventListener('keydown', event => {
  if (event.key === 'Delete'){
    body.style.display = 'none';
  }
})

body.addEventListener('wheel', function(){
  body.style.color = 'green';
})

const introImg = document.querySelector('.intro img');

introImg.addEventListener('click', function(){
  introImg.style.width = '50%';
})

introImg.addEventListener('dblclick', function(){
  introImg.style.width = '25%';
})


document.addEventListener('cut', function(e){
  e.target.style.display = 'none';
})
