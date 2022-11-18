//Store HTML elements
const title = document.getElementById("title");
const directions = document.getElementById("directions");
const textbox = document.getElementById("textbox");
const submit = document.getElementById("submit");
const reponse = document.getElementById("response");

//API stuff endpoint: http(s)://gateway.marvel.com/
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://gateway.marvel.com/v1/public/characters', true)

request.onload = function () {
  // Begin accessing JSON data here
  alert("inside function");
  alert(request.status);
  
  var data = JSON.parse(this.data);

  if(request.status >= 200 && request.status <= 400) {
    
    data.forEach(character => {
    // Log each character's name
    console.log(character.name);
  })
  } else {
    alert("error");
  }
  
  
}

// Send request
request.send("apikey=0d0d046ee0b75405f5881a545523f18d");

//make button work
submit.addEventListener("click", respond);

//list of keywords
const keywords = ["vision", "avengers", "thanos"];

//list of responses
const responses = ["That's me!", "I am a member of the Avengers!", "Yes, we defeated Thanos."];

//chatbot's response
function respond() {
  let userInput = textbox.value;
  response.innerHTML = getResponse(userInput);
}

function getResponse(input) {
  input = input.toLowerCase();
  for (let i = 0; i < keywords.length; i++) {
    if (input.includes(keywords[i])) {
      return responses[i];
    }
  }

  return "That's interesting!";
}



//api keys public: 0d0d046ee0b75405f5881a545523f18d


