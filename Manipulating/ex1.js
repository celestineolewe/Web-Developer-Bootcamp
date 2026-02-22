const img = document.querySelector('img');
img.src = 'https://images.unsplash.com/photo-1581061090142-c2cd0ec9f021?w=200';
img.alt = 'chicken'


const container = document.querySelector('#container');
container.style.textAlign = 'center';
const img = document.querySelector('img');
img.style.width = '150px';
img.style.borderRadius = '50%';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!


const span = document.querySelectorAll('span');
    for (let i = 0; i < span.length; i++) {
        span[i].style.color = colors[i];
    }
    

    const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
    lis[i].classList.toggle('highlight');
}

document.createElement('img');
const newImg = document.createElement('img');