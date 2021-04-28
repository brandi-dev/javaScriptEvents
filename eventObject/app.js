document.querySelector('button').addEventListener('click', function (evt){
    console.log(evt);
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(evt) {
    //the actual key
    console.log(e.key);
    //location of key 
    console.log(e.code);
})

//if making a game and want to listen to key up or down on anywher on page. 
window.addEventListener('keydown', function (e) {
    switch(e.code){
        case 'ArrowUp':
            console.log('UP!');
            break;
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowLeft':
            console.log('LEFT!');
            break;
        case 'ArrowRight':
            console.log('RIGHT!');
            break;
        default:
            console.log("IGNORED!");
    }
})