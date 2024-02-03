let themeButtonDark = document.querySelector('.theme-button-dark');
let themeButtonLight = document.querySelector('.theme-button-light');

themeButtonDark.onclick = function() {
    themeButtonDark.classList.add('active');
    themeButtonLight.classList.remove('active');
    document.body.classList.add('dark');
}

themeButtonLight.onclick = function() {
    themeButtonDark.classList.remove('active');
    themeButtonLight.classList.add('active');
    document.body.classList.remove('dark');
}

let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSansSerif.onclick = function() {
    fontButtonSansSerif.classList.add('active');
    fontButtonSerif.classList.remove('active');
    document.body.classList.remove('serif');
}

fontButtonSerif.onclick = function() {
    fontButtonSansSerif.classList.remove('active');
    fontButtonSerif.classList.add('active');
    document.body.classList.add('serif');
}

let blogShorts = document.querySelectorAll('.blog-article.short');

for(let blogShort of blogShorts){
    let moreButton = blogShort.querySelector('.more')
    moreButton.onclick = function() {
        blogShort.classList.remove('short');
    }
}

let cardViewButtonGrid = document.querySelector('.card-view-button-grid');
let cardViewButtonList = document.querySelector('.card-view-button-list');
let card = document.querySelector('.cards');

cardViewButtonGrid.onclick = function() {
    cardViewButtonGrid.classList.add('active');
    cardViewButtonList.classList.remove('active');
    card.classList.remove('list');
}

cardViewButtonList.onclick = function() {
    cardViewButtonGrid.classList.remove('active');
    cardViewButtonList.classList.add('active');
    card.classList.add('list');
}

let activePhoto = document.querySelector('.active-photo');
let miniPhotos = document.querySelectorAll('.preview-list a');

for(let miniPhoto of miniPhotos){
    miniPhoto.onclick = function(evt){
        evt.preventDefault();
        activePhoto.src = miniPhoto.href;
        let currentActive = document.querySelector('.active-item');
        currentActive.classList.remove('active-item');
        miniPhoto.classList.add('active-item');
    }
}