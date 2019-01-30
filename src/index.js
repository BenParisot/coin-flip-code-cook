import catOrDog from './cat-or-dog.js';

const pickForm = document.getElementById('pick-form');
const image = document.getElementById('animal-pic');

pickForm.addEventListener('submit', function(event){
    event.preventDefault();
    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';

    if(animal === 'cat') {
        imageSource = '../assets/cat.jpg';
    }
    else {
        imageSource = '../assets/dog.jpg';
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