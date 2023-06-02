const openingMessages = ["Words to live by:", "Everyone's doing this:", "You'll like this quote:"]
const genRandomNum = num => Math.floor(Math.random() * num);

const quotes = require('./quotes.json');
//console.log(quotes[0].Quote);
const generateInspirationalMessage = () => {
    let messageArr = []
    messageArr.push(openingMessages[genRandomNum(openingMessages.length)]);
    const quoteIndex = genRandomNum(quotes.length);
    messageArr.push(quotes[quoteIndex].Quote);
    messageArr.push(quotes[quoteIndex].Author);
    return `${messageArr[0]}\n${messageArr[1]}\n ~${messageArr[2]}`


}
console.log(generateInspirationalMessage());