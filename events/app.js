const btn2 = document.querySelector('#v2'); 
btn2.onclick = function () {
    alert("YOU CLICKED ME!");
    alert("I AM BUTTON #2!");
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert("YOU CLICKED BUTTON #3!");
})
