let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"Plus un ordinateur possède de RAM, plus vite il peut générer un message d’erreur."' ,
    person:'Dave barry'
}, {
    quote: '"C’est très bizarre d’écrire sur un ordinateur, c’est comme sculpter de l’eau."' ,
    person:' Jean Echenoz'
},  {
    quote: '"Les ordinateurs sont inutiles. Ils ne savent que donner des réponses.  "' ,
    person:' Pablo Picasso'
}, {
    quote: '" Informatique : Alliance d’un science inexacte et d’une activité humaine faillible. "' ,
    person:'Luc Fayard'
},
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})