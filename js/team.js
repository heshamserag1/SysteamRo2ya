let btnForm = document.querySelectorAll('.add');
let btnClose = document.getElementById('close');
let lightBox = document.getElementById('lightBox');

function openForm(i) {
    lightBox.style.display = 'flex'
}

btnClose.addEventListener('click', function (){
    lightBox.style.display = 'none'
});