const btn = document.querySelector('#js-new-quote');
btn.addEventListener('click', getQuote);

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

const books = ['Dune', 'Harry Potter', 'Hunger Games', 'Maze Runner', 'Divergent', 'Catch 21', '1984', 'Lord of the FLies']

//const answerBtn = document.querySelector('#js-tweet');
//answerBtn.addEventListener('click', getAnswer);

const answerText = document.querySelector('#js-answer-text');

//var book = prompt("What is your favorite book?")

let answer ='';

const user_input = document.querySelector('#Name')

let input = '';

const app = document.querySelector('.app');

app.addEventListener('mousemove', () => {
    input = user_input.value;
});

async function getQuote() {

    //get random  book from array
    //redefine enpoint
    const book = randomValueFromArray(books)
    const endpoint = "https://openlibrary.org/search.json?title=" + book;

    try {
        
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json);

        //displayQuote(json['doc']);
        console.log(json['docs'][0]['author_name'][0]);
        //reference to html element (p, div, span)
        const author = document.querySelector("#Author");
        //reference.textContent = json[something]
        author.textContent = json['docs'][0]['author_name'][0];
        
        console.log(json['docs'][0]['first_publish_year']);
        const year = document.querySelector("#Year");
        year.textContent = json['docs'][0]['first_publish_year'];

    } catch (err) {
        console.log(err);
        alert('Failed to fetch new quote')
    }

}

function getAnswer() {
    answerText.textContent = answer;
}

function displayQuote(quote) {
    const quoteText = document.querySelector
    ("#js-quote-text");
    quoteText.textContent = quote;
}

getQuote()