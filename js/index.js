const introH2 = document.querySelector('.intro h2');


introH2.addEventListener('mouseover', function(event){
    event.target.style.color = 'green';
})


const textContainerP = document.querySelector('.text-content h2');

textContainerP.addEventListener('dblclick', function(event){
    event.target.style.color = 'blue';
})

const bus = document.querySelector('.intro img');
const images = document.querySelectorAll('img');
function deleteKey(event){
    if(event.key === 'Delete'){
        bus.style.display = 'none';
    } else return
        
}

document.addEventListener('keydown', deleteKey);

function insertKey(event){
    if(event.key === 'Insert'){
        bus.style.display = 'flex';
        bus.style.height = 'auto';
    } else return
        
}

document.addEventListener('keydown', insertKey);

function minusKey(event){
    if(event.key === '-'){
        bus.style.height = '150px';
    } else return
        
}

document.addEventListener('keydown', minusKey);


const body = document.querySelector('body');

body.addEventListener('wheel', function(event){
    body.style.fontFamily = 'Comic Sans MS';
})



body.addEventListener('cut', (event) => {
    event.target.style.display = 'none';
})

body.addEventListener('select', (event) => {
    event.target.style.fontSize = 'xx-large';
})