import simpleLightbox from "simplelightbox";
import Notiflix from "notiflix";
import { getImage } from "./getImages";
import axios from 'axios';


const btn = document.querySelector('button');
const input = document.querySelector('input');
const gallery = document.querySelector('.gallery');
btn.addEventListener('submit', onSubmitBtnClick);

//  return fetch("https://pixabay.com/api?key=34960745-b530bdf219145f51506c30578&q=cat").then(console.log(response.json())) 

function onSubmitBtnClick(e) {
  e.preventDefault;
  let search = input.value.trim();
  gallery.innerHTML = "";
  console.log(search);
  getImage(search).then((response) => console.log(response));

    if(search !== "")
{   getImage(search).then(images => { 
  renderImageCard(images);
  console.log(images);
  
    }).catch((error) => {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.')
gallery.innerHTML = "";
        });}
    }

// async function getImage(search) {
   
//   try {
// //   const response =
// //   await axios({
// //   method: 'get',
// //   url: 'https://pixabay.com/api/',
// //   key: 34960745 - b530bdf219145f51506c30578,
// //   q: search,
// //   image_type: photo,
// //   orientation: horizontal,
// //   safesearch: true,
// // })
//     const response = await axios.get(`https://pixabay.com/api?key=34960745-b530bdf219145f51506c30578&q=cat`);
//     // return response;
//     console.log(response.json());
//   } catch (error) {
//     console.error(error);
//   }
// }


function renderImageCard(images) {
  let imagesMarkup = images.map(({ name: { official }, flags: { svg } }) => {
    return `<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`
  }).join(' ');
    
  gallery.innerHTML = imagesMarkup;
}


// const response =
//  const response = axios.get('https://pixabay.com/api', {
//   params: {
//     key: '34960745-b530bdf219145f51506c30578',
//     q: 'dog',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   }
// }).then((response) => console.log(response));
