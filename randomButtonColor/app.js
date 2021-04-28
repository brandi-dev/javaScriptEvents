const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', colorize) 
}

const lis = document.querySelectorAll('li');

for(let li of lis) {
    li.addEventListener('click', colorize)
}

function colorize(){
    this.style.backgroundColor = makeRandomColor(); 
    this.style.color = makeRandomColor(); 
}