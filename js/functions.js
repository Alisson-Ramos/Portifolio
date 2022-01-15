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
