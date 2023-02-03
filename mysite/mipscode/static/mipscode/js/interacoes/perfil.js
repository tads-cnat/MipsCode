'use strict'
let photo = document.getElementById('avatarView');
let file = document.getElementById('file');
let buttonIMGinput = document.getElementById('fileInput')

photo.addEventListener('click', () => {
    file.click();
});

buttonIMGinput.addEventListener('click', () => {
    file.click();
});


file.addEventListener('change', () => {

    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);

});