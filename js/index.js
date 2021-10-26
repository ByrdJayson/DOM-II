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

body.addEventListener('wheel', function(e){
  body.style.color = 'green';
})

const buttons = document.querySelectorAll('button');
const buttonsArray = Array.from(buttons);

buttonsArray.forEach((item) => {
  item.addEventListener('click', function(e){
    e.target.style.color = 'orange';
  })
});
