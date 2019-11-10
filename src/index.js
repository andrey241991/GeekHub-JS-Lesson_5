import {getPictures} from "./Api/index.js";
import {getImageItems} from "./Helper/index.js";

(function fun() {
let pictureItems = [];
let currentElement = -1;
const submitBtn = document.querySelector('.search-form__submmit');
const searchField = document.querySelector('.search-form__input');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
const btnClose = document.querySelector('.modal-close');
const sliderContainer = document.querySelector('.slider-image_container');
const containerForPictures = document.querySelector('.content-main');

submitBtn.addEventListener('click', (event)=>{
 event.preventDefault();
 let value = searchField.value;
 if( value != ''){
   searchField.value = '';
   getImages(value);
 }else{
   alert('Please fill in input field')
 }
});

btnLeft.addEventListener('mouseover', ()=>{
 btnLeft.src = "./Images/left_arrow-white.png";
 btnLeft.style.background =  '#d5d1d1';
});
btnLeft.addEventListener('mouseout', ()=>{
 btnLeft.src = "./Images/left_arrow.png";
 btnLeft.style.background =  'none';
});
btnLeft.addEventListener('click', ()=>{
 if(currentElement === 0){
   currentElement = pictureItems.length -1;
   showImageInModalWindow(pictureItems[currentElement], currentElement);
   return;
 }
 currentElement--;
 showImageInModalWindow(pictureItems[currentElement], currentElement);
});

btnRight.addEventListener('mouseover', ()=>{
 btnRight.src = "./Images/right-arrow-white.png";
 btnRight.style.background =  '#d5d1d1';
});
btnRight.addEventListener('mouseout', ()=>{
 btnRight.src = "./Images/right_arrow.png";
 btnRight.style.background =  'none';
});
btnRight.addEventListener('click', ()=>{
 if(currentElement === pictureItems.length-1){
    currentElement = 0;
    showImageInModalWindow(pictureItems[currentElement], currentElement);
    return;
 }
 currentElement++;
 showImageInModalWindow(pictureItems[currentElement], currentElement);
});

btnClose.addEventListener('click', ()=>{
 sliderContainer.style.display = 'none';
});

function getImages(searchedText){
   getPictures(searchedText).then(response => {
       console.log('response', response);
   getImageItems(response.hits, setPictures);
 });
}

function setPictures(pictures){
   pictureItems = [];
   containerForPictures.innerHTML = '';
   pictureItems = pictures;

   pictures.map((element, index) => {
   let image = document.createElement('img');
   image.src = element.largeImage;
   image.addEventListener('click', ()=>{
     showImageInModalWindow(element, index);
   });
   image.classList.add('img-icon');
   containerForPictures.appendChild(image);
 });
}

 function showImageInModalWindow(element, index){
   currentElement = index;
   sliderContainer.style.display = 'block';
   let image = document.querySelector('.inner_container__image');
   image.src = element.largeImage;
 }

 getImages('cat');
}());
