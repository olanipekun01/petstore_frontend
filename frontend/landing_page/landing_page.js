let dropDown = document.querySelector('.drop_down');
let shopLink = document.querySelector('.shop_link');
let homeLink = document.querySelector('.home_link');
let featuredLink = document.querySelector('.featured_link');
let landingHero = document.querySelector('.landing_hero');


// let secondSection = document.querySelector('.third_card_div');
let cleanCatText = document.querySelector('.clean_cat_text');
let feedCatText = document.querySelector('.feed_cat_text');
let housingCatText = document.querySelector('.housing_cat_text');
let petsCatText = document.querySelector('.pets_cat_text');
let servicesCatText = document.querySelector('.services_cat_text');

let cleanCatImg = document.querySelector('.clean_cat_img');
let feedCatImg = document.querySelector('.feed_cat_img');
let housingCatImg = document.querySelector('.housing_cat_img');
let petsCatImg = document.querySelector('.pets_cat_img');
let servicesCatImg = document.querySelector('.services_cat_img');


shopLink.onmouseover = () => {
    dropDown.classList.add('active');
}

dropDown.onmouseover = () => {
    dropDown.classList.add('active');
}

homeLink.onmouseover = () => {
    dropDown.classList.remove('active');
}


featuredLink.onmouseover = () => {
    dropDown.classList.remove('active');
}


landingHero.onmouseover = () => {
    dropDown.classList.remove('active');
}


// secondSection.onmouseover = () => {
//     cleanCatText.classList.remove('active');
//     feedCatText.classList.remove('active');
//     housingCatText.classList.remove('active');
//     petsCatText.classList.remove('active');
//     servicesCatText.classList.remove('active');
// }

cleanCatImg.onmouseover = () => {
    cleanCatText.classList.add('active');
    feedCatText.classList.remove('active');
    housingCatText.classList.remove('active');
    petsCatText.classList.remove('active');
    servicesCatText.classList.remove('active');
}

feedCatImg.onmouseover = () => {
    feedCatText.classList.add('active');
    cleanCatText.classList.remove('active');
    housingCatText.classList.remove('active');
    petsCatText.classList.remove('active');
    servicesCatText.classList.remove('active');
}

housingCatImg.onmouseover = () => {
    housingCatText.classList.add('active');
    feedCatText.classList.remove('active');
    cleanCatText.classList.remove('active');
    petsCatText.classList.remove('active');
    servicesCatText.classList.remove('active');
}

petsCatImg.onmouseover = () => {
    petsCatText.classList.add('active');
    feedCatText.classList.remove('active');
    cleanCatText.classList.remove('active');
    housingCatText.classList.remove('active');
    servicesCatText.classList.remove('active');
}

servicesCatImg.onmouseover = () => {
    servicesCatText.classList.add('active');
    feedCatText.classList.remove('active');
    cleanCatText.classList.remove('active');
    housingCatText.classList.remove('active');
    petsCatText.classList.remove('active');
}