//Store HTML elements
const title = document.getElementById("title");
const directions = document.getElementById("directions");
const textbox = document.getElementById("textbox");
const submit = document.getElementById("submit");
const reponse = document.getElementById("response");

const KEY = "&apikey=0d0d046ee0b75405f5881a545523f18d";
var endPoint = "https://gateway.marvel.com:443/v1/public/";


function makeRequest(requestURL) {
  alert(requestURL);
  var request = new XMLHttpRequest()
  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', endPoint + requestURL + KEY, true)

  request.onload = function () {
    // Begin accessing JSON data here

    var data = JSON.parse(this.data);
    var parsedData = [];
    if (request.status >= 200 && request.status <= 400) {
      alert(data);
      data.forEach(item => {
        // add items to list
       parsedData.push(item);
      })
    } else {
      alert("error");
    }

    return parsedData;
  }

  // Send request
  request.send();
}
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
  alert(input);
  let data = makeRequest("characters?name="+input);
  alert(data.length);
  return data.length;
}



//api keys public: 0d0d046ee0b75405f5881a545523f18d


