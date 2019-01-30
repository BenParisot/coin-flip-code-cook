import catOrDog from './cat-or-dog.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-pic');
const catNode = document.getElementById('cat-count');
const dogNode = document.getElementById('dog-count');

let catCount = 0;
let dogCount = 0;


pickForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';


    if(animal === 'cat') {
        imageSource = '../assets/cat.jpg';
        catCount++;
        catNode.textContent = catCount;

    }
    else {
        imageSource = '../assets/dog.jpg';
        dogCount++;
        dogNode.textContent = dogCount;
    }

    image.src = imageSource;
    image.classList.remove('hidden');



});
//grab form node from DOM

//add event listener to form node

//have button/form submit generate random number

//create function that takes random number and either returns dog or cat

//assign img tag either cat or dog

//