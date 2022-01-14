var buttonOpen = document.querySelector('.fa-bars');
var buttonClosed = document.querySelector('.fa-times');
var menu = document.querySelector('#bkg-menu');
var liProjects = document.querySelector('#liProjects');
var liSkills = document.querySelector('#liSkills');
var btnResume = document.querySelector('#btnResume');

buttonOpen.addEventListener('click', OpenMenu);
liProjects.addEventListener('click', CloseMenu);
liSkills.addEventListener('click', CloseMenu);
btnResume.addEventListener('click', CloseMenu);
buttonClosed.addEventListener('click', CloseMenu);

function OpenMenu (){
    menu.classList.remove('hide');
    buttonClosed.classList.remove('hide');
    buttonOpen.classList.add('hide');
}

function CloseMenu (){
    menu.classList.add('hide');
    buttonClosed.classList.add('hide');
    buttonOpen.classList.remove('hide');
}
