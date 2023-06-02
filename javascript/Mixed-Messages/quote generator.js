const openingMessages = ["Words to live by:", "Everyone's doing this:", "You'll like this quote:"];

const genRandomNum = num => Math.floor(Math.random() * num);

function generateInspirationalMessage() {
  let messageArr = [];
  messageArr.push(openingMessages[genRandomNum(openingMessages.length)]);

  // Make an HTTP request to fetch the quotes.json file
  return fetch('javascript/Mixed-Messages/quotes.json')
    .then(response => response.json())
    .then(quotes => {
      const quoteIndex = genRandomNum(quotes.length);
      messageArr.push(quotes[quoteIndex].Quote);
      messageArr.push(quotes[quoteIndex].Author);
      return `${messageArr[0]}\n${messageArr[1]}\n ~${messageArr[2]}`;
    })
    .catch(error => {
      console.error('Error fetching quotes:', error);
    });
}

function handleQuoteGeneratorButton() {
  generateInspirationalMessage()
    .then(message => {
      let paragraph = document.querySelector('p');
      paragraph.innerHTML = message;
    });
}


